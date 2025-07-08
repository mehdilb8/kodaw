import React from 'react';
import { ShieldCheck, Clock, Zap, Award, Users, TrendingUp, Star, CheckCircle, Heart, Diamond } from 'lucide-react';

const FeatureItem = ({ 
  icon, 
  title, 
  description, 
  gradient,
  stats 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  stats?: string;
}) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start gap-6">
        <div className={`p-4 ${gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            {stats && (
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                {stats}
              </span>
            )}
          </div>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, image, rating, comment }: { name: string; image: string; rating: number; comment: string }) => {
  return (
    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-72 transform rotate-3 hover:rotate-0 transition-transform duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img 
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <CheckCircle size={14} className="text-white" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed font-medium">
        "{comment}"
      </p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-white" size={28} />,
      title: "Garantie Satisfaction 100%",
      description: "Nous avons une confiance totale en nos services. Si vous n'êtes pas entièrement satisfait, nous vous remboursons intégralement. Aucune question posée.",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-600",
      stats: "100% Garanti"
    },
    {
      icon: <Clock className="text-white" size={28} />,
      title: "Délais Respectés & Support 24/7",
      description: "Nos projets sont livrés dans les temps avec un support technique disponible 24h/24 et 7j/7. Votre tranquillité d'esprit est notre priorité.",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-600",
      stats: "24/7 Support"
    },
    {
      icon: <Zap className="text-white" size={28} />,
      title: "Performance & Rapidité Exceptionnelles",
      description: "Sites ultra-rapides optimisés pour la conversion. Nos clients voient en moyenne une augmentation de 300% de leur taux de conversion.",
      gradient: "bg-gradient-to-r from-amber-500 to-orange-600",
      stats: "+300% ROI"
    },
    {
      icon: <Award className="text-white" size={28} />,
      title: "Expertise Reconnue & Certifiée",
      description: "Équipe certifiée Google, experts en technologies de pointe. Plus de 500 projets réussis et des dizaines de récompenses sectorielles.",
      gradient: "bg-gradient-to-r from-purple-500 to-violet-600",
      stats: "500+ Projets"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <div>
            {/* En-tête */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full text-blue-700 font-semibold text-sm mb-6 shadow-lg">
                <Diamond size={16} />
                <span>POURQUOI NOUS CHOISIR</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                L'Excellence qui Fait la
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Différence</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Nous ne livrons pas que des sites web — nous créons des{" "}
                <span className="font-semibold text-gray-800">expériences digitales exceptionnelles</span> qui{" "}
                <span className="text-blue-600 font-semibold">transforment votre business</span> et{" "}
                <span className="font-semibold text-gray-800">dépassent vos attentes</span>.
              </p>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction Client</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Projets Livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                <div className="text-sm text-gray-600 font-medium">Temps de Réponse</div>
              </div>
            </div>
            
            {/* Liste des avantages */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>

            {/* CTA section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="text-pink-300" size={32} />
                <div>
                  <h3 className="text-2xl font-bold">Prêt à Commencer ?</h3>
                  <p className="text-blue-100">Rejoignez nos 500+ clients satisfaits</p>
                </div>
              </div>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <span>Démarrer Mon Projet</span>
                <Zap size={18} />
              </a>
            </div>
          </div>
          
          {/* Section image avec témoignage */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Équipe WebKoda travaillant sur un projet client"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
            </div>
            
            {/* Badge de confiance flottant */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <Award size={32} className="mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold">Top 1%</div>
                <div className="text-sm font-medium">Agences Web</div>
              </div>
            </div>
            
            {/* Témoignage client */}
            <TestimonialCard 
              name="Marie Dubois"
              image="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              rating={5}
              comment="WebKoda a transformé notre business ! +400% de leads en 3 mois. Une équipe exceptionnelle et des résultats concrets."
            />
          </div>
        </div>

        {/* Section garanties */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Garantie Qualité</h3>
            <p className="text-gray-600">100% satisfait ou remboursé. Notre engagement qualité sans compromis.</p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Livraison Rapide</h3>
            <p className="text-gray-600">Délais respectés avec un suivi transparent tout au long du projet.</p>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Support Premium</h3>
            <p className="text-gray-600">Équipe dédiée disponible 24/7 pour vous accompagner après livraison.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;