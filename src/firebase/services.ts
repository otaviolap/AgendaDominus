import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp,
  setDoc,
  onSnapshot,
  serverTimestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from './config';
import { Event, User, ProgrammingSession, UserPresence } from '../types';

// Coleções do Firestore
const EVENTS_COLLECTION = 'events';
const USERS_COLLECTION = 'users';
const SESSIONS_COLLECTION = 'programming_sessions';
const PRESENCE_COLLECTION = 'user_presence';

// Serviços para Eventos
export const eventService = {
  // Buscar todos os eventos
  async getEvents(): Promise<Event[]> {
    try {
      const eventsRef = collection(db, EVENTS_COLLECTION);
      const snapshot = await getDocs(eventsRef);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Event[];
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
      return [];
    }
  },

  // Adicionar novo evento
  async addEvent(event: Omit<Event, 'id'>): Promise<string> {
    try {
      const eventsRef = collection(db, EVENTS_COLLECTION);
      const docRef = await addDoc(eventsRef, {
        ...event,
        createdAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Erro ao adicionar evento:', error);
      throw error;
    }
  },

  // Atualizar evento
  async updateEvent(id: string, event: Partial<Event>): Promise<void> {
    try {
      const eventRef = doc(db, EVENTS_COLLECTION, id);
      await updateDoc(eventRef, {
        ...event,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Erro ao atualizar evento:', error);
      throw error;
    }
  },

  // Deletar evento
  async deleteEvent(id: string): Promise<void> {
    try {
      const eventRef = doc(db, EVENTS_COLLECTION, id);
      await deleteDoc(eventRef);
    } catch (error) {
      console.error('Erro ao deletar evento:', error);
      throw error;
    }
  },

  // Buscar eventos por usuário
  async getEventsByUser(userId: string): Promise<Event[]> {
    try {
      const eventsRef = collection(db, EVENTS_COLLECTION);
      const q = query(eventsRef, where('userId', '==', userId));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Event[];
    } catch (error) {
      console.error('Erro ao buscar eventos do usuário:', error);
      return [];
    }
  }
};

// Serviços para Sessões de Programação
export const sessionService = {
  // Buscar sessões
  async getSessions(): Promise<ProgrammingSession[]> {
    try {
      const sessionsRef = collection(db, SESSIONS_COLLECTION);
      const q = query(sessionsRef, orderBy('startTime', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ProgrammingSession[];
    } catch (error) {
      console.error('Erro ao buscar sessões:', error);
      return [];
    }
  },

  // Iniciar sessão
  async startSession(session: Omit<ProgrammingSession, 'id'>): Promise<string> {
    try {
      const sessionsRef = collection(db, SESSIONS_COLLECTION);
      const docRef = await addDoc(sessionsRef, {
        ...session,
        startTime: new Date().toISOString(),
        isActive: true
      });
      return docRef.id;
    } catch (error) {
      console.error('Erro ao iniciar sessão:', error);
      throw error;
    }
  },

  // Finalizar sessão
  async endSession(sessionId: string): Promise<void> {
    try {
      const sessionRef = doc(db, SESSIONS_COLLECTION, sessionId);
      await updateDoc(sessionRef, {
        endTime: new Date().toISOString(),
        isActive: false
      });
    } catch (error) {
      console.error('Erro ao finalizar sessão:', error);
      throw error;
    }
  },

  // Observar mudanças de sessões em tempo real
  subscribeToSessions(callback: (sessions: ProgrammingSession[]) => void): () => void {
    try {
      const sessionsRef = collection(db, SESSIONS_COLLECTION);
      const q = query(sessionsRef, orderBy('startTime', 'desc'));
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const sessions: ProgrammingSession[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ProgrammingSession[];
        
        callback(sessions);
      }, (error) => {
        console.error('Erro ao observar sessões:', error);
      });

      return unsubscribe;
    } catch (error) {
      console.error('Erro ao configurar observador de sessões:', error);
      return () => {};
    }
  }
};

// Serviços para Usuários
export const userService = {
  // Buscar todos os usuários
  async getUsers(): Promise<User[]> {
    try {
      const usersRef = collection(db, USERS_COLLECTION);
      const snapshot = await getDocs(usersRef);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as User[];
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      return [];
    }
  },

  // Sincronizar usuários locais com Firebase
  async syncUsers(localUsers: User[]): Promise<void> {
    try {
      for (const user of localUsers) {
        const userRef = doc(db, USERS_COLLECTION, user.id);
        const userData = { ...user };
        // setDoc cria ou atualiza o documento, merge mantém dados antigos se necessário
        await setDoc(userRef, userData, { merge: true });
      }
    } catch (error) {
      console.error('Erro ao sincronizar usuários:', error);
    }
  }
};

// Serviços para Sistema de Presença
export const presenceService = {
  // Marcar usuário como online
  async setUserOnline(userId: string, sessionId: string): Promise<void> {
    try {
      const presenceRef = doc(db, PRESENCE_COLLECTION, userId);
      await setDoc(presenceRef, {
        userId,
        isOnline: true,
        lastSeen: serverTimestamp(),
        sessionId,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Erro ao marcar usuário como online:', error);
      throw error;
    }
  },

  // Marcar usuário como offline
  async setUserOffline(userId: string): Promise<void> {
    try {
      const presenceRef = doc(db, PRESENCE_COLLECTION, userId);
      await updateDoc(presenceRef, {
        isOnline: false,
        lastSeen: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Erro ao marcar usuário como offline:', error);
      throw error;
    }
  },

  // Observar mudanças de presença em tempo real
  subscribeToPresence(callback: (presenceData: UserPresence[]) => void): () => void {
    try {
      const presenceRef = collection(db, PRESENCE_COLLECTION);
      
      const unsubscribe = onSnapshot(presenceRef, (snapshot) => {
        const presenceData: UserPresence[] = snapshot.docs.map(doc => {
          const data = doc.data() as DocumentData;
          return {
            userId: data.userId,
            isOnline: data.isOnline,
            lastSeen: data.lastSeen?.toDate?.()?.toISOString() || new Date().toISOString(),
            sessionId: data.sessionId || ''
          };
        }).filter(presence => presence.userId !== 'test-user'); // Filtrar usuário de teste
        
        callback(presenceData);
      }, (error) => {
        console.error('Erro ao observar presença:', error);
      });

      return unsubscribe;
    } catch (error) {
      console.error('Erro ao configurar observador de presença:', error);
      return () => {};
    }
  },

  // Buscar status de presença de todos os usuários
  async getAllPresence(): Promise<UserPresence[]> {
    try {
      const presenceRef = collection(db, PRESENCE_COLLECTION);
      const snapshot = await getDocs(presenceRef);
      
      return snapshot.docs.map(doc => {
        const data = doc.data() as DocumentData;
        return {
          userId: data.userId,
          isOnline: data.isOnline,
          lastSeen: data.lastSeen?.toDate?.()?.toISOString() || new Date().toISOString(),
          sessionId: data.sessionId || ''
        };
      }).filter(presence => presence.userId !== 'test-user'); // Filtrar usuário de teste
    } catch (error) {
      console.error('Erro ao buscar dados de presença:', error);
      return [];
    }
  },

  // Limpar dados de teste
  async cleanupTestData(): Promise<void> {
    try {
      const testUserRef = doc(db, PRESENCE_COLLECTION, 'test-user');
      await deleteDoc(testUserRef);
    } catch (error) {
      // Ignorar erro se documento não existir
    }
  }
};
