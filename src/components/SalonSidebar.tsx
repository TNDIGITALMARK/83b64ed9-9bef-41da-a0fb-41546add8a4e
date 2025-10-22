import SalonCard from './SalonCard';

const FEATURED_SALONS = [
  { name: 'Glamour Studio', rating: 5.0 },
  { name: 'Beleza Pura', rating: 5.0 },
  { name: 'Spa Decor Coiffé', rating: 5.0 },
  { name: 'Studio Esther Davies', rating: 5.0 },
];

export default function SalonSidebar() {
  return (
    <aside className="bg-gradient-to-b from-purple-600 to-purple-500 rounded-3xl p-6 shadow-lg">
      <h3 className="text-white text-xl font-bold mb-6 text-center">
        Nossos Salões
      </h3>

      <div className="space-y-4">
        {FEATURED_SALONS.map((salon, index) => (
          <SalonCard key={index} {...salon} />
        ))}
      </div>
    </aside>
  );
}
