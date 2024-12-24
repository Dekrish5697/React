import React, { useState, useEffect } from 'react';
function MyComponent() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); // Empty array means this runs only once on mount
    return <div>{data ? data.title : 'unloading...'}</div>;
}

export default MyComponent;