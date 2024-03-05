import React from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {IMiniMapValue} from '@/app/(index)/flow/context/IMiniMapValue';
import {DropdownItem, Select, SelectItem} from '@nextui-org/react';
import {PaletteIcon} from 'lucide-react';

export const MiniMapButton = () => {
    const {settings, setSettings} = React.useContext(DataContext);

    return (
        <DropdownItem
            key='miniMap'
            startContent={<PaletteIcon />}>
            MiniMap View
            <Select
                labelPlacement='outside'
                label='MiniMap Change'
                selectedKeys={[settings.miniMap]}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
                    const value: IMiniMapValue = event.target.value as IMiniMapValue;
                    setSettings({
                        ...settings,
                        miniMap: value,
                    });
                }}>
                <SelectItem
                    key='indicate'
                    value={IMiniMapValue.Indicate}>
                    Indicate
                </SelectItem>
                <SelectItem
                    key='hidden'
                    value={IMiniMapValue.Hidden}>
                    Hidden
                </SelectItem>
            </Select>
        </DropdownItem>
    );
};
