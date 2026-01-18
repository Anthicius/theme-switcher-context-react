import { createContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const togleTheme = () => {
        setTheme(prev => prev === "light" ? "dark": "light")
    }
    
    return (
        <ThemeContext.Provider value={{theme, togleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

import { useContext } from "react";

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined){
        throw new Error("useTheme must be used with ThemeProvider")
    }

    return context
};
