import React, { useState, useCallback } from 'react';
function Button({ handleClick, label }) {
    return <button onClick={handleClick}>{label}</button>;
}
function App() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount((prev) => prev +
        1), []);
    return (
        <div>
            <h1>Count: {count}</h1>
            <Button handleClick={increment} label="Increment" />
        </div>
    );
}
export default App;