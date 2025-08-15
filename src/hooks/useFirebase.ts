import { useState, useEffect, useRef } from 'react';
import { Event, ProgrammingSession } from '../types';
import { eventService, sessionService, userService } from '../firebase/services';
import { testFirebaseConnection } from '../firebase/testConnection';
import { users } from '../data/users';

export const useFirebase = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [sessions, setSessions] = useState<ProgrammingSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const sessionsUnsubscribeRef = useRef<(() => void) | null>(null);

  // Carregar dados iniciais e configurar listeners em tempo real
  useEffect(() => {
    loadInitialData();
    
    // Cleanup ao desmontar
    return () => {
      if (sessionsUnsubscribeRef.current) {
        sessionsUnsubscribeRef.current();
      }
    };
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      console.log('🔄 Iniciando carregamento de dados...');
      
      // Testar conexão com Firebase
      const isConnected = await testFirebaseConnection();
      
      if (isConnected) {
        console.log('🔥 Firebase conectado - sincronizando dados...');
        
        // Sincronizar usuários locais com Firebase
        await userService.syncUsers(users);
        console.log('👥 Usuários sincronizados');
        
        // Carregar eventos e sessões
        const [eventsData, sessionsData] = await Promise.all([
          eventService.getEvents(),
          sessionService.getSessions()
        ]);
        
        console.log(`📅 ${eventsData.length} eventos carregados`);
        console.log(`💻 ${sessionsData.length} sessões carregadas`);
        
        setEvents(eventsData);
        setSessions(sessionsData);
        setError(null);
        
        // Configurar listener em tempo real para sessões
        const unsubscribeSessions = sessionService.subscribeToSessions((updatedSessions) => {
          console.log('🔄 Sessões atualizadas em tempo real:', updatedSessions.length);
          setSessions(updatedSessions);
        });
        
        sessionsUnsubscribeRef.current = unsubscribeSessions;
      } else {
        throw new Error('Falha na conexão com Firebase');
      }
    } catch (err: any) {
      console.error('❌ Erro ao carregar dados:', err);
      setError(err.message || 'Erro ao conectar com o servidor');
      
      // Fallback para dados locais
      console.log('🔄 Carregando dados locais como fallback...');
      const localEvents = JSON.parse(localStorage.getItem('dominus-events') || '[]');
      const localSessions = JSON.parse(localStorage.getItem('dominus-history') || '[]');
      setEvents(localEvents);
      setSessions(localSessions);
    } finally {
      setLoading(false);
    }
  };

  // Adicionar evento
  const addEvent = async (eventData: Omit<Event, 'id'>) => {
    try {
      console.log('📝 Tentando adicionar evento:', eventData);
      
      const id = await eventService.addEvent(eventData);
      console.log('✅ Evento adicionado com sucesso, ID:', id);
      
      const newEvent = { ...eventData, id };
      setEvents(prev => {
        const updated = [...prev, newEvent];
        console.log('📅 Total de eventos agora:', updated.length);
        return updated;
      });
      
      // Backup local
      const currentEvents = events;
      const updatedEvents = [...currentEvents, newEvent];
      localStorage.setItem('dominus-events', JSON.stringify(updatedEvents));
      console.log('💾 Backup local salvo');
      
      return id;
    } catch (err: any) {
      console.error('❌ Erro ao adicionar evento no Firebase:', err);
      
      // Verificar tipo de erro
      if (err.code === 'permission-denied') {
        console.error('🔒 Erro de permissão - verifique as regras do Firestore');
      }
      
      // Fallback local
      console.log('🔄 Salvando localmente como fallback...');
      const newEvent = { ...eventData, id: Date.now().toString() };
      setEvents(prev => [...prev, newEvent]);
      
      const currentEvents = events;
      const updatedEvents = [...currentEvents, newEvent];
      localStorage.setItem('dominus-events', JSON.stringify(updatedEvents));
      
      return newEvent.id;
    }
  };

  // Atualizar evento
  const updateEvent = async (id: string, eventData: Partial<Event>) => {
    try {
      await eventService.updateEvent(id, eventData);
      setEvents(prev => prev.map(event => 
        event.id === id ? { ...event, ...eventData } : event
      ));
      
      // Backup local
      const updatedEvents = events.map(event => 
        event.id === id ? { ...event, ...eventData } : event
      );
      localStorage.setItem('dominus-events', JSON.stringify(updatedEvents));
    } catch (err) {
      console.error('Erro ao atualizar evento:', err);
      throw err;
    }
  };

  // Deletar evento
  const deleteEvent = async (id: string) => {
    try {
      await eventService.deleteEvent(id);
      setEvents(prev => prev.filter(event => event.id !== id));
      
      // Backup local
      const updatedEvents = events.filter(event => event.id !== id);
      localStorage.setItem('dominus-events', JSON.stringify(updatedEvents));
    } catch (err) {
      console.error('Erro ao deletar evento:', err);
      throw err;
    }
  };

  // Iniciar sessão de programação
  const startProgrammingSession = async (userId: string) => {
    try {
      console.log('🚀 Iniciando sessão de programação para usuário:', userId);
      
      const sessionData = {
        userId,
        startTime: new Date().toISOString(),
        isActive: true
      };
      
      const id = await sessionService.startSession(sessionData);
      console.log('✅ Sessão iniciada com sucesso, ID:', id);
      
      const newSession = { ...sessionData, id };
      
      // Não precisa atualizar manualmente - o listener em tempo real fará isso
      return newSession;
    } catch (err: any) {
      console.error('❌ Erro ao iniciar sessão no Firebase:', err);
      
      if (err.code === 'permission-denied') {
        console.error('🔒 Erro de permissão - verifique as regras do Firestore');
      }
      
      throw err;
    }
  };

  // Finalizar sessão de programação
  const endProgrammingSession = async (sessionId: string) => {
    try {
      console.log('⏹️ Finalizando sessão de programação:', sessionId);
      await sessionService.endSession(sessionId);
      console.log('✅ Sessão finalizada com sucesso');
      
      // Não precisa recarregar manualmente - o listener em tempo real fará isso
    } catch (err) {
      console.error('❌ Erro ao finalizar sessão:', err);
      throw err;
    }
  };

  return {
    events,
    sessions,
    loading,
    error,
    addEvent,
    updateEvent,
    deleteEvent,
    startProgrammingSession,
    endProgrammingSession,
    refreshData: loadInitialData
  };
};
