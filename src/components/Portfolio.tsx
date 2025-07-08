import React, { useState } from 'react';
import { ExternalLink, Play, Award, TrendingUp, Users, Star, Eye, Calendar, ArrowRight, Zap } from 'lucide-react';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  type: 'image' | 'video';
  client: string;
  results: string;
  duration: string;
  technologies: string[];
  featured?: boolean;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: 'web',
      title: 'E-Commerce Premium - TechStore',
      description: 'Boutique en ligne haute performance avec système de recommandations IA et checkout optimisé',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      type: 'image',
      client: 'TechStore SAS',
      results: '+420% conversions',
      duration: '6 semaines',
      technologies: ['React', 'Node.js', 'Stripe'],
      featured: true
    },
    {
      id: 2,
      category: 'web',
      title: 'Site Corporate - FinancePartner',
      description: 'Plateforme sophistiquée pour services financiers avec dashboard client et calculateurs interactifs',
      image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      type: 'image',
      client: 'FinancePartner',
      results: '+280% leads qualifiés',
      duration: '8 semaines',
      technologies: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      id: 3,
      category: 'social',
      title: 'Stratégie Social Media - FashionBrand',
      description: 'Campagne virale Instagram avec influenceurs et contenu UGC pour marque de mode émergente',
      image: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      type: 'video',
      client: 'FashionBrand',
      results: '+15M impressions',
      duration: '3 mois',
      technologies: ['Instagram', 'TikTok', 'Analytics']
    },
    {
      id: 4,
      category: 'seo',
      title: 'SEO Local - Restaurant Gourmet',
      description: 'Optimisation SEO complète avec stratégie de contenu local et gestion des avis clients',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      type: 'image',
      client: 'Le Gourmet',
      results: 'Position #1 Google',
      duration: '4 mois',
      technologies: ['SEO', 'Google My Business', 'Schema']
    },
    {
      id: 5,
      category: 'social',
      title: 'Production Vidéo - BeautyBrand',
      description: 'Série de vidéos produits avec storytelling émotionnel et animations 3D pour réseaux sociaux',
      image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      type: 'video',
      client: 'BeautyBrand',
      results: '+500% engagement',
      duration: '2 mois',
      technologies: ['After Effects', 'Blender', 'Premiere']
    },
    {
      id: 6,
      category: 'web',
      title: 'Portfolio Créatif - StudioPhoto',
      description: 'Site portfolio immersif avec galerie interactive et booking en ligne pour photographe pro',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      type: 'image',
      client: 'StudioPhoto',
      results: '+350% réservations',
      duration: '5 semaines',
      technologies: ['Three.js', 'GSAP', 'WordPress']
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const categories = [
    { key: 'all', label: 'Tous les Projets', count: portfolioItems.length },
    { key: 'web', label: 'Développement Web', count: portfolioItems.filter(item => item.category === 'web').length },
    { key: 'seo', label: 'SEO & Référencement', count: portfolioItems.filter(item => item.category === 'seo').length },
    { key: 'social', label: 'Marketing Digital', count: portfolioItems.filter(item => item.category === 'social').length }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 rounded-full text-purple-700 font-semibold text-sm mb-6 shadow-lg">
            <Award size={16} />
            <span>PORTFOLIO PREMIUM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Nos <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Réalisations</span>
            <br />
            d'<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Exception</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos <span className="font-semibold text-gray-800">projets les plus remarquables</span> qui ont{" "}
            <span className="text-purple-600 font-semibold">transformé des entreprises</span> et généré des{" "}
            <span className="font-semibold text-gray-800">résultats exceptionnels</span>.
          </p>
        </div>

        {/* Statistiques des projets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Projets Livrés</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">+350%</div>
            <div className="text-gray-600 font-medium">ROI Moyen Client</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Clients Satisfaits</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Star className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Note Moyenne</div>
          </div>
        </div>
        
        {/* Filtres améliorés */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 p-2 bg-white rounded-2xl shadow-lg border border-gray-200">
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category.key 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{category.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                  activeFilter === category.key ? 'bg-white/20' : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <article key={item.id} className={`group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-2 ${item.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}>
              {/* Badge projet vedette */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star size={14} className="fill-current" />
                    <span>Projet Vedette</span>
                  </div>
                </div>
              )}
              
              {/* Image avec overlay sophistiqué */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge catégorie */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 font-semibold text-sm rounded-full border border-white/20">
                    {item.category === 'web' ? 'Web Dev' : item.category === 'seo' ? 'SEO' : 'Marketing'}
                  </span>
                </div>
                
                {/* Overlay avec bouton d'action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-purple-600 p-4 rounded-full shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-purple-50">
                    {item.type === 'video' ? (
                      <Play fill="currentColor" size={24} />
                    ) : (
                      <ExternalLink size={24} />
                    )}
                  </button>
                </div>
                
                {/* Résultats en overlay */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <TrendingUp size={14} />
                    <span>{item.results}</span>
                  </div>
                </div>
              </div>
              
              {/* Contenu de la card */}
              <div className="p-6">
                {/* Meta informations */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-purple-500" />
                    <span>{item.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-blue-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                
                {/* Titre */}
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Résultat */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold">
                    <TrendingUp size={14} />
                    <span>{item.results}</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-1 group/btn">
                    <span>Voir le projet</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Votre Projet Sera le Prochain ?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos clients qui ont transformé leur business avec nos solutions sur mesure. 
            Discutons de votre projet et créons quelque chose d'exceptionnel ensemble.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Démarrer Mon Projet</span>
              <Zap size={20} />
            </a>
            <a 
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Eye size={18} />
              <span>Voir Plus de Projets</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;