import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Blog/>
      <Services />
      {/* <Pricing /> */}
      <WhyChooseUs />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
