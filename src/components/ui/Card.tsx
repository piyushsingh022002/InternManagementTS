import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  isGlass?: boolean;
  elevation?: 'low' | 'medium' | 'high';
  hoverEffect?: boolean;
}

const getElevation = (elevation: 'low' | 'medium' | 'high', theme: any) => {
  switch (elevation) {
    case 'low':
      return `0 4px 12px ${theme.cardShadow}`;
    case 'medium':
      return `0 8px 24px ${theme.cardShadow}`;
    case 'high':
      return `0 16px 32px ${theme.cardShadow}`;
    default:
      return `0 8px 24px ${theme.cardShadow}`;
  }
};

export const Card = styled(motion.div)<CardProps>`
  background: ${({ theme, isGlass }) => 
    isGlass 
      ? theme.glassBg
      : theme.cardBg
  };
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem;
  box-shadow: ${({ theme, elevation = 'medium' }) => getElevation(elevation, theme)};
  transition: ${({ theme }) => theme.transition};
  
  ${({ isGlass }) => isGlass && `
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  `}
  
  ${({ hoverEffect }) => hoverEffect && `
    &:hover {
      transform: translateY(-5px);
    }
  `}
`;

Card.defaultProps = {
  isGlass: false,
  elevation: 'medium',
  hoverEffect: true,
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

export default Card;
