import { Instagram, Facebook, Twitter, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      <div className="deep-purple-bg py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="logo-text text-3xl mb-4">GlamPass</h3>
              <p className="text-white/80 text-sm">
                Conectando você aos melhores salões de beleza com planos mensais acessíveis.
              </p>
            </div>

            {/* Contact Info (SAC) */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Atendimento (SAC)</h4>
              <div className="space-y-3">
                <a
                  href="tel:0800-4526-7277"
                  className="flex items-center gap-2 text-white/90 hover:text-amber-400 transition-colors text-sm"
                >
                  <Phone size={18} />
                  <span>0800-GLAM-PASS (0800-4526-7277)</span>
                </a>
                <a
                  href="mailto:ajuda@glampass.com.br"
                  className="flex items-center gap-2 text-white/90 hover:text-amber-400 transition-colors text-sm"
                >
                  <Mail size={18} />
                  <span>ajuda@glampass.com.br</span>
                </a>
                <p className="text-white/70 text-xs mt-2">
                  Segunda a Sexta: 8h às 20h<br />
                  Sábados: 9h às 17h
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-white/80">
              <Link href="/termos" className="hover:text-amber-400 transition-colors">
                Termos de Serviço
              </Link>
              <span className="text-white/40">|</span>
              <Link href="/privacidade" className="hover:text-amber-400 transition-colors">
                Política de Privacidade
              </Link>
            </div>
            <p className="text-white/60 text-sm">
              © 2025 GlamPass. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
