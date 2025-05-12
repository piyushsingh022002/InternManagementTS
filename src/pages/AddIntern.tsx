import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/ui/icons/Icon';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const PageTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.gradientStart}, ${({ theme }) => theme.gradientEnd});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FormContainer = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FormActions = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${({ theme }) => `${theme.success}20`};
  color: ${({ theme }) => theme.success};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface FormData {
  name: string;
  email: string;
  department: string;
  role: string;
  startDate: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  department?: string;
  role?: string;
  startDate?: string;
}

const AddIntern: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    department: '',
    role: '',
    startDate: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.department.trim()) {
      newErrors.department = 'Department is required';
    }
    
    if (!formData.role.trim()) {
      newErrors.role = 'Role is required';
    }
    
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            department: '',
            role: '',
            startDate: '',
          });
          setIsSuccess(false);
        }, 3000);
      }, 1000);
    }
  };
  
  return (
    <>
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Add New Intern
      </PageTitle>
      
      <FormContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {isSuccess && (
          <SuccessMessage
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <span>Intern added successfully!</span>
            <Button 
              variant="text" 
              size="small"
              onClick={() => setIsSuccess(false)}
            >
              <Icon name="FaTimes" />
            </Button>
          </SuccessMessage>
        )}
        
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <FormInput
              id="name"
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            
            <FormInput
              id="email"
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            
            <FormInput
              id="department"
              label="Department"
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              error={errors.department}
              required
            />
            
            <FormInput
              id="role"
              label="Role"
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              error={errors.role}
              required
            />
            
            <FormInput
              id="startDate"
              label="Start Date"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              error={errors.startDate}
              required
            />
          </FormGrid>
          
          <FormActions
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/dashboard')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </Button>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Saving...' : (
                <>
                  <Icon name="FaSave" style={{ marginRight: '0.5rem' }} /> Save Intern
                </>
              )}
            </Button>
          </FormActions>
        </form>
      </FormContainer>
    </>
  );
};

export default AddIntern;
