import {useKeyPress} from 'reactflow';
import {localSave} from '@/app/(index)/components/menu-items/local-save/local-save';
import React, {useEffect, useRef, useState} from 'react';
import {DataContext} from '@/app/(index)/flow/context/data-context';

export const KeyPress = () => {
    const {nodes, edges, settings} = React.useContext(DataContext);

    const ctrlAndCPressed = useKeyPress('Control+c');

    const [allowSave, setAllowSave] = useState(true);
    const [lastSavedTime, setLastSavedTime] = useState<number | null>(null);

    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (ctrlAndCPressed) {
            console.log('localSave called');
            localSave(nodes, edges, settings);

            if (lastSavedTime === null) {
                setLastSavedTime(Date.now());
                console.log('lastSavedTime set for the first time');
            }

            setAllowSave(false);
            console.log('allowSave set to false');

            timeoutIdRef.current = setTimeout(():void => {
                console.log('allowSave set to true after 2 seconds');
                setAllowSave(true);
            }, 2000);
        }

        return ():void => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, [ctrlAndCPressed, nodes, edges, settings]);

    useEffect(() :void=> {
        if (lastSavedTime !== null) {
            const currentTime:number = Date.now();
            const timeSinceLastSave:number = currentTime - lastSavedTime;

            if (timeSinceLastSave >= 2000) {
                console.log('allowSave set to true after 2 seconds (from second useEffect)');
                setAllowSave(true);
            } else {
                console.log(`Time since last save: ${timeSinceLastSave / 1000} seconds`);
            }
        }
    }, [lastSavedTime]);

    return <></>;
};