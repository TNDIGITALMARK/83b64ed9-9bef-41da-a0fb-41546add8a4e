'use client';

import { useState } from 'react';
import SchedulingCard from './SchedulingCard';
import { MapPin, Search } from 'lucide-react';

// Mock data for nearby salons with availability
const NEARBY_SALONS = [
  {
    id: '1',
    name: 'Glamour Studio',
    rating: 5.0,
    distance: '0.8 km',
    address: 'Rua das Flores, 123 - Centro',
    nextAvailable: 'Hoje, 14:00',
    availableSlots: [
      { time: '14:00', available: true },
      { time: '14:30', available: true },
      { time: '15:00', available: false },
      { time: '15:30', available: true },
      { time: '16:00', available: true },
      { time: '16:30', available: false },
      { time: '17:00', available: true },
      { time: '17:30', available: true },
    ],
  },
  {
    id: '2',
    name: 'Beleza Pura',
    rating: 5.0,
    distance: '1.2 km',
    address: 'Av. Principal, 456 - Jardins',
    nextAvailable: 'Hoje, 15:30',
    availableSlots: [
      { time: '15:30', available: true },
      { time: '16:00', available: true },
      { time: '16:30', available: true },
      { time: '17:00', available: false },
      { time: '17:30', available: true },
      { time: '18:00', available: true },
    ],
  },
  {
    id: '3',
    name: 'Spa Decor Coiffé',
    rating: 5.0,
    distance: '1.5 km',
    address: 'Rua da Beleza, 789 - Vila Nova',
    nextAvailable: 'Amanhã, 09:00',
    availableSlots: [
      { time: '09:00', available: true },
      { time: '09:30', available: true },
      { time: '10:00', available: true },
      { time: '10:30', available: false },
      { time: '11:00', available: true },
      { time: '11:30', available: true },
      { time: '14:00', available: true },
      { time: '14:30', available: true },
    ],
  },
  {
    id: '4',
    name: 'Studio Esther Davies',
    rating: 5.0,
    distance: '2.1 km',
    address: 'Praça da República, 321 - Centro',
    nextAvailable: 'Hoje, 16:00',
    availableSlots: [
      { time: '16:00', available: true },
      { time: '16:30', available: true },
      { time: '17:00', available: true },
      { time: '17:30', available: false },
      { time: '18:00', available: true },
      { time: '18:30', available: true },
    ],
  },
];

export default function SchedulingSection() {
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredSalons, setFilteredSalons] = useState(NEARBY_SALONS);

  const handleSearch = () => {
    if (!searchLocation.trim()) {
      setFilteredSalons(NEARBY_SALONS);
      return;
    }

    const filtered = NEARBY_SALONS.filter(
      (salon) =>
        salon.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
        salon.address.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredSalons(filtered);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
          Agende seu Horário
        </h2>
        <p className="text-white/90 text-center text-lg max-w-2xl mx-auto">
          Encontre os salões mais próximos e agende seu horário com facilidade
        </p>
      </div>

      {/* Location Search */}
      <div className="bg-white rounded-2xl p-4 shadow-md mb-8 max-w-2xl mx-auto">
        <div className="flex gap-3">
          <div className="flex-grow relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Digite seu endereço ou bairro..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 rounded-xl font-medium transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Search size={18} />
            Buscar
          </button>
        </div>
      </div>

      {/* Salons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSalons.map((salon) => (
          <SchedulingCard key={salon.id} salon={salon} />
        ))}
      </div>

      {/* No Results */}
      {filteredSalons.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-white rounded-3xl p-8 shadow-md inline-block">
            <MapPin className="mx-auto mb-4 text-purple-400" size={48} />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Nenhum salão encontrado</h3>
            <p className="text-gray-600">Tente buscar por outro endereço ou região</p>
          </div>
        </div>
      )}
    </div>
  );
}
