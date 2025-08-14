import React from 'react';
import { X, Code, Clock, Play } from 'lucide-react';
import { User, ProgrammingSession } from '../types';

interface ProgrammingModalProps {
  programmer: User;
  session: ProgrammingSession;
  onClose: () => void;
}

const ProgrammingModal: React.FC<ProgrammingModalProps> = ({ programmer, session, onClose }) => {
  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getSessionDuration = (start: string) => {
    const startTime = new Date(start);
    const endTime = new Date();
    const diff = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
  };

  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const duration = getSessionDuration(session.startTime);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Sessão de Desenvolvimento</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Programador Atual */}
          <div className="text-center">
            <div className={`w-20 h-20 rounded-full ${programmer.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}>
              {programmer.avatar}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{programmer.name}</h3>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Code className="h-5 w-5" />
              <span className="font-medium">Desenvolvendo</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Detalhes da Sessão */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-600">
                <Play className="h-4 w-4" />
                <span className="font-medium">Iniciado às</span>
              </div>
              <span className="font-mono text-gray-900">{formatTime(session.startTime)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Duração</span>
              </div>
              <span className="font-mono text-gray-900 text-lg">
                {String(duration.hours).padStart(2, '0')}:
                {String(duration.minutes).padStart(2, '0')}:
                {String(duration.seconds).padStart(2, '0')}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Horário atual</p>
                <p className="font-mono text-xl text-gray-900">
                  {currentTime.toLocaleTimeString('pt-BR')}
                </p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Sessão ativa</span>
            </div>
          </div>

          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingModal;