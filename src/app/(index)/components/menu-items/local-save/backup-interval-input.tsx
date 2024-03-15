import React, {useEffect, useRef, useState} from 'react';
import {Label} from '@/shadcn/ui/label';
import {MenubarItem} from '@/shadcn/ui/menubar';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {Comment} from '@/app/(index)/components/menu-items/utils/comment';
import {Input} from '@/shadcn/ui/input';
import {localSave} from '@/app/(index)/components/menu-items/local-save/local-save';
import {toast} from 'sonner';
import {ILocalBackup} from '@/app/(index)/flow/context/ILocalBackup';

export const BackupIntervalInput = () => {
    const {settings, setSettings, nodes, edges} = React.useContext(DataContext);
    console.log("Current Settings:", settings);

    const [localBackupsInterval, setLocalBackupsInterval] = useState(settings.localBackupsInterval);
    console.log("Current localBackupsInterval:", localBackupsInterval);

    const intervalToClear = useRef<NodeJS.Timeout | null>(null);

    useEffect((): void => {
        console.log("Inside the localBackupsInterval useEffect. Current localBackupsInterval:", localBackupsInterval);
        const isBackupIntervalChanged = localBackupsInterval !== settings.localBackupsInterval;
        if (isBackupIntervalChanged) {
            toast.info('Notice', {description: 'バックアップ間隔が変更されました。変更を適用するためには、2秒間はモーダルを閉じないで待ってください。'});
            console.log("Interval Changed. New interval value:", localBackupsInterval);

            if (intervalToClear.current) clearInterval(intervalToClear.current);

            const intervalChangeMessage: string = `バックアップ間隔を${localBackupsInterval}分に設定しました。`;
            console.log("New interval message:", intervalChangeMessage);
            intervalToClear.current = setTimeout((): void => {
                if (settings.localBackups === ILocalBackup.Disable) {
                    console.log("Backup is disabled in settings.");
                    toast.success('Success', {description: intervalChangeMessage});
                    toast.error('Error', {description: 'ローカルストレージのバックアップが無効化されているため、定期バックアップはスキップされました。'});
                } else if (localBackupsInterval === '0') {
                    console.log("Interval is set to 0. Auto backup disabled.");
                    toast.success('Success', {description: '自動バックアップは無効化されました。'});
                } else {
                    console.log("Running backup.");
                    toast.success('Success', {description: intervalChangeMessage});
                    localSave(nodes, edges, settings);
                }
                setSettings({...settings, localBackupsInterval: localBackupsInterval});
            }, 2000);
        }
    }, [localBackupsInterval]);

    useEffect(() => {
        console.log("Inside cleanup useEffect.");
        return (): void => {
            console.log("Cleaning up interval.");
            if (intervalToClear.current) clearInterval(intervalToClear.current);
        };
    }, []);

    useEffect(() => {
        console.log("Inside backup useEffect.");
        let backupInterval: NodeJS.Timeout | undefined;
        const interval: number = parseInt(localBackupsInterval);

        if (interval && settings.localBackups !== ILocalBackup.Disable) {
            console.log("Setting up new interval.");
            backupInterval = setInterval(() => {
                console.error("Running scheduled backup.");
                toast.error('Error', {description: '定期バックアップが実行されました。'});
                localSave(nodes, edges, settings);
            }, interval * 60 * 1000); // convert minutes to milliseconds
        }

        return ():void => {
            console.log("Cleaning up backup interval.");
            if (backupInterval) {
                clearInterval(backupInterval);
            }
        };
    }, [settings.localBackups, localBackupsInterval, nodes, edges, settings]);

    return (
        <MenubarItem className='grid w-full max-w-sm items-center gap-1.5'>
            <Label>Backups Interval</Label>
            <Comment comment='0~25まで設定可能。単位: 分' />
            <Comment comment='0の場合は自動バックアップを行いません。' />
            <Comment comment='値の変更を適用する場合は、値を変更してから2秒間はモーダルを閉じないで待ってください。' />
            <Input
                onClick={(event: React.MouseEvent<HTMLInputElement>): void => {
                    console.log("Input clicked.");
                    event.stopPropagation();
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                    console.log("Input value changed:", event.target.value);
                    const newValue: string = event.target.value;
                    if (newValue === '') {
                        console.log("New value is empty. Setting localBackupsInterval to 0");
                        setLocalBackupsInterval('0');
                        return;
                    }
                    if (parseInt(newValue) > 25) {
                        console.log("New value is greater than 25. Setting localBackupsInterval to 25");
                        setLocalBackupsInterval('25');
                        return;
                    }
                    setLocalBackupsInterval(newValue);
                }}
                type='number'
                min={0}
                max={25}
                placeholder={'Backup Interval'}
                value={localBackupsInterval}
            />
        </MenubarItem>
    );
};