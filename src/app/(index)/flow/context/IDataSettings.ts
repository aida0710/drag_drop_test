import {BackgroundVariant} from 'reactflow';
import {ThemeValue} from '@/app/(index)/flow/context/IThemeValue';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';
import {ILocalBackup} from '@/app/(index)/flow/context/ILocalBackup';

export interface IDataSettings {
    backgroundVariant: BackgroundVariant;
    pageTheme: ThemeValue;
    miniMap: IMiniMapValue;
    localBackups: ILocalBackup;
    localBackupsInterval: string;
}
