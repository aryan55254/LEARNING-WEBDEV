import React, { Children, useState } from "react";
import ThemeContext from "./ThemeContext";
const ThemeProvider = ({children}) => {
    const [isDarkMode , setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };
    return(
        <ThemeContext.Provider value={{isDarkMode , toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;