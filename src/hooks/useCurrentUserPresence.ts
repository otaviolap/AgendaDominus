import { useEffect, useRef } from 'react';
import { usePresence } from './usePresence';
import { User } from '../types';

interface UseCurrentUserPresenceParams {
  currentUser: User | null;
  isLoggedIn: boolean;
}

export const useCurrentUserPresence = ({ currentUser, isLoggedIn }: UseCurrentUserPresenceParams) => {
  const { setUserOnline, setUserOffline } = usePresence();
  const hasSetOnlineRef = useRef(false);

  useEffect(() => {
    if (!currentUser) return;

    if (isLoggedIn && !hasSetOnlineRef.current) {
      // Marcar como online ao fazer login (apenas uma vez)
      setUserOnline(currentUser.id)
        .then(() => {
          hasSetOnlineRef.current = true;
        })
        .catch(console.error);
    } else if (!isLoggedIn && hasSetOnlineRef.current) {
      // Marcar como offline ao fazer logout
      setUserOffline(currentUser.id)
        .then(() => {
          hasSetOnlineRef.current = false;
        })
        .catch(console.error);
    }
  }, [currentUser, isLoggedIn, setUserOnline, setUserOffline]);

  // Detectar quando a página é fechada ou o usuário sai
  useEffect(() => {
    if (!currentUser || !isLoggedIn) return;

    const handleBeforeUnload = () => {
      // Marcar como offline ao fechar a página
      if (hasSetOnlineRef.current) {
        setUserOffline(currentUser.id).catch(console.error);
      }
    };

    const handleVisibilityChange = () => {
      // REMOVIDO: Não alterar status baseado na visibilidade da página
      // Manter online mesmo quando a aba não está em foco
      if (document.hidden) {
        // Apenas log, não altera status
      } else {
        // Apenas log, não altera status
      }
    };

    // Listeners para detectar saída da página (só quando realmente sair/fechar)
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // REMOVIDO: Listeners de blur/focus que causavam o problema
    // Não alterar status quando perde/ganha foco da janela

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentUser, isLoggedIn, setUserOffline]);

  // Cleanup ao desmontar o componente
  useEffect(() => {
    return () => {
      if (currentUser && hasSetOnlineRef.current) {
        setUserOffline(currentUser.id).catch(console.error);
        hasSetOnlineRef.current = false;
      }
    };
  }, [currentUser, setUserOffline]);
};
