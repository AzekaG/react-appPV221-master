import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import ContrastIcon from '@mui/icons-material/Contrast';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    /**обратные кавычки используются для конкатенации `` */
    return (
        <header className={`theme-${theme}`}>
            <nav></nav>
            <button onClick={() => toggleTheme()}>toogle {theme}</button>
            <LightbulbIcon />


        </header>
    );
}

export default Header;
