import {PaletteIcon} from 'lucide-react';
import {DropdownItem} from '@nextui-org/react';
import React from 'react';

export const DataResetButton = () => {
    return (
        <DropdownItem
            key='data-reset'
            startContent={<PaletteIcon />}>
            Data Reset
        </DropdownItem>
    );
};
