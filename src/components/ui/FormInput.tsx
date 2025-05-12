import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface InputContainerProps {
  isFocused: boolean;
  hasValue: boolean;
  isError?: boolean;
}

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const StyledInput = styled.input<InputContainerProps>`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme, isFocused, isError }) => 
    isError 
      ? theme.error 
      : isFocused 
        ? theme.primary 
        : theme.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.transition};
  outline: none;
  
  &:focus {
    box-shadow: 0 0 0 3px ${({ theme, isError }) => 
      isError ? `${theme.error}40` : `${theme.primary}40`};
  }
`;

const StyledLabel = styled(motion.label)<InputContainerProps>`
  position: absolute;
  left: ${({ isFocused, hasValue }) => (isFocused || hasValue) ? '0.5rem' : '1rem'};
  top: ${({ isFocused, hasValue }) => (isFocused || hasValue) ? '-0.5rem' : '1rem'};
  font-size: ${({ isFocused, hasValue }) => (isFocused || hasValue) ? '0.75rem' : '1rem'};
  padding: 0 0.25rem;
  color: ${({ theme, isFocused, isError }) => 
    isError 
      ? theme.error 
      : isFocused 
        ? theme.primary 
        : theme.textSecondary};
  background-color: ${({ theme }) => theme.surface};
  pointer-events: none;
  transition: ${({ theme }) => theme.transition};
`;

const ErrorMessage = styled(motion.span)`
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`;

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  [x: string]: any;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <InputContainer>
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
        hasValue={!!value}
        isError={!!error}
        required={required}
        {...rest}
      />
      <StyledLabel
        htmlFor={id}
        isFocused={isFocused}
        hasValue={!!value}
        isError={!!error}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {label}{required && ' *'}
      </StyledLabel>
      {error && (
        <ErrorMessage
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </ErrorMessage>
      )}
    </InputContainer>
  );
};

export default FormInput;
