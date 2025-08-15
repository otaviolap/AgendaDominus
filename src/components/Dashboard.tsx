import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Code, Plus, LogOut, Play, Square, MapPin, Link } from 'lucide-react';
import { User, Event, ProgrammingSession } from '../types';
import { users } from '../data/users';
import EventModal from './EventModal';
import EventDetailModal from './EventDetailModal';
import ProgrammingModal from './ProgrammingModal';
import Calendar from './Calendar';
import { UserStatusIndicator } from './UserStatusIndicator';
import { useFirebase } from '../hooks/useFirebase';
import { usePresence } from '../hooks/usePresence';

interface DashboardProps {
  currentUser: User;
  onLogout: () => void;
}

const Dashboard = ({ currentUser, onLogout }: DashboardProps) => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [showEventDetail, setShowEventDetail] = useState<Event | null>(null);
  const [showProgrammingModal, setShowProgrammingModal] = useState(false);
  const [programmingSession, setProgrammingSession] = useState<ProgrammingSession | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = useState<'calendar' | 'day'>('calendar');
  
  const { 
    events, 
    sessions, 
    loading, 
    error, 
    addEvent, 
    deleteEvent, 
    startProgrammingSession, 
    endProgrammingSession 
  } = useFirebase();

  // Hook de presença para dados em tempo real
  const { presenceData, isUserOnline } = usePresence();

  useEffect(() => {
    // Verificar se há sessão ativa do usuário atual
    const activeSession = sessions.find(session => 
      session.isActive && session.userId === currentUser.id
    );
    setProgrammingSession(activeSession || null);
  }, [sessions, currentUser.id]);

  const handleAddEvent = async (event: Omit<Event, 'id'>) => {
    try {
      await addEvent(event);
      setShowEventModal(false);
    } catch (error) {
      console.error('Erro ao adicionar evento:', error);
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await deleteEvent(eventId);
      setShowEventDetail(null);
    } catch (error) {
      console.error('Erro ao excluir evento:', error);
    }
  };

  const handleStartProgramming = async () => {
    try {
      const newSession = await startProgrammingSession(currentUser.id);
      setProgrammingSession(newSession);
    } catch (error) {
      console.error('Erro ao iniciar programação:', error);
    }
  };

  const handleStopProgramming = async () => {
    try {
      if (programmingSession) {
        await endProgrammingSession(programmingSession.id);
        setProgrammingSession(null);
      }
    } catch (error) {
      console.error('Erro ao parar programação:', error);
    }
  };

  const handleEventClick = (event: Event) => {
    setShowEventDetail(event);
  };

  const filteredEvents = events.filter(event => event.date === selectedDate);
  
  // Detectar quem está programando em tempo real
  const activeProgrammingSession = sessions.find(session => session.isActive);
  const currentProgrammer = activeProgrammingSession ? users.find(u => u.id === activeProgrammingSession.userId) : null;
  
  // Verificar se o programador atual está online
  const programmerIsOnline = currentProgrammer ? isUserOnline(currentProgrammer.id) : false;

  // Mostrar loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados...</p>
        </div>
      </div>
    );
  }

  // Mostrar erro
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white rounded-lg p-6 shadow-lg">
          <div className="text-red-500 mb-4">⚠️</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Erro de Conexão</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Usando dados locais como backup</p>
        </div>
      </div>
    );
  }

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getSessionDuration = (start: string, end?: string) => {
    const startTime = new Date(start);
    const endTime = end ? new Date(end) : new Date();
    const diff = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Agenda Dominus
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Status de Programação - só mostra se alguém está programando E online */}
            {currentProgrammer && programmerIsOnline && (
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-2 rounded-full">
                <Code className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {currentProgrammer.name} está programando
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            )}
            
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full ${currentUser.color} flex items-center justify-center text-white font-bold`}>
                {currentUser.avatar}
              </div>
              <div>
                <p className="font-medium text-gray-900">{currentUser.name}</p>
                <p className="text-sm text-gray-500">{currentUser.email}</p>
              </div>
              <button
                onClick={onLogout}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/50 backdrop-blur-lg border-r border-gray-200 min-h-screen p-4">
          <div className="h-full flex flex-col space-y-4">
            {/* Controles de Programação */}
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-3 flex items-center text-sm">
                <Code className="h-4 w-4 mr-2 text-purple-600" />
                Status de Desenvolvimento
              </h3>
              
              {activeProgrammingSession && activeProgrammingSession.userId === currentUser.id ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Play className="h-3 w-3" />
                    <span className="font-medium text-sm">Você está programando</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Iniciado às {formatTime(activeProgrammingSession.startTime)}
                  </p>
                  <p className="text-xs text-gray-600">
                    Duração: {getSessionDuration(activeProgrammingSession.startTime)}
                  </p>
                  <button
                    onClick={handleStopProgramming}
                    className="w-full bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center text-sm"
                  >
                    <Square className="h-3 w-3 mr-2" />
                    Parar Desenvolvimento
                  </button>
                </div>
              ) : currentProgrammer && programmerIsOnline ? (
                <div className="text-center text-gray-600">
                  <p className="text-sm mb-2">
                    {currentProgrammer.name} está programando
                  </p>
                  <p className="text-xs text-gray-500">
                    Iniciado às {formatTime(activeProgrammingSession!.startTime)}
                  </p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">Online agora</span>
                  </div>
                  <button
                    onClick={() => setShowProgrammingModal(true)}
                    className="mt-2 text-sm text-purple-600 hover:text-purple-800 transition-colors"
                  >
                    Ver detalhes
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleStartProgramming}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center text-sm"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Iniciar Desenvolvimento
                </button>
              )}
            </div>

            {/* Usuários Online */}
            <UserStatusIndicator 
              users={users} 
              currentUserId={currentUser.id}
            />

            {/* Histórico de Sessões */}
            {sessions.length > 0 && (
              <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex-1 flex flex-col">
                <h3 className="font-medium text-gray-900 mb-3 flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-purple-600" />
                  Histórico Recente
                </h3>
                <div className="space-y-2 flex-1 overflow-y-auto">
                  {sessions.slice(0, 20).map((session: ProgrammingSession) => {
                    const user = users.find(u => u.id === session.userId);
                    return (
                      <div key={session.id} className="text-xs bg-gray-50 rounded-lg p-2">
                        <p className="font-medium text-gray-900">{user?.name}</p>
                        <p className="text-gray-600">
                          {formatDate(session.startTime)} - {formatTime(session.startTime)} às {session.endTime ? formatTime(session.endTime) : 'Em andamento'}
                        </p>
                        <p className="text-gray-500">
                          Duração: {getSessionDuration(session.startTime, session.endTime)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="max-w-full">
            {/* Controles da Agenda */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {viewMode === 'calendar' ? 'Agenda Geral' : 'Agenda do Dia'}
                </h2>
                <p className="text-gray-600">Gerencie seus compromissos e tarefas</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('calendar')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'calendar' 
                        ? 'bg-white text-purple-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Mês
                  </button>
                  <button
                    onClick={() => setViewMode('day')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'day' 
                        ? 'bg-white text-purple-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Dia
                  </button>
                </div>
                <button
                  onClick={() => setShowEventModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Novo Evento
                </button>
              </div>
            </div>

            {viewMode === 'calendar' ? (
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
                <div className="xl:col-span-4">
                  <Calendar
                    events={events}
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    onEventClick={handleEventClick}
                  />
                </div>
                
                {/* Banner de Propaganda */}
                <div className="xl:col-span-1 space-y-3 hidden xl:block">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                    <div className="text-center">
                      <div className="text-xs uppercase tracking-wide opacity-80 mb-2">Oferta Especial</div>
                      <h3 className="text-base font-bold mb-2">Dominus Pro</h3>
                      <p className="text-xs opacity-90 mb-3">
                        Desbloqueie recursos avançados de produtividade
                      </p>
                      <div className="bg-white/20 rounded-lg p-2 mb-3">
                        <div className="text-xl font-bold">50% OFF</div>
                        <div className="text-xs opacity-80">Por tempo limitado</div>
                      </div>
                      <button className="w-full bg-white text-purple-600 font-semibold py-1.5 px-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                        Assinar Agora
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg">🧹</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">iClean</h4>
                      <p className="text-xs text-gray-600 mb-3">
                        Conecte-se com faxineiras qualificadas ou encontre trabalho
                      </p>
                      <button className="text-blue-600 font-medium text-xs hover:text-blue-800 transition-colors">
                        Baixar App →
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-slate-700 to-gray-800 rounded-xl p-3 text-white text-center">
                    <div className="text-xs font-medium mb-1">💫 Eternity</div>
                    <p className="text-xs opacity-90">
                      IA que preserva memórias de seus entes queridos através de áudio, texto e fotos
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Seletor de Data */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-transparent border-none text-lg font-medium text-gray-900 focus:outline-none"
                  />
                </div>

                {/* Lista de Eventos */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Eventos para {new Date(selectedDate).toLocaleDateString('pt-BR', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </h3>
                    
                    {filteredEvents.length === 0 ? (
                      <div className="text-center py-12">
                        <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 mb-2">Nenhum evento para esta data</p>
                        <button
                          onClick={() => setShowEventModal(true)}
                          className="text-purple-600 hover:text-purple-800 transition-colors"
                        >
                          Adicionar um evento
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {filteredEvents.map((event) => {
                          const eventUser = users.find(u => u.id === event.userId);
                          return (
                            <div 
                              key={event.id} 
                              onClick={() => handleEventClick(event)}
                              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                              <div className={`w-10 h-10 rounded-full ${eventUser?.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                                {eventUser?.avatar}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    event.type === 'meeting' ? 'bg-blue-100 text-blue-800' :
                                    event.type === 'task' ? 'bg-green-100 text-green-800' :
                                    'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {event.type === 'meeting' ? 'Reunião' :
                                     event.type === 'task' ? 'Tarefa' : 'Lembrete'}
                                  </span>
                                </div>
                                <p className="text-gray-600 mb-2">{event.description}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {event.time}
                                  </div>
                                  {event.location && (
                                    <div className="flex items-center">
                                      {event.location.type === 'presencial' ? (
                                        <MapPin className="h-4 w-4 mr-1" />
                                      ) : (
                                        <Link className="h-4 w-4 mr-1" />
                                      )}
                                      <span className="truncate max-w-32">
                                        {event.location.value}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showEventModal && (
        <EventModal
          currentUser={currentUser}
          selectedDate={selectedDate}
          onClose={() => setShowEventModal(false)}
          onSave={handleAddEvent}
        />
      )}

      {showEventDetail && (
        <EventDetailModal
          event={showEventDetail}
          currentUser={currentUser}
          onClose={() => setShowEventDetail(null)}
          onDelete={handleDeleteEvent}
        />
      )}

      {showProgrammingModal && currentProgrammer && activeProgrammingSession && (
        <ProgrammingModal
          programmer={currentProgrammer}
          session={activeProgrammingSession}
          onClose={() => setShowProgrammingModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;