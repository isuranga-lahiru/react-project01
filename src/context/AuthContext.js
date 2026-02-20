import React, { createContext, useState, useContext, useCallback } from 'react'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  const login = (userId, password) => {
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

  // 2. මෙන්න මෙතන තමයි වැදගත්ම වෙනස. checkAuth එක useCallback එකකින් wrap කරනවා.
  const checkAuth = useCallback(() => {
    const storedAuth = localStorage.getItem('adminAuth');
    if (storedAuth) {
      const userData = JSON.parse(storedAuth);
      // මෙතන check එකක් දාමු infinite loop එක නවත්තන්න
      if (!isAuthenticated) { 
        setAdminUser(userData);
        setIsAuthenticated(true);
      }
    }
  }, [isAuthenticated]); // isAuthenticated වෙනස් වුණොත් විතරක් මේ function එක අලුත් වෙයි

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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export default AuthContext;