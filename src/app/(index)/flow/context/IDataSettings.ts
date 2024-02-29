import {BackgroundVariant} from 'reactflow';
import {ThemeValue} from '@/app/(index)/flow/context/IThemeValue';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';

export interface IDataSettings {
    backgroundVariant: BackgroundVariant;
    pageTheme: ThemeValue;
    miniMap: IMiniMapValue;
}
