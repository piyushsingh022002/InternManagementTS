import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Main = styled(motion.main)`
  padding-top: 80px; /* Space for fixed navbar */
  min-height: 100vh;
`;

const PageContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <PageContainer>{children}</PageContainer>
      </Main>
    </>
  );
};

export default Layout;
