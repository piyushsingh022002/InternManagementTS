import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/icons/Icon';
import Button from '../components/ui/Button';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}40, ${({ theme }) => theme.gradientEnd}40);
    z-index: -1;
  }
`;

const BackgroundCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  filter: blur(80px);
  opacity: 0.5;
  z-index: -2;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  z-index: 1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.glassBg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.cardShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}20`};
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
`;

const LandingPage: React.FC = () => {
  // Animation for features section
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <HeroSection>
        <BackgroundCircle
          initial={{ x: '-50%', y: '-50%' }}
          animate={{ 
            x: ['-50%', '-30%', '-50%', '-70%', '-50%'],
            y: ['-50%', '-30%', '-70%', '-50%', '-30%', '-50%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{ 
            width: '600px', 
            height: '600px', 
            left: '50%', 
            top: '50%',
          }}
        />
        
        <HeroContent
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Intern Management Portal
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A modern, intuitive platform to manage your organization's interns.
            Track progress, assign projects, and help them grow professionally.
          </HeroSubtitle>
          
          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              as={Link}
              to="/dashboard"
              size="large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Interns <Icon name="FaArrowRight" style={{ marginLeft: '0.5rem' }} />
            </Button>
            
            <Button
              as={Link}
              to="/add-intern"
              variant="outline"
              size="large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add New Intern
            </Button>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Key Features
        </SectionTitle>
        
        <FeaturesGrid ref={ref}>
          <FeatureCard
            custom={0}
            variants={featureVariants}
            initial="hidden"
            animate={controls}
          >
            <FeatureIcon>
              <Icon name="FaUsers" size={24} />
            </FeatureIcon>
            <FeatureTitle>Intern Management</FeatureTitle>
            <FeatureDescription>
              Easily manage all your interns in one place. View profiles, track progress, and maintain records efficiently.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            custom={1}
            variants={featureVariants}
            initial="hidden"
            animate={controls}
          >
            <FeatureIcon>
              <Icon name="FaUserGraduate" size={24} />
            </FeatureIcon>
            <FeatureTitle>Skill Development</FeatureTitle>
            <FeatureDescription>
              Track and nurture the skills of your interns. Identify strengths and areas for improvement.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            custom={2}
            variants={featureVariants}
            initial="hidden"
            animate={controls}
          >
            <FeatureIcon>
              <Icon name="FaChartLine" size={24} />
            </FeatureIcon>
            <FeatureTitle>Performance Tracking</FeatureTitle>
            <FeatureDescription>
              Monitor intern performance with intuitive visualizations and detailed profiles.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </>
  );
};

export default LandingPage;
