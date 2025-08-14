import React, { useState, useEffect } from 'react';
import { User } from './types';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Verificar se existe usuário logado no localStorage
    const savedUser = localStorage.getItem('dominus-user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
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