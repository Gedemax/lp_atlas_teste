import React from 'react';
import { Bot, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#00C2FF] rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h1 className="font-bold text-[#001F3F] text-xl">Atlas-AI</h1>
              <p className="text-xs text-gray-600">Inteligência para CFCs</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Início</a>
            <a href="#beneficios" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Como Funciona</a>
            <a href="#depoimentos" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Resultados</a>
          </nav>

          {/* CTA Button */}
          <a 
            href="https://form.respondi.app/Zq26IBtW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block bg-[#00E676] hover:bg-[#00D16A] text-[#001F3F] font-bold py-2 px-6 rounded-lg transition-colors text-center"
          >
            Inscrever meu CFC
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Início</a>
              <a href="#beneficios" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Benefícios</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Como Funciona</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-[#00C2FF] transition-colors">Resultados</a>
              <a 
                href="https://form.respondi.app/Zq26IBtW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#00E676] hover:bg-[#00D16A] text-[#001F3F] font-bold py-3 px-6 rounded-lg transition-colors text-center block"
              >
                Inscrever meu CFC
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}