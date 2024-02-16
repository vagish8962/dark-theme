import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggerDarkMode = () => setIsDarkMode(!isDarkMode);

    const theme = isDarkMode? "dark" : "light";

    useEffect(() =>{
        document.documentElement.setAttribute("data-theme", theme);
    }, [isDarkMode])

    return <ThemeContext.Provider value={{theme, toggerDarkMode}}>
        {children}
    </ThemeContext.Provider>
}