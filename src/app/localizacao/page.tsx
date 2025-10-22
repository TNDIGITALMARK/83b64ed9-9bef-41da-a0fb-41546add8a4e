import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Star, Clock, Phone } from 'lucide-react';

const PARTNER_SALONS = [
  {
    name: 'Salão Elegance - Vila Madalena',
    rating: 4.8,
    distance: '1.5 km',
    address: 'Rua Harmonia, 456 - Vila Madalena, São Paulo - SP',
    phone: '(11) 3456-7890',
    hours: 'Seg-Sex: 9h-20h | Sáb: 9h-18h',
    services: ['Manicure', 'Pedicure', 'Escova', 'Hidratação', 'Design de Sobrancelha'],
  },
  {
    name: 'Studio Bella - Ipanema',
    rating: 4.9,
    distance: '800 m',
    address: 'Rua Visconde de Pirajá, 789 - Ipanema, Rio de Janeiro - RJ',
    phone: '(21) 2345-6789',
    hours: 'Seg-Sex: 9h-20h | Sáb: 9h-17h',
    services: ['Manicure', 'Pedicure', 'Escova', 'Tratamento Facial', 'Maquiagem'],
  },
  {
    name: 'Glamour Space - Copacabana',
    rating: 4.7,
    distance: '2.3 km',
    address: 'Av. Atlântica, 1234 - Copacabana, Rio de Janeiro - RJ',
    phone: '(21) 3456-7890',
    hours: 'Seg-Sáb: 10h-21h | Dom: 10h-18h',
    services: ['Manicure', 'Pedicure', 'Escova', 'Hidratação', 'Spa Facial'],
  },
  {
    name: 'Beleza Pura - Jardins',
    rating: 4.9,
    distance: '1.2 km',
    address: 'Alameda Santos, 567 - Jardins, São Paulo - SP',
    phone: '(11) 2345-6789',
    hours: 'Seg-Sex: 9h-21h | Sáb: 9h-19h',
    services: ['Manicure', 'Pedicure', 'Escova', 'Design de Sobrancelha', 'Limpeza de Pele'],
  },
  {
    name: 'Spa Decor Coiffé - Leblon',
    rating: 4.8,
    distance: '1.8 km',
    address: 'Rua Dias Ferreira, 890 - Leblon, Rio de Janeiro - RJ',
    phone: '(21) 3567-8901',
    hours: 'Seg-Sex: 9h-20h | Sáb: 9h-18h',
    services: ['Manicure', 'Pedicure', 'Escova', 'Hidratação', 'Tratamento Capilar'],
  },
  {
    name: 'Studio Esther Davies - Pinheiros',
    rating: 4.9,
    distance: '900 m',
    address: 'Rua dos Pinheiros, 123 - Pinheiros, São Paulo - SP',
    phone: '(11) 3678-9012',
    hours: 'Seg-Sex: 9h-20h | Sáb: 9h-17h',
    services: ['Manicure', 'Pedicure', 'Escova', 'Design de Sobrancelha', 'Massagem'],
  },
];

export default function LocalizacaoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Salões Parceiros
          </h1>
          <p className="text-xl text-white/90">
            Encontre os melhores salões de beleza perto de você
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
          <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-purple-600" size={64} />
              <h3 className="text-2xl font-bold text-purple-600 mb-2">
                Mapa Interativo
              </h3>
              <p className="text-gray-600">
                Visualize todos os salões parceiros próximos à sua localização
              </p>
            </div>
          </div>
        </div>

        {/* Salons List */}
        <div className="grid md:grid-cols-2 gap-6">
          {PARTNER_SALONS.map((salon, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Salon Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-600 mb-2">
                    {salon.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={16}
                          className={
                            starIndex < Math.floor(salon.rating)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-300'
                          }
                          strokeWidth={1}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {salon.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin size={14} />
                    <span>{salon.distance}</span>
                  </div>
                </div>
              </div>

              {/* Salon Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2 text-gray-700 text-sm">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-purple-600" />
                  <span>{salon.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <Phone size={16} className="flex-shrink-0 text-purple-600" />
                  <span>{salon.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <Clock size={16} className="flex-shrink-0 text-purple-600" />
                  <span>{salon.hours}</span>
                </div>
              </div>

              {/* Services Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {salon.services.map((service, serviceIndex) => (
                  <span
                    key={serviceIndex}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors">
                  Agendar
                </button>
                <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-full transition-colors gold-button-glow">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">
            Não encontrou um salão próximo?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Estamos constantemente expandindo nossa rede de parceiros. Cadastre sua localização
            e te avisaremos quando novos salões estiverem disponíveis na sua região.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 gold-button-glow shadow-md hover:shadow-lg">
            Cadastrar Interesse
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
