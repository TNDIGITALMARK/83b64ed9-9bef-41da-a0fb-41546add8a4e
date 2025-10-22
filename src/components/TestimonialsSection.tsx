'use client';

import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ana Carolina Silva',
    location: 'São Paulo, SP',
    rating: 5,
    comment: 'O GlamPass transformou minha rotina de beleza! Economizo tempo e dinheiro, além de ter acesso aos melhores salões da cidade. Simplesmente perfeito!',
    avatar: '👩🏻',
  },
  {
    name: 'Juliana Mendes',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    comment: 'Melhor investimento que já fiz! A qualidade dos serviços é excepcional e o atendimento nos salões parceiros é sempre impecável. Super recomendo!',
    avatar: '👩🏽',
  },
  {
    name: 'Mariana Costa',
    location: 'Belo Horizonte, MG',
    rating: 5,
    comment: 'Sou assinante há 6 meses e estou apaixonada! Consigo fazer todas as minhas unhas, cabelo e tratamentos sem me preocupar com custos extras. Vale muito a pena!',
    avatar: '👩🏼',
  },
  {
    name: 'Patricia Oliveira',
    location: 'Curitiba, PR',
    rating: 5,
    comment: 'A flexibilidade de escolher entre vários salões é incrível! Todos os profissionais são altamente qualificados. O GlamPass superou todas as minhas expectativas!',
    avatar: '👩🏾',
  },
  {
    name: 'Fernanda Almeida',
    location: 'Porto Alegre, RS',
    rating: 5,
    comment: 'Adoro a praticidade do app e a variedade de serviços inclusos no plano. Sempre saio dos salões me sentindo renovada e linda! Não troco por nada!',
    avatar: '👱🏻‍♀️',
  },
  {
    name: 'Camila Santos',
    location: 'Brasília, DF',
    rating: 5,
    comment: 'O melhor custo-benefício que existe! Economizo mais de 40% comparado aos preços avulsos e a qualidade é sempre top. GlamPass é essencial na minha vida!',
    avatar: '👩🏻‍🦰',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ name, location, rating, comment, avatar }: typeof TESTIMONIALS[0]) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center text-2xl shadow-md">
          {avatar}
        </div>

        {/* Name and Location */}
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
          <div className="mt-2">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-700 leading-relaxed italic">
        "{comment}"
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          O Que Nossas Clientes Dizem
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
          Milhares de mulheres já transformaram sua rotina de beleza com o GlamPass. Veja o que elas têm a dizer!
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
              10.000+
            </div>
            <div className="text-white text-lg font-medium">
              Clientes Satisfeitas
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
              4.9/5
            </div>
            <div className="text-white text-lg font-medium">
              Avaliação Média
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
              95%
            </div>
            <div className="text-white text-lg font-medium">
              Taxa de Renovação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
