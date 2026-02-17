import React, { createContext, useState, useContext } from 'react';

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  const login = (userId, password) => {
    // Demo credentials - replace with real backend authentication
    const validCredentials = {
      email: 'admin@fashionhub.com',
      password: 'Admin@123',
      name: 'Fashion Admin'
    };

    if (userId === validCredentials.email && password === validCredentials.password) {
      const userData = {
        id: 1,
        email: validCredentials.email,
        name: validCredentials.name,
        role: 'admin',
        loginTime: new Date()
      };
      
      setAdminUser(userData);
      setIsAuthenticated(true);
      // Store in localStorage for persistence
      localStorage.setItem('adminAuth', JSON.stringify(userData));
      return { success: true, message: 'Login successful!' };
    }
    
    return { success: false, message: 'Invalid email or password' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    localStorage.removeItem('adminAuth');
  };

  // Check if user was previously logged in
  const checkAuth = () => {
    const storedAuth = localStorage.getItem('adminAuth');
    if (storedAuth) {
      const userData = JSON.parse(storedAuth);
      setAdminUser(userData);
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      adminUser, 
      login, 
      logout,
      checkAuth 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export default AuthContext;
