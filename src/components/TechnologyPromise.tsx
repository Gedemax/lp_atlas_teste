import React from 'react';
import { Shield, Zap, Users, Target } from 'lucide-react';

export function TechnologyPromise() {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F5F7]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
        {/* Main Shield Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#00C2FF]/10 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#00C2FF]" />
          </div>
        </div>
        
        {/* Main Message */}
        <div className="mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001F3F] leading-relaxed px-2 sm:px-0">
            Você vai poder testar essa tecnologia — <span className="text-[#00C2FF]">sem pagar nada</span> — com suporte completo e orientação para aplicar campanhas reais.
          </p>
        </div>
        
        {/* Benefits Icons */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#00E676]/10 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-[#00E676]" />
            </div>
            <h3 className="font-semibold text-[#001F3F] mb-1">Sem Investimento</h3>
            <p className="text-gray-600 text-sm">Zero custos para testar</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#00C2FF]/10 rounded-lg flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-[#00C2FF]" />
            </div>
            <h3 className="font-semibold text-[#001F3F] mb-1">Suporte Completo</h3>
            <p className="text-gray-600 text-sm">Acompanhamento total</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#00E676]/10 rounded-lg flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-[#00E676]" />
            </div>
            <h3 className="font-semibold text-[#001F3F] mb-1">Campanhas Reais</h3>
            <p className="text-gray-600 text-sm">Aplicação prática imediata</p>
          </div>
        </div>
      </div>
    </section>
  );
}
