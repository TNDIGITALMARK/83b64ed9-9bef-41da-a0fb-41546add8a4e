'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-4">
      <div className="bg-white rounded-2xl shadow-md px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="logo-text text-3xl hover:opacity-80 transition-opacity">
          GlamPass
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/quem-somos"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Quem Somos
          </Link>
          <Link
            href="/localizacao"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Localização
          </Link>
          <Link
            href="/#planos"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Planos
          </Link>
          <Link
            href="/#contato"
            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-md p-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            <Link
              href="/quem-somos"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quem Somos
            </Link>
            <Link
              href="/localizacao"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Localização
            </Link>
            <Link
              href="/#planos"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Planos
            </Link>
            <Link
              href="/#contato"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
