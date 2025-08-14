import React, { useState } from 'react';
import { X, Calendar, Clock, FileText, Tag, MapPin, Link, User, Trash2 } from 'lucide-react';
import { Event, User as UserType } from '../types';
import { users } from '../data/users';

interface EventDetailModalProps {
  event: Event;
  currentUser: UserType;
  onClose: () => void;
  onDelete?: (eventId: string) => void;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, currentUser, onClose, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const eventUser = users.find(u => u.id === event.userId);
  const canDelete = currentUser.id === event.userId; // Só o criador pode excluir

  const handleDeleteConfirm = () => {
    if (onDelete) {
      onDelete(event.id);
      onClose();
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'meeting': return 'Reunião';
      case 'task': return 'Tarefa';
      case 'reminder': return 'Lembrete';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-800';
      case 'task': return 'bg-green-100 text-green-800';
      case 'reminder': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Detalhes do Evento</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Título e Tipo */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
            </div>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
              <Tag className="h-3 w-3 mr-1" />
              {getTypeLabel(event.type)}
            </span>
          </div>

          {/* Descrição */}
          {event.description && (
            <div>
              <p className="text-gray-600">{event.description}</p>
            </div>
          )}

          {/* Data e Hora */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">Data</p>
                <p className="text-gray-600 capitalize">{formatDate(event.date)}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">Horário</p>
                <p className="text-gray-600">{event.time}</p>
              </div>
            </div>
          </div>

          {/* Localização */}
          {event.location && (
            <div className="flex items-start space-x-3">
              {event.location.type === 'presencial' ? (
                <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
              ) : (
                <Link className="h-5 w-5 text-purple-600 mt-0.5" />
              )}
              <div>
                <p className="font-medium text-gray-900">
                  {event.location.type === 'presencial' ? 'Local' : 'Link da Reunião'}
                </p>
                {event.location.type === 'online' ? (
                  <a
                    href={event.location.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    {event.location.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{event.location.value}</p>
                )}
              </div>
            </div>
          )}

          {/* Criado por */}
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
            <User className="h-5 w-5 text-purple-600" />
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full ${eventUser?.color} flex items-center justify-center text-white font-bold text-sm`}>
                {eventUser?.avatar}
              </div>
              <div>
                <p className="font-medium text-gray-900">Criado por</p>
                <p className="text-gray-600">{eventUser?.name}</p>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          {showDeleteConfirm ? (
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-800 text-sm text-center">
                  Tem certeza que deseja excluir este evento?
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Excluir
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {canDelete && (
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Excluir Evento
                </button>
              )}
              <button
                onClick={onClose}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;