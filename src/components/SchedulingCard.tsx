'use client';

import { Calendar, Clock, MapPin, Star, Check } from 'lucide-react';
import { useState } from 'react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface SalonAvailability {
  id: string;
  name: string;
  rating: number;
  distance: string;
  address: string;
  availableSlots: TimeSlot[];
  nextAvailable: string;
}

interface SchedulingCardProps {
  salon: SalonAvailability;
}

export default function SchedulingCard({ salon }: SchedulingCardProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showAllSlots, setShowAllSlots] = useState(false);

  const displaySlots = showAllSlots ? salon.availableSlots : salon.availableSlots.slice(0, 4);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Salon Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-purple-600">{salon.name}</h3>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-amber-400 fill-amber-400" strokeWidth={1} />
            <span className="text-sm font-semibold text-gray-700">{salon.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
          <MapPin size={14} className="flex-shrink-0" />
          <span>{salon.distance}</span>
        </div>

        {/* Address */}
        <p className="text-xs text-gray-500 ml-5">{salon.address}</p>
      </div>

      {/* Next Available */}
      <div className="bg-purple-50 rounded-xl p-3 mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-600">
            Próximo disponível: {salon.nextAvailable}
          </span>
        </div>
      </div>

      {/* Available Time Slots */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Clock size={16} />
          Horários Disponíveis
        </h4>

        <div className="grid grid-cols-2 gap-2">
          {displaySlots.map((slot, index) => (
            <button
              key={index}
              disabled={!slot.available}
              onClick={() => setSelectedSlot(slot.time)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  !slot.available
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : selectedSlot === slot.time
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-purple-50 text-purple-600 hover:bg-purple-100 hover:shadow-sm'
                }`}
            >
              {slot.time}
            </button>
          ))}
        </div>

        {/* Show More/Less Button */}
        {salon.availableSlots.length > 4 && (
          <button
            onClick={() => setShowAllSlots(!showAllSlots)}
            className="mt-3 text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            {showAllSlots ? 'Ver menos' : `Ver mais horários (${salon.availableSlots.length - 4})`}
          </button>
        )}
      </div>

      {/* Booking Button */}
      <button
        disabled={!selectedSlot}
        className={`w-full font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md
          ${
            selectedSlot
              ? 'bg-amber-500 hover:bg-amber-600 text-white gold-button-glow hover:shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
      >
        {selectedSlot ? (
          <span className="flex items-center justify-center gap-2">
            <Check size={18} />
            Agendar para {selectedSlot}
          </span>
        ) : (
          'Selecione um horário'
        )}
      </button>
    </div>
  );
}
