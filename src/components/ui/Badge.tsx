import styled from 'styled-components';
import { motion } from 'framer-motion';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  isGlass?: boolean;
}

const getVariantStyles = (variant: BadgeVariant, theme: any) => {
  const variants = {
    primary: {
      bg: theme.primary,
      color: 'white',
    },
    secondary: {
      bg: theme.secondary,
      color: 'white',
    },
    success: {
      bg: theme.success,
      color: 'white',
    },
    error: {
      bg: theme.error,
      color: 'white',
    },
    warning: {
      bg: '#ffc107',
      color: '#212529',
    },
    info: {
      bg: '#0dcaf0',
      color: '#212529',
    },
  };

  return `
    background-color: ${variants[variant].bg};
    color: ${variants[variant].color};
  `;
};

const getSizeStyles = (size: BadgeSize) => {
  const sizes = {
    small: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.75rem',
    },
    medium: {
      padding: '0.35rem 0.75rem',
      fontSize: '0.875rem',
    },
    large: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
    },
  };

  return `
    padding: ${sizes[size].padding};
    font-size: ${sizes[size].fontSize};
  `;
};

export const Badge = styled(motion.span)<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-weight: 600;
  ${({ variant = 'primary', theme }) => getVariantStyles(variant, theme)}
  ${({ size = 'medium' }) => getSizeStyles(size)}
  
  ${({ isGlass, theme }) =>
    isGlass &&
    `
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    `}
`;

Badge.defaultProps = {
  variant: 'primary',
  size: 'medium',
  isGlass: false,
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export default Badge;
