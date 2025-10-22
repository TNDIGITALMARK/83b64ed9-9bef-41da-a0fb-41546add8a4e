export const dynamic = 'force-dynamic';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PlanCard from '@/components/PlanCard';
import SalonSidebar from '@/components/SalonSidebar';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const SUBSCRIPTION_PLANS = [
  {
    name: 'Essencial',
    price: 247,
    savings: 35,
    services: [
      '2x Manicures',
      '1x Escova',
      'Hidratação Capilar',
    ],
  },
  {
    name: 'Pro',
    price: 418,
    savings: 40,
    featured: true,
    services: [
      '2x Manicures',
      '1x Pedicure',
      '2x Escovas',
      'Hair Styling',
      'Hidratação Profunda',
    ],
  },
  {
    name: 'Premium',
    price: 603,
    savings: 45,
    services: [
      '2x Manicures',
      '1x Pedicure',
      '2x Escovas',
      'Hidratação Completa',
      'Tratamento Facial',
      '1x Design de Sobrancelha',
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />

        {/* Plans Section */}
        <section id="planos" className="w-full max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* Plans Grid */}
            <div>
              <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
                Escolha seu Plano Ideal
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {SUBSCRIPTION_PLANS.map((plan, index) => (
                  <PlanCard key={index} {...plan} />
                ))}
              </div>
            </div>

            {/* Salon Sidebar */}
            <div className="hidden lg:block">
              <SalonSidebar />
            </div>
          </div>

          {/* Mobile Salon Section */}
          <div className="lg:hidden mt-12">
            <SalonSidebar />
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <section id="contato" className="w-full max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
              Entre em Contato
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full
                             transition-all duration-300 gold-button-glow shadow-md hover:shadow-lg"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">SAC - Atendimento ao Cliente</h4>
                    <p className="text-white/90">0800-GLAM-PASS (0800-4526-7277)</p>
                    <p className="text-white/90">ajuda@glampass.com.br</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-300 mb-2">Horário de Atendimento</h4>
                    <p className="text-white/90">Segunda a Sexta: 8h às 20h</p>
                    <p className="text-white/90">Sábados: 9h às 17h</p>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold text-amber-300 mb-2">Chat Online</h4>
                    <p className="text-white/90 text-sm">
                      Disponível durante o horário comercial para atendimento rápido
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
