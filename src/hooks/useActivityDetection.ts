import { useEffect, useRef } from 'react';
import { presenceService } from '../firebase/services';

interface UseActivityDetectionParams {
  userId: string;
  isOnline: boolean;
  inactivityTimeout?: number; // em minutos
}

export const useActivityDetection = ({ 
  userId, 
  isOnline, 
  inactivityTimeout = 30 // 30 minutos por padrão
}: UseActivityDetectionParams) => {
  const lastActivityRef = useRef<number>(Date.now());
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Eventos que indicam atividade do usuário
  const activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

  // Atualizar timestamp de atividade
  const updateActivity = () => {
    lastActivityRef.current = Date.now();
    
    // Reset do timer de inatividade
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Configurar novo timer
    inactivityTimerRef.current = setTimeout(() => {
      if (isOnline) {
        console.log(`Usuário ${userId} inativo por ${inactivityTimeout} minutos, marcando como offline`);
        presenceService.setUserOffline(userId).catch(console.error);
      }
    }, inactivityTimeout * 60 * 1000);
  };

  useEffect(() => {
    if (!isOnline) return;

    // Adicionar listeners de atividade
    activityEvents.forEach(event => {
      document.addEventListener(event, updateActivity, true);
    });

    // Inicializar timer
    updateActivity();

    return () => {
      // Remover listeners
      activityEvents.forEach(event => {
        document.removeEventListener(event, updateActivity, true);
      });
      
      // Limpar timer
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [isOnline, userId, inactivityTimeout]);

  return {
    lastActivity: lastActivityRef.current,
    updateActivity
  };
};
