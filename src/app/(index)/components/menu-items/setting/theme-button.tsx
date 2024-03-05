import {useTheme} from 'next-themes';
import React from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {DropdownItem, Select, SelectItem} from '@nextui-org/react';
import {PaletteIcon} from 'lucide-react';
import {ThemeValue} from '@/app/(index)/flow/context/IThemeValue';

export const ThemeButton = () => {
    const {settings, setSettings} = React.useContext(DataContext);

    const {setTheme} = useTheme();

    return (
        <DropdownItem
            key='theme'
            startContent={<PaletteIcon />}>
            Theme
            <Select
                labelPlacement='outside'
                label='Theme Change'
                selectedKeys={[settings.pageTheme]}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
                    const value: ThemeValue = event.target.value as ThemeValue;
                    setSettings({
                        ...settings,
                        pageTheme: value,
                    });
                    setTheme(value);
                }}>
                <SelectItem
                    key='system'
                    value='system'>
                    System
                </SelectItem>
                <SelectItem
                    key='dark'
                    value='dark'>
                    Dark
                </SelectItem>
                <SelectItem
                    key='light'
                    value='light'>
                    Light
                </SelectItem>
            </Select>
        </DropdownItem>
    );
};
