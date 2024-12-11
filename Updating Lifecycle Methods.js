import React, { useState, useEffect } from 'react';
function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(Count updated to ${ count });
    }, [count]); // Runs only when count changes
    return <button onClick={() => setCount(count +
        1)}>Increment</button>;
}

export default App;