import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Create the AuthContext with a default undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component to wrap around the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  // Login function that checks for hardcoded email and password
  const login = (email: string, password: string) => {
    const correctEmail = "21520646@gm.uit.edu.vn";
    const correctPassword = "123456789";

    if (email === correctEmail && password === correctPassword) {
      setUser(email);
      setIsAuthenticated(true); // If login is successful
    } else {
      alert('Incorrect email or password');
    }
  };

  // Logout function to clear user data and auth state
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children} {/* Render children components wrapped in this provider */}
    </AuthContext.Provider>
  );
};

// Custom hook to access the Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};