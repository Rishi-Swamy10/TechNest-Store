import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Showcase from '../Components/Showcase';
import Categories from '../Components/Categories';
import ProductGrid from '../Components/ProductGrid';
import HighlightSection from '../Components/HighlightSection';
import DiscountSection from '../Components/DiscountSection';
import SummerSaleBanner from '../Components/SummerSaleBanner';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div>
      
      <HeroSection />
      <Showcase />
      <Categories />
      <ProductGrid />
      <HighlightSection />
      <DiscountSection />
      <SummerSaleBanner />
      
    </div>
  );
};

export default HomePage;