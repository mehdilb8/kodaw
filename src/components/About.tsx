import React from 'react';
import { CheckCircle, Users, Award, Zap, Target, TrendingUp, Shield, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* En-tête de section amélioré */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200/50 rounded-full text-blue-700 font-semibold text-sm mb-6 shadow-lg">
            <Target size={16} />
            <span>À PROPOS DE WEBKODA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Votre <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Vision</span>,
            <br />
            Notre <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gray-800">WebKoda</strong> allie{" "}
            <span className="text-blue-600 font-semibold">excellence technique</span> et{" "}
            <span className="text-blue-600 font-semibold">design créatif</span> pour offrir des{" "}
            <span className="font-semibold text-gray-800">expériences digitales exceptionnelles</span> qui transforment votre entreprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image avec éléments visuels améliorés */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Équipe WebKoda collaborant sur la conception d'un site web"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Badge de satisfaction flottant */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award size={24} className="text-yellow-300" />
                </div>
                <span className="block text-3xl font-bold">98%</span>
                <span className="text-sm font-medium uppercase tracking-wider">Satisfaction</span>
              </div>
            </div>

            {/* Badge années d'expérience */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              <div className="text-center">
                <span className="block text-3xl font-bold text-blue-600">5+</span>
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Années<br/>d'Expertise</span>
              </div>
            </div>
          </div>
          
          {/* Contenu textuel amélioré */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez <strong className="text-blue-600">WebKoda</strong>, nous ne nous contentons pas de créer des sites web — nous{" "}
                <span className="font-semibold text-gray-900">concevons des expériences digitales</span> qui{" "}
                <span className="bg-yellow-100 px-2 py-1 rounded font-semibold">transforment les visiteurs en clients fidèles</span>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Notre équipe d'experts en <span className="font-semibold text-blue-600">développement</span>,{" "}
                <span className="font-semibold text-blue-600">design</span> et{" "}
                <span className="font-semibold text-blue-600">SEO</span> collabore pour créer des solutions{" "}
                <span className="font-semibold text-gray-900">aussi performantes qu'esthétiques</span>.
              </p>
            </div>
            
            {/* Services avec icônes améliorées */}
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Développement Sur-Mesure</h3>
                  <p className="text-gray-600 leading-relaxed">Des sites web uniques, parfaitement alignés avec votre marque et optimisés pour la conversion.</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">SEO & Visibilité</h3>
                  <p className="text-gray-600 leading-relaxed">Stratégies SEO avancées pour propulser votre site en première page de Google.</p>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Marketing Digital</h3>
                  <p className="text-gray-600 leading-relaxed">Gestion complète de vos réseaux sociaux et campagnes publicitaires.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques améliorées */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={28} />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Clients Satisfaits</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={28} />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Taux de Satisfaction</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-white" size={28} />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">24h</div>
            <div className="text-gray-600 font-medium">Délai de Réponse</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Shield className="text-white" size={28} />
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Sites Sécurisés</div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span>Découvrez comment nous pouvons transformer votre entreprise</span>
            <Zap size={20} className="animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;