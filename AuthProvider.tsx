import React, { createContext, useState, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextProps {
  user: User | null;
  signIn: (token: string, userData: User) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (userData: User) => void;
}

interface User {
  id: number;
  email: string;
  username: string;
  token: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (token: string, userData: User) => {
    try {
      await AsyncStorage.setItem('userToken', token);
      setUser(userData);
    } catch (error) {
      console.error('Failed to save token', error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUser(null);
    } catch (error) {
      console.error('Failed to remove token', error);
    }
  };

  const updateUser = (userData: User) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
