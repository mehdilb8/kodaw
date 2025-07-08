import React from 'react';
import { ArrowRight, MousePointer, Star, Award, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-[160px] pb-20 md:pt-[180px] md:pb-32 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 to-transparent rounded-full"></div>

      <div className="container-padding relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge amélioré */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200/50 text-blue-700 font-semibold text-sm mb-8 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <Star size={16} className="text-amber-500 fill-amber-500" />
            </div>
            <span>Solutions Web Sur-Mesure - 5★ Clients Satisfaits</span>
          </div>

          {/* Titre principal amélioré */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
            Des{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              sites web
            </span>{" "}
            captivants
            <br />
            avec une{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent relative">
              optimisation
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-30"></div>
            </span>
            <br />
            <span className="text-gray-800">professionnelle.</span>
          </h1>

          {/* Description améliorée */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gray-800">WebKoda</strong> crée des sites web{" "}
            <span className="text-blue-600 font-semibold">personnalisés</span>, optimise votre{" "}
            <span className="text-blue-600 font-semibold">SEO</span>, et gère votre{" "}
            <span className="text-blue-600 font-semibold">présence digitale</span> pour faire{" "}
            <span className="font-semibold text-gray-800">décoller votre entreprise en ligne</span>.
          </p>

          {/* Statistiques de crédibilité */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-full">
                <Users size={16} className="text-blue-600" />
              </div>
              <span><strong className="text-gray-800">500+</strong> Clients Satisfaits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-full">
                <Award size={16} className="text-green-600" />
              </div>
              <span><strong className="text-gray-800">98%</strong> Taux de Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-100 rounded-full">
                <Zap size={16} className="text-amber-600" />
              </div>
              <span><strong className="text-gray-800">24h</strong> Délai de Réponse</span>
            </div>
          </div>

          {/* Boutons CTA améliorés */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* CTA Principal */}
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Devis Gratuit</span>
              <ArrowRight size={20} className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
            </a>

            {/* CTA Secondaire */}
            <a 
              href="#services" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-xl text-lg hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto min-w-[200px] shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Découvrir nos Services</span>
              <MousePointer size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Badge de confiance */}
          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">En ligne maintenant</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="text-sm text-gray-600">
              <strong className="text-green-600">Consultation gratuite</strong> disponible
            </span>
          </div>
        </div>
      </div>

      {/* Vague de séparation améliorée */}
      <div className="absolute -bottom-1 left-0 w-full h-20 bg-white transform rotate-1 origin-bottom-left"></div>
      <div className="absolute -bottom-1 left-0 w-full h-16 bg-gradient-to-r from-blue-50 to-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0% 100%)' }}></div>
    </section>
  );
};

export default Hero;