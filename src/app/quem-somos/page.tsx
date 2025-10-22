import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="w-full max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quem Somos
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transformando a forma como você cuida da sua beleza
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-600 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  A <span className="font-bold text-purple-600">GlamPass</span> nasceu da observação
                  de um problema comum: muitas pessoas queriam manter uma rotina regular de cuidados
                  de beleza, mas encontravam dificuldades com custos imprevisíveis e a necessidade
                  de agendar múltiplos serviços em diferentes salões.
                </p>
                <p>
                  Em 2024, fundamos a plataforma com uma missão clara: tornar os serviços de beleza
                  profissionais acessíveis, previsíveis e convenientes para todos. Criamos um modelo
                  de assinatura que conecta clientes aos melhores salões da cidade, oferecendo
                  economia de até 45% em comparação com pagamentos avulsos.
                </p>
                <p>
                  Hoje, somos mais do que uma plataforma de assinaturas. Somos uma comunidade que
                  valoriza a autoestima, o autocuidado e a conexão entre profissionais talentosos
                  e clientes que merecem se sentir bem todos os dias.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white">
                <Sparkles className="mb-4 text-amber-400" size={48} />
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-white/90 mb-6">
                  Democratizar o acesso a serviços de beleza de alta qualidade, criando uma ponte
                  entre salões parceiros e clientes que buscam conveniência, economia e excelência.
                </p>
                <div className="bg-white/10 rounded-2xl p-4">
                  <p className="text-sm text-white/80">
                    "Acreditamos que cuidar de si não é luxo, é necessidade. E toda necessidade
                    merece ser acessível."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Heart className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              Cuidado Genuíno
            </h3>
            <p className="text-gray-700">
              Valorizamos cada cliente como único, oferecendo experiências personalizadas que
              respeitam suas necessidades e preferências.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <Award className="text-amber-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              Qualidade Garantida
            </h3>
            <p className="text-gray-700">
              Selecionamos rigorosamente nossos parceiros, garantindo que cada salão atenda aos
              nossos padrões de excelência e profissionalismo.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Users className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              Comunidade Forte
            </h3>
            <p className="text-gray-700">
              Construímos relacionamentos duradouros entre clientes e salões, criando uma rede
              de confiança e satisfação mútua.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Nossos Números
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
              <p className="text-white/90">Salões Parceiros</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">1000+</div>
              <p className="text-white/90">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">45%</div>
              <p className="text-white/90">Economia Média</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">4.8★</div>
              <p className="text-white/90">Avaliação Média</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Escolha Seu Plano
              </h3>
              <p className="text-gray-600">
                Selecione o plano de assinatura que melhor atende às suas necessidades e orçamento.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Encontre um Salão
              </h3>
              <p className="text-gray-600">
                Navegue pela nossa rede de salões parceiros e escolha o mais próximo de você.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Agende e Aproveite
              </h3>
              <p className="text-gray-600">
                Marque seus serviços quando quiser e desfrute de tratamentos de qualidade com economia garantida.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Transformar Sua Rotina de Beleza?
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Junte-se a milhares de pessoas que já descobriram uma forma mais inteligente de cuidar da beleza.
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            Começar Agora
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
