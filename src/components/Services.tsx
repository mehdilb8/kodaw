import React from 'react';
import { Globe, Search, Hash, ArrowRight, Zap, TrendingUp, Users, Smartphone, Palette, Code, Target, BarChart3 } from 'lucide-react';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  gradient,
  isPopular = false 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  isPopular?: boolean;
}) => {
  return (
    <div className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 ${isPopular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Plus Populaire
          </div>
        </div>
      )}
      
      <div className="p-8">
        {/* En-tête avec icône */}
        <div className="flex items-start mb-6">
          <div className={`p-4 ${gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Liste des fonctionnalités */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <a 
          href="#contact" 
          className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full justify-center"
        >
          <span>Découvrir ce service</span>
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-white" size={28} />,
      title: "Développement Web Premium",
      description: "Sites web sur-mesure, ultra-performants et optimisés pour la conversion. Design moderne et expérience utilisateur exceptionnelle.",
      features: [
        "Design responsive et moderne",
        "Optimisation des performances",
        "Intégration CMS personnalisé",
        "Tests et maintenance inclus"
      ],
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
      isPopular: true
    },
    {
      icon: <Search className="text-white" size={28} />,
      title: "SEO & Référencement",
      description: "Stratégies SEO avancées pour propulser votre site en première page de Google et générer un trafic qualifié constant.",
      features: [
        "Audit SEO complet",
        "Optimisation technique",
        "Création de contenu SEO",
        "Suivi des performances"
      ],
      gradient: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    {
      icon: <Hash className="text-white" size={28} />,
      title: "Marketing Digital",
      description: "Gestion complète de vos réseaux sociaux et campagnes publicitaires pour maximiser votre présence en ligne.",
      features: [
        "Stratégie de contenu",
        "Gestion des réseaux sociaux",
        "Campagnes publicitaires",
        "Analytics et reporting"
      ],
      gradient: "bg-gradient-to-r from-purple-500 to-violet-600"
    },
    {
      icon: <Smartphone className="text-white" size={28} />,
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives et hybrides pour iOS et Android, adaptées à vos besoins spécifiques.",
      features: [
        "Apps natives iOS/Android",
        "Applications hybrides",
        "Interface utilisateur intuitive",
        "Déploiement sur les stores"
      ],
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-600"
    },
    {
      icon: <Palette className="text-white" size={28} />,
      title: "Branding & Identité",
      description: "Création d'identités visuelles fortes et mémorables qui reflètent parfaitement les valeurs de votre entreprise.",
      features: [
        "Logo et charte graphique",
        "Identité visuelle complète",
        "Supports de communication",
        "Guide de style détaillé"
      ],
      gradient: "bg-gradient-to-r from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full text-blue-700 font-semibold text-sm mb-6 shadow-lg">
            <Zap size={16} />
            <span>NOS SERVICES PREMIUM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Des Services <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sur-Mesure</span>
            <br />
            pour un <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Impact Durable</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous proposons des <span className="font-semibold text-gray-800">solutions digitales complètes</span> pour{" "}
            <span className="text-blue-600 font-semibold">transformer votre présence en ligne</span> et{" "}
            <span className="font-semibold text-gray-800">accélérer la croissance de votre entreprise</span>.
          </p>
        </div>
        
        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Section statistiques */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Pourquoi Choisir WebKoda ?
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projets Réalisés</div>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Clients Satisfaits</div>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">+300%</div>
              <div className="text-blue-100">ROI Moyen</div>
            </div>
            
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Support Réactif</div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et découvrez comment nos services peuvent propulser votre succès digital.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Obtenir un Devis Gratuit</span>
            <Zap size={20} className="animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;