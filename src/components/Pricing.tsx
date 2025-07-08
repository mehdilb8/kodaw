import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface PricePackage {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

const PricingCard = ({ pkg }: { pkg: PricePackage }) => {
  return (
    <div className={`card h-full flex flex-col ${pkg.popular ? 'border-2 border-blue-500 relative' : ''}`}>
      {pkg.popular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Populaire
        </div>
      )}
      
      <div className={`p-6 ${pkg.popular ? 'bg-blue-600 text-white rounded-t-xl' : 'bg-blue-50 text-gray-800'}`}>
        <h3 className="text-xl font-bold mb-2">{pkg.name} Package</h3>
        <div className="flex items-end">
          <span className="text-3xl font-bold">${pkg.price}</span>
          <span className={`ml-1 mb-1 ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>/projet</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <ul className="space-y-3 mb-8 flex-grow">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-blue-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className={`text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 w-full ${
            pkg.popular 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50'
          }`}
        >
          Commencer maintenant
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const packages: PricePackage[] = [
    {
      name: "Débutant",
      price: "850",
      features: [
        "Site web basique (jusqu'à 5 pages)",
        "Design responsive pour mobile",
        "Configuration SEO de base",
        "Intégration du formulaire de contact",
        "Liens vers les réseaux sociaux",
        "1 round de révisions"
      ]
    },
    {
      name: "Professionnel",
      price: "1950",
      popular: true,
      features: [
        "Site web personnalisé (jusqu'à 10 pages)",
        "Design responsive pour tous les appareils",
        "Optimisation SEO avancée",
        "Système de gestion de contenu",
        "Intégration des réseaux sociaux",
        "Fonctionnalités e-commerce",
        "Formulaires de génération de leads",
        "3 rounds de révisions"
      ]
    },
    {
      name: "Entreprise",
      price: "2950",
      features: [
        "Site web personnalisé haut de gamme",
        "Pages illimitées",
        "Stratégie SEO avancée",
        "Création de contenu (5 pages)",
        "Mise en place et stratégie des réseaux sociaux",
        "E-commerce avec intégration des paiements",
        "Fonctionnalités personnalisées",
        "Tableau de bord analytique",
        "Révisions illimitées"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-padding">
        <span className="block text-blue-600 font-medium text-center mb-4">TARIFS</span>
        <h2 className="section-title">Nos Plans & Offres</h2>
        <p className="section-subtitle">
          Choisissez l'offre parfaite qui correspond à vos besoins et à votre budget. Toutes les offres incluent un support dédié.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-blue-50 px-4 py-3 rounded-lg">
            <AlertCircle className="text-blue-600 mr-2" size={20} />
            <p className="text-gray-700">Besoin d'un package personnalisé ? <a href="#contact" className="text-blue-600 font-medium">Contactez-nous</a> pour des solutions sur-mesure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
