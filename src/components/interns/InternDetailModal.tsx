import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../ui/icons/Icon';
import { Intern } from '../../data/interns';
import Badge from '../ui/Badge';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${({ theme }) => theme.cardShadow};
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  z-index: 10;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ModalHeader = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(2px);
    transform: scale(1.05);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.surface};
  overflow: hidden;
  position: absolute;
  bottom: -75px;
  left: 50px;
  z-index: 2;
  box-shadow: ${({ theme }) => theme.cardShadow};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: none;
    transform: none;
  }
`;

const ModalBody = styled.div`
  padding: 5rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileInfo = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text};
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.25rem;
    min-width: 20px;
  }
  
  span {
    color: ${({ theme }) => theme.text};
  }
`;

const ProfileBio = styled.div`
  margin-top: 2rem;
  
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }
  
  p {
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.6;
  }
`;

const ProfileDetails = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.text};
  }
`;

const DetailSection = styled.div`
  margin-bottom: 2rem;
  
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text};
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(5px);
    }
  }
`;

interface InternDetailModalProps {
  intern: Intern | null;
  isOpen: boolean;
  onClose: () => void;
}

const InternDetailModal: React.FC<InternDetailModalProps> = ({ intern, isOpen, onClose }) => {
  if (!intern) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            layoutId={`intern-${intern.id}`}
          >
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon name="FaTimes" />
            </CloseButton>
            
            <ModalHeader>
              <img src={intern.photo} alt={intern.name} />
              <ProfileImage
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img src={intern.photo} alt={intern.name} />
              </ProfileImage>
            </ModalHeader>
            
            <ModalBody>
              <ProfileInfo>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2>{intern.name}</h2>
                  <h3>{intern.role}</h3>
                  
                  <InfoItem>
                    <Icon name="FaEnvelope" />
                    <span>{intern.email}</span>
                  </InfoItem>
                  
                  <InfoItem>
                    <Icon name="FaCalendarAlt" />
                    <span>Started on {new Date(intern.startDate).toLocaleDateString()}</span>
                  </InfoItem>
                  
                  <InfoItem>
                    <Icon name="FaUserTie" />
                    <span>Mentored by {intern.mentor}</span>
                  </InfoItem>
                  
                  <Badge variant="primary" style={{ marginTop: '1rem' }}>
                    {intern.department}
                  </Badge>
                  
                  <ProfileBio>
                    <h4>Bio</h4>
                    <p>{intern.bio}</p>
                  </ProfileBio>
                </motion.div>
              </ProfileInfo>
              
              <ProfileDetails>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3>Profile Details</h3>
                  
                  <DetailSection>
                    <h4>
                      <Icon name="FaCode" style={{ marginRight: '0.5rem' }} /> Skills
                    </h4>
                    <SkillsContainer>
                      {intern.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          size="small"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </SkillsContainer>
                  </DetailSection>
                  
                  <DetailSection>
                    <h4>
                      <Icon name="FaTasks" style={{ marginRight: '0.5rem' }} /> Projects
                    </h4>
                    <ProjectsList>
                      {intern.projects.map((project, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          {project}
                        </motion.li>
                      ))}
                    </ProjectsList>
                  </DetailSection>
                </motion.div>
              </ProfileDetails>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default InternDetailModal;
