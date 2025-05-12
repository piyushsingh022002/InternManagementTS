import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../components/ui/icons/Icon';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { interns, Intern } from '../data/interns';
import InternDetailModal from '../components/interns/InternDetailModal';

const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.cardShadow};
`;

const SearchInput = styled.div`
  flex: 1;
  min-width: 250px;
  position: relative;
  
  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: ${({ theme }) => theme.surface};
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.primary}40`};
    }
  }
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const FilterButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.text};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
  
  svg {
    font-size: 1rem;
  }
`;

const InternGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const InternCard = styled(Card)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
`;

const InternImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
  margin: -1.5rem -1.5rem 1.5rem -1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    ${InternCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const InternName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const InternRole = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

const InternMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const InternDepartment = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 3rem;
  background: ${({ theme }) => theme.glassBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.cardShadow};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }
  
  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

type SortOption = 'name' | 'department' | 'startDate';
type SortDirection = 'asc' | 'desc';

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [filteredInterns, setFilteredInterns] = useState<Intern[]>(interns);
  const [selectedIntern, setSelectedIntern] = useState<Intern | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Handle search and sorting
  useEffect(() => {
    let results = [...interns];
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        intern =>
          intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          intern.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          intern.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort results
    results.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'department':
          comparison = a.department.localeCompare(b.department);
          break;
        case 'startDate':
          comparison = new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
          break;
        default:
          comparison = 0;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
    
    setFilteredInterns(results);
  }, [searchTerm, sortBy, sortDirection]);
  
  const toggleSortDirection = () => {
    setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };
  
  const handleSort = (option: SortOption) => {
    if (sortBy === option) {
      toggleSortDirection();
    } else {
      setSortBy(option);
      setSortDirection('asc');
    }
  };
  
  return (
    <>
      <DashboardHeader>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Intern Dashboard
        </Title>
      </DashboardHeader>
      
      <FilterContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SearchInput>
          <Icon name="FaSearch" />
          <input
            type="text"
            placeholder="Search interns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>
        
        <FilterButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSort('name')}
        >
          <Icon name="FaFilter" style={{ marginRight: '0.5rem' }} /> Name {sortBy === 'name' && (sortDirection === 'asc' ? <Icon name="FaSortAmountUp" /> : <Icon name="FaSortAmountDown" />)}
        </FilterButton>
        
        <FilterButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSort('department')}
        >
          <Icon name="FaFilter" style={{ marginRight: '0.5rem' }} /> Department {sortBy === 'department' && (sortDirection === 'asc' ? <Icon name="FaSortAmountUp" /> : <Icon name="FaSortAmountDown" />)}
        </FilterButton>
        
        <FilterButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleSort('startDate')}
        >
          <Icon name="FaFilter" style={{ marginRight: '0.5rem' }} /> Start Date {sortBy === 'startDate' && (sortDirection === 'asc' ? <Icon name="FaSortAmountUp" /> : <Icon name="FaSortAmountDown" />)}
        </FilterButton>
      </FilterContainer>
      
      <AnimatePresence>
        {filteredInterns.length > 0 ? (
          <InternGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredInterns.map((intern, index) => (
              <InternCard
                key={intern.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                as={motion.div}
                layoutId={`intern-${intern.id}`}
                onClick={() => {
                  setSelectedIntern(intern);
                  setIsModalOpen(true);
                }}
              >
                <InternImage>
                  <img src={intern.photo} alt={intern.name} />
                </InternImage>
                <InternName>{intern.name}</InternName>
                <InternRole>{intern.role}</InternRole>
                <InternMeta>
                  <InternDepartment>
                    <Badge variant="primary" size="small">
                      {intern.department}
                    </Badge>
                  </InternDepartment>
                  <span>{new Date(intern.startDate).toLocaleDateString()}</span>
                </InternMeta>
              </InternCard>
            ))}
          </InternGrid>
        ) : (
          <EmptyState
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>No interns found</h3>
            <p>Try adjusting your search or filters</p>
          </EmptyState>
        )}
      </AnimatePresence>
      
      <InternDetailModal 
        intern={selectedIntern} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Dashboard;
