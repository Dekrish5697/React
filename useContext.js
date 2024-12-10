import React, { createContext, useContext, useState } from
    'react';
const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
function ThemedComponent() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div style={{
            background: theme === 'light' ? 'fff' : '333',
            color: theme === 'light' ? '000' : 'fff'
        }}>
            <p>Current theme is {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark'
                : 'light')}>Toggle Theme</button>
        </div>
    );
}
// Use ThemeProvider to wrap ThemedComponent in the main App
function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}

export default App;
