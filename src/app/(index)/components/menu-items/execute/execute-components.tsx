import React, {useState} from 'react';
import {ExecuteModal} from '@/app/(index)/components/menu-items/execute/execute-modal';

export const ExecuteComponents = () => {
    const [selectedSourceNode, setSelectedSourceNode] = useState('');
    const [selectedDestinationNode, setSelectedDestinationNode] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('ping');

    return (
        <ExecuteModal
            selectedSourceNode={selectedSourceNode}
            setSelectedSourceNode={setSelectedSourceNode}
            selectedDestinationNode={selectedDestinationNode}
            setSelectedDestinationNode={setSelectedDestinationNode}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
        />
    );
};
