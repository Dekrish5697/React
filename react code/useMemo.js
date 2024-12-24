import React, { useState, useMemo } from 'react';
function App() {
    const [num, setNum] = useState(10);
    const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) +
        fibonacci(n - 2));
    const result = useMemo(() => fibonacci(num), [num]);
    return (
        < div >
            <h1>Fibonacci of {num}: {result}</h1>
            <button onClick={() => setNum(num + 1)}>Increase</button>
            <button onClick={() => setNum(num - 1)}>Decrease</button>
        </div >
    );
}
export default App;