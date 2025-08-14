import React, { useState } from 'react';
import { X, Calendar, Clock, FileText, Tag, MapPin, Link } from 'lucide-react';
import { User, Event } from '../types';

interface EventModalProps {
  currentUser: User;
  selectedDate: string;
  onClose: () => void;
  onSave: (event: Omit<Event, 'id'>) => void;
}

const EventModal: React.FC<EventModalProps> = ({ currentUser, selectedDate, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(selectedDate);
  const [time, setTime] = useState('');
  const [type, setType] = useState<'meeting' | 'task' | 'reminder'>('meeting');
  const [locationType, setLocationType] = useState<'presencial' | 'online'>('presencial');
  const [locationValue, setLocationValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !time.trim()) {
      return;
    }

    const eventData: Omit<Event, 'id'> = {
      title: title.trim(),
      description: description.trim(),
      date,
      time,
      userId: currentUser.id,
      type,
      location: {
        type: locationType,
        value: locationValue.trim() || (locationType === 'online' ? 'Online' : 'A definir')
      }
    };

    onSave(eventData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-sm shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Novo Evento</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="h-4 w-4 inline mr-1" />
              Título
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Digite o título do evento"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={3}
              placeholder="Descrição opcional do evento"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Data
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="h-4 w-4 inline mr-1" />
                Horário
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Localização */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Local do Evento
            </label>
            <div className="space-y-3">
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="locationType"
                    value="presencial"
                    checked={locationType === 'presencial'}
                    onChange={(e) => setLocationType(e.target.value as 'presencial')}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Presencial</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="locationType"
                    value="online"
                    checked={locationType === 'online'}
                    onChange={(e) => setLocationType(e.target.value as 'online')}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">Online</span>
                </label>
              </div>
              
              <input
                type="text"
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={locationType === 'presencial' ? 'Digite o endereço do local' : 'Digite o link da reunião'}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Tag className="h-4 w-4 inline mr-1" />
              Tipo de Evento
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setType('meeting')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  type === 'meeting' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 text-gray-600 hover:border-blue-300'
                }`}
              >
                <div className="text-center">
                  <div className="font-medium text-sm">Reunião</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setType('task')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  type === 'task' 
                    ? 'border-green-500 bg-green-50 text-green-700' 
                    : 'border-gray-200 text-gray-600 hover:border-green-300'
                }`}
              >
                <div className="text-center">
                  <div className="font-medium text-sm">Tarefa</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setType('reminder')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  type === 'reminder' 
                    ? 'border-yellow-500 bg-yellow-50 text-yellow-700' 
                    : 'border-gray-200 text-gray-600 hover:border-yellow-300'
                }`}
              >
                <div className="text-center">
                  <div className="font-medium text-sm">Lembrete</div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex space-x-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium"
            >
              Salvar Evento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;