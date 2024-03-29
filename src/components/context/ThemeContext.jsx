
import { createContext, useEffect, useState } from "react";


// step 1 : create  context with  value default


export const  ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => {}
})

// step2  create a provider with additinal functionality

export const Provider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => { 
        setTheme(prevTheme => prevTheme === "dark" ? "light":"dark");
    }
    
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark")
        root.classList.add(theme)
    }, [theme])
    
    // step 3 pass value to the themeprovider 
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )



}
