export interface ThemeType {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  error: string;
  success: string;
  cardBg: string;
  cardShadow: string;
  glassBg: string;
  gradientStart: string;
  gradientEnd: string;
  borderRadius: string;
  transition: string;
}

export const lightTheme: ThemeType = {
  primary: '#3a86ff',
  secondary: '#8338ec',
  background: '#f8f9fa',
  surface: '#ffffff',
  text: '#212529',
  textSecondary: '#6c757d',
  accent: '#ff006e',
  error: '#dc3545',
  success: '#28a745',
  cardBg: 'rgba(255, 255, 255, 0.8)',
  cardShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  glassBg: 'rgba(255, 255, 255, 0.25)',
  gradientStart: '#3a86ff',
  gradientEnd: '#8338ec',
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out'
};

export const darkTheme: ThemeType = {
  primary: '#3a86ff',
  secondary: '#8338ec',
  background: '#121212',
  surface: '#1e1e1e',
  text: '#f8f9fa',
  textSecondary: '#adb5bd',
  accent: '#ff006e',
  error: '#dc3545',
  success: '#28a745',
  cardBg: 'rgba(30, 30, 30, 0.8)',
  cardShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  glassBg: 'rgba(30, 30, 30, 0.25)',
  gradientStart: '#3a86ff',
  gradientEnd: '#8338ec',
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out'
};
