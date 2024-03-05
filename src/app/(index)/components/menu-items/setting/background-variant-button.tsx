import {BackgroundVariant} from 'reactflow';
import React from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';
import {DropdownItem, Select, SelectItem} from '@nextui-org/react';
import {PaletteIcon} from 'lucide-react';

export const BackgroundVariantButton = () => {
    const {settings, setSettings} = React.useContext(DataContext);

    return (
        <DropdownItem
            key='backgroundVariant'
            startContent={<PaletteIcon />}>
            Background Design
            <Select
                labelPlacement='outside'
                label='Background Change'
                selectedKeys={[settings.backgroundVariant]}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
                    const value: BackgroundVariant = event.target.value as BackgroundVariant;
                    setSettings({
                        ...settings,
                        backgroundVariant: value,
                    });
                }}>
                <SelectItem
                    key='lines'
                    value={BackgroundVariant.Lines}>
                    Lines
                </SelectItem>
                <SelectItem
                    key='dots'
                    value={BackgroundVariant.Dots}>
                    Dots
                </SelectItem>
                <SelectItem
                    key='cross'
                    value={BackgroundVariant.Cross}>
                    Cross
                </SelectItem>
            </Select>
        </DropdownItem>
    );
};
