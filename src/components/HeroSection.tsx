import { Scissors, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="purple-gradient-bg rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <Sparkles className="text-white" size={48} strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 right-20 opacity-20">
          <Scissors className="text-white" size={40} strokeWidth={1} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Hero Text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Planos de Beleza por Assinatura
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Conectando você aos melhores salões de beleza com planos mensais que cabem no seu bolso
            </p>
          </div>

          {/* Hero Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 flex items-center justify-center shadow-xl">
              <div className="text-center space-y-4">
                <Sparkles className="text-amber-400 mx-auto" size={80} strokeWidth={1.5} />
                <p className="text-white/80 text-lg font-medium">Seu momento de beleza começa aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
