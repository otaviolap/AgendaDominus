import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { User } from '../types';
import { usePresence } from '../hooks/usePresence';

interface UserStatusIndicatorProps {
  users: User[];
  currentUserId?: string;
}

export const UserStatusIndicator: React.FC<UserStatusIndicatorProps> = ({ 
  users, 
  currentUserId
}) => {
  const { presenceData, isUserOnline, loading } = usePresence();
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Atualizar timestamp quando presenceData mudar
  useEffect(() => {
    setLastUpdate(new Date());
  }, [presenceData]);

  const formatLastSeen = (userId: string): string => {
    const userPresence = presenceData.find(p => p.userId === userId);
    if (!userPresence || isUserOnline(userId)) return '';
    
    const lastSeen = new Date(userPresence.lastSeen);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - lastSeen.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Agora mesmo';
    if (diffInMinutes < 60) return `${diffInMinutes}min atrás`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d atrás`;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
        <h3 className="font-medium text-gray-900 mb-3 flex items-center text-sm">
          <Users className="h-4 w-4 mr-2 text-purple-600" />
          Equipe
        </h3>
        <div className="space-y-2">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
      <h3 className="font-medium text-gray-900 mb-3 flex items-center text-sm">
        <Users className="h-4 w-4 mr-2 text-purple-600" />
        Equipe
      </h3>
      <div className="space-y-2">
        {users.map((user) => {
          const online = isUserOnline(user.id);
          const lastSeenText = formatLastSeen(user.id);
          const isCurrentUser = currentUserId === user.id;
          
          return (
            <div 
              key={user.id} 
              className="flex items-center space-x-2 p-1 rounded transition-colors"
            >
              <div className={`w-6 h-6 rounded-full ${user.color} flex items-center justify-center text-white font-bold text-xs relative`}>
                {user.avatar}
                {/* Indicador de status sobreposto */}
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                  online ? 'bg-green-500' : 'bg-gray-300'
                } transition-colors duration-200`}></div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-xs text-gray-900">
                  {user.name}
                  {isCurrentUser && <span className="text-purple-600 ml-1">(Você)</span>}
                </p>
                <p className={`text-xs transition-colors duration-200 ${
                  online ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {online ? 'Online' : `Offline${lastSeenText ? ` • ${lastSeenText}` : ''}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Contador de usuários online */}
      <div className="mt-3 pt-2 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          {presenceData.filter(p => p.isOnline).length} de {users.length} online
        </p>
      </div>
      
      {/* Status de conexão */}
      <div className="mt-2 flex items-center justify-center">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-gray-400">
            Tempo real • {lastUpdate.toLocaleTimeString('pt-BR', { 
              hour: '2-digit', 
              minute: '2-digit',
              second: '2-digit'
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
