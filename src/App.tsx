import React, { useState, useEffect } from 'react';
import { User } from './types';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { useCurrentUserPresence } from './hooks/useCurrentUserPresence';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Gerenciar presença do usuário atual automaticamente
  useCurrentUserPresence({ 
    currentUser, 
    isLoggedIn: !!currentUser 
  });

  useEffect(() => {
    // Sempre remover usuário salvo ao iniciar
    localStorage.removeItem('dominus-user');
    setCurrentUser(null);
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('dominus-user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('dominus-user');
  };

  if (!currentUser) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <Dashboard currentUser={currentUser} onLogout={handleLogout} />;
}

export default App;