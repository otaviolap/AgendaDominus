import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Link, Clock } from 'lucide-react';
import { Event, User } from '../types';
import { users } from '../data/users';

interface CalendarProps {
  events: Event[];
  selectedDate: string;
  onDateSelect: (date: string) => void;
  onEventClick: (event: Event) => void;
}

const Calendar: React.FC<CalendarProps> = ({ events, selectedDate, onDateSelect, onEventClick }) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  // Estado para controlar quais dias estão expandidos
    const [expandedDays, setExpandedDays] = React.useState<{ [date: string]: boolean }>({});

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Dias do mês anterior
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        dateString: prevDate.toISOString().split('T')[0]
      });
    }

    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({
        date,
        isCurrentMonth: true,
        dateString: date.toISOString().split('T')[0]
      });
    }

    // Dias do próximo mês para completar a grade
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const nextDate = new Date(year, month + 1, day);
      days.push({
        date: nextDate,
        isCurrentMonth: false,
        dateString: nextDate.toISOString().split('T')[0]
      });
    }

    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDate = (dateString: string) => {
    return events.filter(event => event.date === dateString);
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date().toISOString().split('T')[0];

  // Verifica se está expandido globalmente
  const allDays = days.map(d => d.dateString);
  const allExpanded = allDays.every(date => expandedDays[date]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header do Calendário */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <CalendarIcon className="h-6 w-6 text-purple-600" />
          <h2 className="text-xl font-bold text-gray-900">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={() => {
              setCurrentMonth(new Date());
              onDateSelect(new Date().toISOString().split('T')[0]);
            }}
            className="px-3 py-1 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
          >
            Hoje
          </button>
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      {/* Cabeçalho dos dias da semana */}
      <div className="p-6 pb-0">
        <div className="grid grid-cols-7 gap-1 mb-4">
          {weekDays.map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
      </div>
      {/* Grade do Calendário (agenda) */}
      <div className="p-6">
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const dayEvents = getEventsForDate(day.dateString);
            const isSelected = day.dateString === selectedDate;
            const isToday = day.dateString === today;
            const isExpanded = false;

            return (
              <div
                key={index}
                onClick={() => onDateSelect(day.dateString)}
                className={`min-h-[120px] p-2 border border-gray-100 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                  !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
                } ${
                  isSelected ? 'ring-2 ring-purple-500 bg-purple-50' : ''
                } ${
                  isToday ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isToday ? 'text-blue-600' : day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                }`}>
                  {day.date.getDate()}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map(event => {
                    const eventUser = users.find(u => u.id === event.userId);
                    return (
                      <div
                        key={event.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onEventClick(event);
                        }}
                        className={`text-xs p-2 rounded cursor-pointer hover:opacity-80 min-h-[60px] ${
                          event.type === 'meeting' ? 'bg-blue-100 text-blue-800' :
                          event.type === 'task' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}
                        title={`${event.title} - ${event.time}`}
                      >
                        <div className="flex flex-col gap-1 h-full">
                          <div className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${eventUser?.color} flex-shrink-0`}></div>
                            <span className="font-semibold text-xs leading-tight">{event.title}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-gray-600">
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                          {event.location?.type && (
                            <div className="mt-1">
                              <span className={`px-1.5 py-0.5 rounded text-white text-[10px] font-medium ${
                                event.location.type === 'presencial' ? 'bg-purple-500' : 'bg-blue-500'
                              }`}>
                                {event.location.type === 'presencial' ? 'Presencial' : 'Online'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {dayEvents.length > 3 && (
                    <div className="text-xs text-gray-500 text-center">
                      +{dayEvents.length - 3} mais
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;