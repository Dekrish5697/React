import React, { useState } from 'react';
import ChildComponent from './ChildComponent a';
function ParentComponent() {
    const [message, setMessage] = useState('');
    const handleMessage = (msg) => {
        setMessage(msg);
    };
    return (
        <div>
            <ChildComponent sendMessageToParent={handleMessage} />
            <h3>Message from Child: {message}</h3>
        </div>
    );
}
export default ParentComponent;
