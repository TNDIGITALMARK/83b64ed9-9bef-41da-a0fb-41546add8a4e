import { Crown, Check } from 'lucide-react';

interface PlanCardProps {
  name: string;
  price: number;
  services: string[];
  savings: number;
  featured?: boolean;
}

export default function PlanCard({ name, price, services, savings, featured = false }: PlanCardProps) {
  return (
    <div
      className={`bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full
        ${featured ? 'border-2 border-amber-500 transform md:scale-105' : 'border border-gray-100'}`}
    >
      {/* Crown Icon */}
      <div className="flex justify-center mb-4">
        <Crown className="text-amber-500" size={40} fill="currentColor" strokeWidth={1} />
      </div>

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-center mb-2 gold-text">
        {name}
      </h3>

      {/* Price */}
      <div className="text-center mb-4">
        <span className="text-4xl font-bold text-purple-600">
          R${price}
        </span>
        <span className="text-gray-600 text-sm ml-1">/mês</span>
      </div>

      {/* Savings Badge */}
      <div className="text-center mb-6">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
          Economia de {savings}%
        </span>
      </div>

      {/* Services List */}
      <ul className="space-y-3 mb-8 flex-grow">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="text-purple-600 flex-shrink-0 mt-0.5" size={20} strokeWidth={3} />
            <span className="text-gray-700">{service}</span>
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      <button
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full
                   transition-all duration-300 gold-button-glow shadow-md hover:shadow-lg"
      >
        Assinar Já
      </button>
    </div>
  );
}
