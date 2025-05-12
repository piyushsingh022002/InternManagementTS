import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isGlass?: boolean;
}

const getButtonStyles = (variant: ButtonVariant, theme: any) => {
  switch (variant) {
    case 'primary':
      return css`
        background: linear-gradient(135deg, ${theme.gradientStart}, ${theme.gradientEnd});
        color: white;
        &:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
        }
      `;
    case 'secondary':
      return css`
        background-color: ${theme.secondary};
        color: white;
        &:hover {
          background-color: ${theme.accent};
          transform: translateY(-2px);
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${theme.primary};
        border: 2px solid ${theme.primary};
        &:hover {
          background-color: ${theme.primary};
          color: white;
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${theme.primary};
        &:hover {
          background-color: rgba(58, 134, 255, 0.1);
        }
      `;
    default:
      return css``;
  }
};

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      `;
    case 'medium':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      `;
    case 'large':
      return css`
        padding: 1rem 2rem;
        font-size: 1.125rem;
      `;
    default:
      return css``;
  }
};

export const Button = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  ${({ variant = 'primary', theme }) => getButtonStyles(variant, theme)}
  ${({ size = 'medium' }) => getButtonSize(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  
  ${({ isGlass, theme }) =>
    isGlass &&
    css`
      background: ${theme.glassBg};
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    `}
`;

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  fullWidth: false,
  isGlass: false,
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 }
};

export default Button;
