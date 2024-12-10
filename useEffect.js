import React, { useState, useEffect } from 'react';
function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => setData(json));
    }, []); // Empty array means this only runs once on mount
    return <div>{data ? data.title : 'Loading...'}</div>;
}

export default App;
