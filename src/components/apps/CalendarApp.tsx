import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { specialDates } from '../../data/specialDates';

const CalendarApp: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getSpecialDate = (dateString: string) => {
    return specialDates.find(sd => sd.date === dateString);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={prevMonth}
          className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-pink-600" />
        </button>
        
        <h2 className="text-xl font-bold text-pink-600">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        
        <button 
          onClick={nextMonth}
          className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-pink-600" />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {dayNames.map(day => (
          <div key={day} className="text-center font-medium text-pink-600 p-2">
            {day}
          </div>
        ))}
        
        {days.map((day, index) => {
          if (day === null) {
            return <div key={index} className="p-2"></div>;
          }
          
          const dateString = formatDate(currentDate.getFullYear(), currentDate.getMonth(), day);
          const specialDate = getSpecialDate(dateString);
          const isToday = dateString === new Date().toISOString().split('T')[0];
          
          return (
            <div
              key={day}
              onClick={() => setSelectedDate(specialDate ? dateString : null)}
              className={`
                p-2 text-center cursor-pointer rounded-lg transition-all relative
                ${isToday ? 'bg-pink-500 text-white font-bold' : 'hover:bg-pink-100'}
                ${specialDate ? 'bg-pink-200 border-2 border-pink-400' : ''}
              `}
            >
              {day}
              {specialDate && (
                <Heart className="w-3 h-3 text-pink-600 absolute top-0 right-0 fill-current" />
              )}
            </div>
          );
        })}
      </div>

      {/* Special Date Details */}
      {selectedDate && (
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
          {(() => {
            const special = getSpecialDate(selectedDate);
            return special ? (
              <div>
                <h3 className="font-bold text-pink-600 mb-2">{special.title}</h3>
                <p className="text-pink-700">{special.message}</p>
              </div>
            ) : null;
          })()}
        </div>
      )}

      {/* Upcoming Events */}
      <div className="mt-4">
        <h3 className="font-bold text-pink-600 mb-2">Special Dates</h3>
        <div className="space-y-2 max-h-32 overflow-y-auto">
          {specialDates.map((date, index) => (
            <div key={index} className="bg-pink-50 rounded-lg p-2 border border-pink-200">
              <div className="flex justify-between items-center">
                <span className="font-medium text-pink-700">{date.title}</span>
                <span className="text-sm text-pink-500">{new Date(date.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;