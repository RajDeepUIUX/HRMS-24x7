import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'client' | 'staff' | 'manager';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for each role
const demoUsers: Record<UserRole, User> = {
  client: {
    id: '1',
    name: 'Shelby',
    email: 'shelby@gytap.com',
    role: 'client',
    organization: 'HRMS 24x7'
  },
  staff: {
    id: '2',
    name: 'John Smith',
    email: 'john.smith@gytap.com',
    role: 'staff',
    organization: 'HRMS 24x7'
  },
  manager: {
    id: '3',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@gytap.com',
    role: 'manager',
    organization: 'HRMS 24x7'
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load saved auth from localStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('hr-auth');
    if (savedAuth) {
      const parsedAuth = JSON.parse(savedAuth);
      setUser(parsedAuth);
    }
  }, []);

  const login = (role: UserRole) => {
    const selectedUser = demoUsers[role];
    setUser(selectedUser);
    localStorage.setItem('hr-auth', JSON.stringify(selectedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hr-auth');
    localStorage.removeItem('hr-current-view');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
