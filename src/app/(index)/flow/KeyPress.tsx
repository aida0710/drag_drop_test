import {useKeyPress} from 'reactflow';
import {localSave} from '@/app/(index)/components/menu-items/local-save/local-save';
import React, {useEffect} from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';

export const KeyPress = () => {
    const {nodes, edges, settings} = React.useContext(DataContext);

    const ctrlAndCPressed = useKeyPress('Control+c');

    useEffect((): void => {
        if (ctrlAndCPressed) {
            localSave(nodes, edges, settings);
        }
    }, [ctrlAndCPressed, edges, nodes, settings]);

    return <></>;
};
