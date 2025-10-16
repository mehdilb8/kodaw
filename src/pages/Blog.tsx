import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogList';
import { Calendar, User, ArrowRight, Clock, BookOpen, TrendingUp, Eye } from 'lucide-react';

const BlogCard = ({ post, index }: { post: any; index: number }) => {
  const isFeatureCard = index === 0;
  
  return (
    <article className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 ${isFeatureCard ? 'md:col-span-2 lg:col-span-2' : ''}`}>
      {/* Badge pour l'article principal */}
      {isFeatureCard && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            ⭐ Article Vedette
          </div>
        </div>
      )}
      
      {/* Image avec overlay */}
      <div className={`relative overflow-hidden ${isFeatureCard ? 'h-80' : 'h-64'}`}>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Catégorie en overlay */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 font-semibold text-sm rounded-full border border-white/20">
            {post.category}
          </span>
        </div>
        
        {/* Temps de lecture estimé */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 px-3 py-1 bg-black/70 text-white rounded-full text-sm">
            <Clock size={14} />
            <span>3 min</span>
          </div>
        </div>
      </div>
      
      {/* Contenu */}
      <div className={`p-6 ${isFeatureCard ? 'p-8' : ''}`}>
        {/* Meta informations */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-500" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} className="text-green-500" />
            <span>WebKoda</span>
          </div>
          
        </div>
        
        {/* Titre */}
        <h2 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 ${isFeatureCard ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {post.title}
        </h2>
        
        {/* Description */}
        <p className={`text-gray-600 leading-relaxed mb-6 ${isFeatureCard ? 'text-lg' : 'text-base'}`}>
          {post.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Web Design', 'SEO', 'Performance'].map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {/* CTA */}
        <Link 
          to={`/blog/${post.id}`}
          className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <BookOpen size={18} />
          <span>Lire l'article</span>
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 rounded-full text-blue-700 font-semibold text-sm mb-6 shadow-lg">
            <BookOpen size={16} />
            <span>NOTRE BLOG EXPERT</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Restez à la Pointe de l'
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Innovation</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos <span className="font-semibold text-gray-800">conseils d'experts</span>, les{" "}
            <span className="text-blue-600 font-semibold">dernières tendances</span> et nos{" "}
            <span className="font-semibold text-gray-800">retours d'expérience</span> pour optimiser votre présence digitale.
          </p>
        </div>

        {/* Statistiques du blog */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Articles Publiés</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Eye className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">25k+</div>
            <div className="text-gray-600 font-medium">Lectures Mensuelles</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Retours Positifs</div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <User className="text-white" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">5k+</div>
            <div className="text-gray-600 font-medium">Abonnés Fidèles</div>
          </div>
        </div>

        {/* Grille d'articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Section newsletter */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ne Ratez Aucun Conseil d'Expert !
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter et recevez chaque semaine nos meilleurs conseils pour optimiser votre présence digitale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 border-0 focus:ring-4 focus:ring-white/20 outline-none"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              S'abonner
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            ✅ Conseils exclusifs • ✅ Pas de spam • ✅ Désabonnement facile
          </p>
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Besoin de Conseils Personnalisés ?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nos experts sont là pour analyser votre situation et vous proposer des solutions sur mesure.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Consultation Gratuite</span>
            <ArrowRight size={20} className="animate-pulse" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;