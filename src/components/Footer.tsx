import React from 'react';
import { Bot, Mail, MapPin } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001F3F] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#00C2FF] rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="font-bold text-xl">Atlas-AI</h3>
                <p className="text-xs text-gray-400">Inteligência Artificial para CFCs</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Revolucionando o atendimento comercial de autoescolas com inteligência artificial. 
              Transforme leads em matrículas automaticamente, 24 horas por dia.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[#00C2FF]" />
                <span className="text-gray-300">contato@cfclivre.com.br</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-[#00E676]" />
                <a 
                  href="https://wa.me/553498660660?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20o%20Atlas-AI%2C%20e%20como%20me%20inscrever%20para%20a%20vaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00E676] transition-colors"
                >
                  (34) 9.9866-0660
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-[#00C2FF]" />
                <span className="text-gray-300">Ituiutaba - MG</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links Úteis</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[#00C2FF] transition-colors">Política de Privacidade</a>
              <a href="#" className="block text-gray-300 hover:text-[#00C2FF] transition-colors">Termos de Uso</a>
              <a href="#" className="block text-gray-300 hover:text-[#00C2FF] transition-colors">FAQ</a>
              <a href="#" className="block text-gray-300 hover:text-[#00C2FF] transition-colors">Suporte</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Atlas-AI | Todos os direitos reservados G2D Tecnolo[IA] | Desenvolvido com 💙 para transformar CFCs
          </p>
        </div>
      </div>
    </footer>
  );
}