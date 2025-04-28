import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: theme === 'light' ? 'rgba(67, 97, 238, 0.1)' : 'rgba(62, 207, 142, 0.1)',
        border: theme === 'light' ? '1px solid rgba(67, 97, 238, 0.2)' : '1px solid rgba(62, 207, 142, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: 'var(--text-color)',
        padding: '10px',
        borderRadius: '50%',
        transition: 'var(--transition)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon style={{ color: '#4361ee' }} />
      ) : (
        <FaSun style={{ color: '#3ecf8e' }} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
