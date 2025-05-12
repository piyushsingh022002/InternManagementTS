import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Icon from '../components/ui/icons/Icon';

const PageTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const FormContainer = styled(Card)`
  max-width: 500px;
  margin: 0 auto;
  padding: 2.5rem;
`;

const FormActions = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const ErrorMessage = styled(motion.div)`
  color: ${({ theme }) => theme.error};
  background-color: ${({ theme }) => `${theme.error}20`};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 1rem;
  text-align: center;
`;

const InternPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Simulate login
    if (email === 'admin@example.com' && password === 'password123') {
      navigate('/intern-dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Intern Login
      </PageTitle>

      <FormContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {error && (
          <ErrorMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </ErrorMessage>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <FormActions
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon name="FaSignInAlt" style={{ marginRight: '0.5rem' }} />
              Login
            </Button>
            <Button
              type="button"
              variant="text"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </FormActions>
        </form>
      </FormContainer>
    </>
  );
};

export default InternPage;
