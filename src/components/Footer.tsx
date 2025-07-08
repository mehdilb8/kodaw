import React, { useState } from 'react';
import { Code, Mail, MapPin, Phone, Send, Award, Users, Clock, CheckCircle, ExternalLink, ArrowUp, Heart, Star, Globe, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'pinterest', icon: '💼', url: 'https://fr.pinterest.com/webkodateam/', followers: '2.5k' },
    { name: 'Youtube', icon: '📹', url: 'https://www.youtube.com/@WEBKODA', followers: '1.8k' },
    { name: 'tiktok', icon: '🐦', url: 'https://www.tiktok.com/@webkoda', followers: '1.2k' }
  ];


  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Sites Web Premium', href: '#services' },
    { name: 'E-Commerce', href: '#services' },
    { name: 'SEO & Référencement', href: '#services' },
    { name: 'Marketing Digital', href: '#services' },
    { name: 'Maintenance & Support', href: '#services' },
    { name: 'Consultation Stratégique', href: '#services' }
  ];

  const resources = [
    { name: 'Guide SEO Gratuit', href: '#', isNew: true },
    { name: 'Templates Premium', href: '#' },
    { name: 'Études de Cas', href: '#portfolio' },
    { name: 'Webinaires', href: '#', isPopular: true },
    { name: 'Centre d\'Aide', href: '#' },
    { name: 'Devis Gratuit', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* CTA Section avant le footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 relative z-10">
        <div className="container-padding py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Transformer Votre Présence Digitale ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez plus de 500 entreprises qui nous font confiance pour leur croissance digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap size={20} />
                <span>Démarrer Mon Projet</span>
              </a>
              <a 
                href="tel:+33123456789"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <Phone size={18} />
                <span>Appel Gratuit</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="container-padding pt-16 pb-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Colonne principale - Marque */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 text-3xl font-bold mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Code className="text-white" size={32} />
              </div>
              <span>Web<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Koda</span></span>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              <span className="font-semibold text-white">L'agence digitale premium</span> qui transforme vos idées en{" "}
              <span className="text-blue-400 font-semibold">succès digitaux exceptionnels</span>. 
              Plus de 500 projets réussis, une expertise reconnue.
            </p>

            
            
            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <Globe size={18} className="text-blue-400" />
                Suivez-nous
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all duration-300 group border border-gray-700/50 hover:border-blue-500/50"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                    <div>
                      <div className="font-semibold text-white text-sm">{social.name}</div>
                      <div className="text-xs text-gray-400">{social.followers} abonnés</div>
                    </div>
                    <ExternalLink size={14} className="text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation rapide */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Ressources & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Ressources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {resource.name}
                    {resource.isNew && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW</span>
                    )}
                    {resource.isPopular && (
                      <span className="px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">🔥</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact rapide */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Mail className="text-blue-400" size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Email</div>
                  <a href="mailto:contact@webkoda.fr" className="text-sm hover:text-blue-400 transition-colors">
                    contact@webkoda.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Phone className="text-green-400" size={16} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Téléphone</div>
                  <a href="tel:+33123456789" className="text-sm hover:text-green-400 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Star className="text-yellow-400" size={24} />
                Newsletter Premium
              </h3>
              <p className="text-gray-300">
                Recevez nos <span className="font-semibold text-white">conseils d'experts</span>, 
                les <span className="text-blue-400 font-semibold">dernières tendances</span> et nos 
                <span className="font-semibold text-white"> offres exclusives</span> chaque semaine.
              </p>
              <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
                <CheckCircle size={16} className="text-green-400" />
                <span>Conseils exclusifs</span>
                <CheckCircle size={16} className="text-green-400" />
                <span>Pas de spam</span>
                <CheckCircle size={16} className="text-green-400" />
                <span>Désabonnement facile</span>
              </div>
            </div>
            
            <div>
              {isSubscribed ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 text-center">
                  <CheckCircle className="text-green-400 mx-auto mb-2" size={32} />
                  <p className="text-green-400 font-semibold">Merci ! Vous êtes inscrit ✨</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input 
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-gray-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    required
                  />
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
                  >
                    <Send size={18} />
                    <span className="hidden sm:inline">S'abonner</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>© {currentYear} WebKoda. Tous droits réservés.</p>
              <p className="text-sm">
                Conçu avec <Heart size={14} className="inline text-red-400 mx-1" /> pour votre succès digital
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions Légales</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">CGV</a>
              </div>
              
              <button 
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Retour en haut"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;