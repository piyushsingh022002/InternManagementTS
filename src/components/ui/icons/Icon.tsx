import React from 'react';
import * as FaIcons from 'react-icons/fa';
import styled from 'styled-components';

type IconName = keyof typeof FaIcons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StyledIcon = styled.span<{ $size?: number; $color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => ($size ? `${$size}px` : 'inherit')};
  color: ${({ $color, theme }) => ($color ? $color : 'inherit')};
`;

const Icon: React.FC<IconProps> = ({ name, size, color, className, style }) => {
  const IconComponent = FaIcons[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" not found`);
    return null;
  }

  return (
    <StyledIcon $size={size} $color={color} className={className} style={style}>
      <span className="icon-wrapper">
        {/* @ts-ignore - This is a workaround for TypeScript issues with React Icons */}
        <IconComponent />
      </span>
    </StyledIcon>
  );
};

export default Icon;
