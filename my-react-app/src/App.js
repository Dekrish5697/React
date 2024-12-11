import React, { useState, useEffect } from 'react';
function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 3000);
        return () => clearInterval(timer); // Cleanup on unmount
    }, []);
    return <div>Seconds: {seconds}</div>;
}

export default Timer;