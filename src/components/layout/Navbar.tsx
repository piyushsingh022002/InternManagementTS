import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../ui/icons/Icon';
import { useTheme } from '../../context/ThemeContext';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled(motion(Link))<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) => $isActive ? theme.primary : theme.text};
  font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $isActive }) => $isActive ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  
  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <Logo
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/">Intern Portal</Link>
      </Logo>
      
      <NavLinks>
        <NavLink 
          to="/" 
          $isActive={location.pathname === '/'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon name="FaHome" style={{ marginRight: '0.5rem' }} /> Home
        </NavLink>
        <NavLink 
          to="/dashboard" 
          $isActive={location.pathname === '/dashboard'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon name="FaUsers" style={{ marginRight: '0.5rem' }} /> Interns
        </NavLink>
        <NavLink 
          to="/add-intern" 
          $isActive={location.pathname === '/add-intern'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon name="FaUserPlus" style={{ marginRight: '0.5rem' }} /> Add Intern
        </NavLink>
        <NavLink 
  to="/hr-page" 
  $isActive={location.pathname === '/login-page'}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <button
    style={{
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#4F46E5', // Indigo shade (adjust if needed)
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.3s ease',
    }}
  >
    Hr? Login
  </button>
</NavLink>

<NavLink 
  to="/intern-page" 
  $isActive={location.pathname === '/intern-page'}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <button
    style={{
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      backgroundColor: '#4F46E5', // Indigo shade (adjust if needed)
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.3s ease',
    }}
  >
    Intern? Login
  </button>
</NavLink>

        
        <ThemeToggle 
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <Icon name="FaSun" /> : <Icon name="FaMoon" />}
        </ThemeToggle>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
