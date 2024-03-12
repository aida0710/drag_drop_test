import {ISendData} from '@/app/api/execute/ISendData';
import {EnumExecuteTypes} from '@/app/api/execute/EnumExecuteTypes';

const prefix: string = 'データチェック: ';

/**
 * @file route.ts
 * @param req
 * @constructor
 */
export async function POST(req: Request): Promise<Response> {
    if (req.method !== 'POST') {
        return Response.json('Postメソッド以外は許可されていません。', {status: 405});
    }
    if (req.headers.get('origin') !== 'http://localhost:3000') {
        return Response.json('外部からのapiアクセスは許可されていません。', {status: 403});
    }

    const data: ISendData = await req.json();
    if (data.nodes.length === 0) {
        return Response.json(prefix + 'ノードデータがありません。', {status: 400});
    }

    if (data.execute.to_node_id === data.execute.from_node_id) {
        return Response.json(prefix + '送信元と送信先が同じです。(form: ' + data.execute.from_node_id + ' / to: ' + data.execute.to_node_id + ')', {
            status: 400,
        });
    }

    const ipAddresses: Set<any> = new Set(); // 重複チェックのためのSet

    for (const node of data.nodes) {
        // IPアドレスとサブネットマスクの形式チェック
        const ipParts: string[] = node.data.ip_address.split('.');
        const subnetParts: string[] = node.data.subnet_mask.split('.');
        if (ipParts.length !== 4 || subnetParts.length !== 4) {
            return Response.json(prefix + 'IPアドレスまたはサブネットマスクの形式が正しくありません。', {status: 400});
        }

        for (const part of [...ipParts, ...subnetParts]) {
            const number: number = Number(part);
            if (isNaN(number) || number < 0 || number > 255) {
                return Response.json(prefix + 'IPアドレスまたはサブネットマスクの範囲が正しくありません。', {status: 400});
            }
        }

        // 192.168.0.0 と 192.168.0.255はエラーとする
        if (node.data.ip_address === '192.168.0.0' || node.data.ip_address === '192.168.0.255') {
            return Response.json(prefix + 'IPアドレスが192.168.0.0または192.168.0.255という値は許可されていません。', {status: 400});
        }

        // 重複チェック
        if (ipAddresses.has(node.data.ip_address)) {
            return Response.json(prefix + 'IPアドレスが重複しています。', {status: 400});
        }
        ipAddresses.add(node.data.ip_address);
    }

    return Response.json({}, {status: 200});
}
