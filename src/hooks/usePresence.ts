import { useEffect, useState, useCallback, useRef } from 'react';
import { presenceService } from '../firebase/services';
import { UserPresence } from '../types';

export interface UsePresenceReturn {
  presenceData: UserPresence[];
  setUserOnline: (userId: string) => Promise<void>;
  setUserOffline: (userId: string) => Promise<void>;
  isUserOnline: (userId: string) => boolean;
  loading: boolean;
  error: string | null;
}

export const usePresence = (): UsePresenceReturn => {
  const [presenceData, setPresenceData] = useState<UserPresence[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const currentSessionId = useRef<string>(generateSessionId());

  // Gerar um ID único para a sessão
  function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Configurar listener de presença em tempo real
  useEffect(() => {
    const setupPresenceListener = () => {
      try {
        setLoading(true);
        setError(null);

        // Limpar dados de teste
        presenceService.cleanupTestData().catch(() => {});

        // Configurar listener para mudanças em tempo real
        const unsubscribe = presenceService.subscribeToPresence((data) => {
          setPresenceData(data);
          setLoading(false);
        });

        unsubscribeRef.current = unsubscribe;

        // Buscar dados iniciais
        presenceService.getAllPresence()
          .then((initialData) => {
            setPresenceData(initialData);
            setLoading(false);
          })
          .catch((err) => {
            console.error('Erro ao buscar dados iniciais de presença:', err);
            setError('Erro ao carregar dados de presença');
            setLoading(false);
          });

      } catch (err) {
        console.error('Erro ao configurar listener de presença:', err);
        setError('Erro ao configurar sistema de presença');
        setLoading(false);
      }
    };

    setupPresenceListener();

    // Cleanup ao desmontar componente
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  // Detectar quando o usuário sai da página/fecha o navegador
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Marcar todos os usuários offline quando a página é fechada
      presenceData.forEach(presence => {
        if (presence.isOnline && presence.sessionId === currentSessionId.current) {
          presenceService.setUserOffline(presence.userId).catch(console.error);
        }
      });
    };

    // REMOVIDO: handleVisibilityChange que causava problemas ao mudar de aba
    // Agora só marca offline quando realmente fecha a página

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [presenceData]);

  // Marcar usuário como online
  const setUserOnline = useCallback(async (userId: string): Promise<void> => {
    try {
      setError(null);
      await presenceService.setUserOnline(userId, currentSessionId.current);
    } catch (err) {
      console.error('Erro ao marcar usuário como online:', err);
      setError('Erro ao marcar usuário como online');
      throw err;
    }
  }, []);

  // Marcar usuário como offline
  const setUserOffline = useCallback(async (userId: string): Promise<void> => {
    try {
      setError(null);
      await presenceService.setUserOffline(userId);
    } catch (err) {
      console.error('Erro ao marcar usuário como offline:', err);
      setError('Erro ao marcar usuário como offline');
      throw err;
    }
  }, []);

  // Verificar se um usuário específico está online
  const isUserOnline = useCallback((userId: string): boolean => {
    const userPresence = presenceData.find(p => p.userId === userId);
    return userPresence?.isOnline || false;
  }, [presenceData]);

  // Manter heartbeat para usuários online - mais frequente para melhor confiabilidade
  useEffect(() => {
    const heartbeatInterval = setInterval(() => {
      // Atualizar timestamp para usuários online da sessão atual
      presenceData.forEach(presence => {
        if (presence.isOnline && presence.sessionId === currentSessionId.current) {
          presenceService.setUserOnline(presence.userId, currentSessionId.current)
            .catch(console.error);
        }
      });
    }, 15000); // A cada 15 segundos para melhor responsividade

    return () => {
      clearInterval(heartbeatInterval);
    };
  }, [presenceData]);

  return {
    presenceData,
    setUserOnline,
    setUserOffline,
    isUserOnline,
    loading,
    error
  };
};
