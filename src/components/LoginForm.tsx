import React, { useState } from 'react';
import { User, LogIn, Shield } from 'lucide-react';
import { users } from '../data/users';

interface LoginFormProps {
  onLogin: (user: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedUser) {
      setError('Selecione um usuário');
      return;
    }
    
    const user = users.find(u => u.id === selectedUser);
    if (!user) {
      setError('Usuário não encontrado');
      return;
    }

    // Verificar senha baseada no usuário
    const validPasswords: { [key: string]: string } = {
      '1': 'tiago123',   // Tiago Dutra
      '2': 'otavio123',  // Otávio Laplechade
      '3': 'joao123'     // João Braziliano
    };

    if (password !== validPasswords[selectedUser]) {
      setError('Senha incorreta');
      return;
    }

    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img src="DominusClear.png" alt="Dominus Logo" className="w-16 h-16" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Dominus</h1>
          <p className="text-purple-200">Sistema de Agenda</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Selecionar Usuário
            </label>
            <div className="space-y-2">
              {users.map((user) => (
                <label key={user.id} className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors border border-white/10">
                  <input
                    type="radio"
                    name="user"
                    value={user.id}
                    checked={selectedUser === user.id}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-white font-bold mr-3`}>
                    {user.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium">{user.name}</p>
                    <p className="text-purple-200 text-sm">{user.email}</p>
                  </div>
                  {selectedUser === user.id && (
                    <div className="ml-auto">
                      <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Digite sua senha"
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 flex items-center justify-center"
          >
            <LogIn className="h-5 w-5 mr-2" />
            Entrar no Dominus
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;