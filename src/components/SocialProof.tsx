import React from 'react';
import { Star, Quote, TrendingUp, Users } from 'lucide-react';

export function SocialProof() {
  return (
    <section id="depoimentos" className="py-20 bg-[#F4F5F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-[#001F3F] mb-4">
            Resultados que falam por si
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CFCs que já aplicaram nossa metodologia estão colhendo os frutos
          </p>
        </div>
        
        {/* Social Proof Image */}
        <div className="flex justify-center mb-12">
          <img 
            src="/prova_social1.png" 
            alt="Prova social do Atlas-AI" 
            className="max-w-full sm:max-w-2xl lg:max-w-3xl h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-[#00C2FF] rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-[#001F3F]">Daniela</h3>
              <p className="text-gray-600">Diretora do CFC FAMA, Goiânia</p>
            </div>
          </div>
          
          <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
            "Geraldo, é o seguinte, valeu... Já posso dizer que dos R$140 que eu gastei (com tráfego pra semana) <strong>ontem já abrimos um processo.</strong>"
          </blockquote>
          
          <div className="flex items-center space-x-1">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-5 h-5 text-[#00E676] fill-current" />
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-[#00E676]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-[#00E676]" />
            </div>
            <h3 className="text-3xl font-bold text-[#001F3F] mb-2">+40%</h3>
            <p className="text-gray-600">Aumento médio em matrículas</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-[#00C2FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3 className="text-3xl font-bold text-[#001F3F] mb-2">24/7</h3>
            <p className="text-gray-600">Atendimento automatizado</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-[#001F3F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-[#001F3F]" />
            </div>
            <h3 className="text-3xl font-bold text-[#001F3F] mb-2">95%</h3>
            <p className="text-gray-600">Taxa de satisfação dos clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}