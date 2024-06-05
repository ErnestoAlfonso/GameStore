import { createContext, useState } from "react";


export const themeContext = createContext({});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <themeContext.Provider value={{
            theme,
            toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
        }}>
            {children}
        </themeContext.Provider>
    )
}

