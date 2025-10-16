import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Zap, Calendar, Award, Star, Users, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', budget: '', projectType: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      title: "Email Professionnel",
      value: "contact@webkoda.fr",
      description: "Réponse garantie sous 2h",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
      link: "mailto:contact@webkoda.fr"
    },
    {
      icon: <Phone className="text-white" size={24} />,
      title: "Appelez-nous",
      value: "+33 7 62 25 58 04",
      description: "Lun-Ven 9h-18h",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-600",
      link: "tel:+33123456789"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      title: "Notre Bureau",
      value: "Paris, France",
      description: "Rendez-vous sur demande",
      gradient: "bg-gradient-to-r from-purple-500 to-violet-600",
      link: "#"
    }
  ];

  const projectTypes = [
    "Site Web Vitrine",
    "E-Commerce",
    "Application Web",
    "Refonte Complète",
    "SEO & Référencement",
    "Marketing Digital",
    "Branding & Identité",
    "Autre"
  ];

  const budgetRanges = [
    "Moins de 5 000€",
    "5 000€ - 15 000€",
    "15 000€ - 50 000€",
    "50 000€ - 100 000€",
    "Plus de 100 000€"
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full text-blue-700 font-semibold text-sm mb-6 shadow-lg">
            <MessageCircle size={16} />
            <span>DISCUTONS DE VOTRE PROJET</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Transformons Votre
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Vision</span>
            <br />
            en <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Réalité</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à <span className="font-semibold text-gray-800">propulser votre entreprise</span> ?{" "}
            <span className="text-blue-600 font-semibold">Contactez nos experts</span> et obtenez un{" "}
            <span className="font-semibold text-gray-800">devis personnalisé gratuit</span> sous 24h.
          </p>
        </div>

        {/* Statistiques de confiance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2h</div>
            <div className="text-gray-600 font-medium">Temps de Réponse</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Clients Satisfaits</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Star className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Note Moyenne</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
            <div className="text-gray-600 font-medium">Devis Gratuit</div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-8">
            {/* Cards de contact */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="group block bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 ${info.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-xl font-semibold text-gray-800 mt-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Garanties */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle size={24} />
                Nos Garanties
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Réponse sous 2h garantie</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Devis gratuit détaillé</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Consultation sans engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Expertise certifiée</span>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Globe size={20} className="text-blue-600" />
                Suivez-nous
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Youtube', icon: '💼', followers: '2.5k' },
                  { name: 'pinterest', icon: '📸', followers: '1.8k' },
                  { name: 'tiktok', icon: '🐦', followers: '1.2k' },
                  

                  
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{social.name}</div>
                      <div className="text-xs text-gray-500">{social.followers}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Envoyé !</h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Merci pour votre message. Notre équipe vous contactera sous 2h.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
                  >
                    Envoyer un Autre Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Démarrons Votre Projet
                    </h3>
                    <p className="text-lg text-gray-600">
                      Parlez-nous de vos objectifs et recevez une proposition personnalisée.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                          Nom complet *
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" 
                          placeholder="Votre nom et prénom"
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                          Email professionnel *
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" 
                          placeholder="votre@email.com"
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                          Téléphone
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" 
                          placeholder="+33 7 62 25 58 04"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                          Entreprise
                        </label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200" 
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="projectType" className="block text-gray-700 font-semibold mb-2">
                          Type de projet *
                        </label>
                        <select 
                          id="projectType" 
                          name="projectType" 
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200"
                          required
                        >
                          <option value="">Sélectionnez un type</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="budget" className="block text-gray-700 font-semibold mb-2">
                          Budget estimé
                        </label>
                        <select 
                          id="budget" 
                          name="budget" 
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200"
                        >
                          <option value="">Sélectionnez un budget</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Décrivez votre projet *
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-200 resize-none" 
                        placeholder="Parlez-nous de vos objectifs, votre audience cible, vos contraintes, etc. Plus vous êtes précis, mieux nous pourrons vous conseiller."
                        required 
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            <Calendar size={20} />
                            <span>Obtenir Mon Devis Gratuit</span>
                            <Zap size={20} />
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                      <br />
                      <span className="text-green-600 font-semibold">✓ Réponse garantie sous 2h</span> • 
                      <span className="text-blue-600 font-semibold"> ✓ Devis détaillé gratuit</span> • 
                      <span className="text-purple-600 font-semibold"> ✓ Sans engagement</span>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Section urgence/CTA final */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Clock size={20} />
            <span>Besoin d'une réponse rapide ? Appelez-nous maintenant !</span>
            <Phone size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;