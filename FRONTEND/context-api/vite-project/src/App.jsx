import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
