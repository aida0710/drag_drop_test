import {LineTypes} from '@/app/(index)/line/LineTypes';
import {match} from 'ts-pattern';
import {ILineParameters} from '@/app/(index)/line/ILineParameters';

/**
 * ILineParametersを返します。
 * @param type
 */
export function LineParameters(type: LineTypes): ILineParameters {
    return match(type)
        .with(LineTypes.Category5, (): ILineParameters => {
            return {
                type: LineTypes.Category5,
                color: '#818cf8',
                thickness: 1.0,
            };
        })
        .with(LineTypes.Category5e, (): ILineParameters => {
            return {
                type: LineTypes.Category5e,
                color: '#38bdf8',
                thickness: 1.2,
            };
        })
        .with(LineTypes.Category6, (): ILineParameters => {
            return {
                type: LineTypes.Category6,
                color: '#4ade80',
                thickness: 1.5,
            };
        })
        .with(LineTypes.Category7, (): ILineParameters => {
            return {
                type: LineTypes.Category7,
                color: '#facc15',
                thickness: 1.5,
            };
        })
        .with(LineTypes.Category8, (): ILineParameters => {
            return {
                type: LineTypes.Category8,
                color: '#fb923c',
                thickness: 2.0,
            };
        })
        .with(LineTypes.NonLimited, (): ILineParameters => {
            return {
                type: LineTypes.NonLimited,
                color: '#fb7185',
                thickness: 3.0,
            };
        })
        .otherwise(() => {
            throw new Error('Invalid LineType');
        });
}
