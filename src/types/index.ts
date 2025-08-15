export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  isOnline?: boolean;
  lastSeen?: string;
}

export interface UserPresence {
  userId: string;
  isOnline: boolean;
  lastSeen: string;
  sessionId: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  userId: string;
  type: 'meeting' | 'task' | 'reminder';
  location?: {
    type: 'presencial' | 'online';
    value: string; // endereço físico ou link
  };
}

export interface ProgrammingSession {
  id: string;
  userId: string;
  startTime: string;
  endTime?: string;
  isActive: boolean;
}