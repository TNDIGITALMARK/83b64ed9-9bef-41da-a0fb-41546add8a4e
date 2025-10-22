import { Star, MapPin } from 'lucide-react';

interface SalonCardProps {
  name: string;
  rating: number;
  distance?: string;
}

export default function SalonCard({ name, rating, distance }: SalonCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Salon Name */}
      <h4 className="text-purple-600 font-semibold text-base mb-2">{name}</h4>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={14}
            className={index < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
            strokeWidth={1}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating.toFixed(1)}</span>
      </div>

      {/* Distance */}
      {distance && (
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <MapPin size={12} />
          <span>{distance}</span>
        </div>
      )}
    </div>
  );
}
