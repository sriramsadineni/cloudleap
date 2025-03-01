import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import LogoCarousel from '../components/home/LogoCarousel';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Link from 'next/link';

export default function Home() {
  // SEO data
  const seoData = {
    title: "Modern Transportation Management System",
    description: "CloudLeap is a modern transportation management system that helps businesses optimize their shipping operations, reduce costs, and improve customer experience.",
    keywords: "transportation management system, TMS, shipping software, logistics software, supply chain management",
    ogImage: "/images/og/home.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CloudLeap",
      "url": "https://cloudleap.com",
      "description": "Modern Transportation Management System"
    },
    // Update banner data
    updateMessage: "New specialized solutions now available!",
    updateLink: "/solutions/specialized",
    updateLinkText: "Explore now"
  };

  return (
    <Layout {...seoData}>
      <Hero />
      <LogoCarousel />
      <Features />
      
      {/* Integration Partners Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              CloudLeap integrates with your existing systems and partners
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {/* Partner logos would go here */}
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
      
      <Testimonials />
      
      {/* CTA Section */}
      <div className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your shipping operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have optimized their logistics with CloudLeap TMS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/demo" 
              className="bg-dark hover:bg-dark-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Request Demo
            </Link>
            <Link 
              href="/contact" 
              className="bg-white dark:bg-dark-800 text-primary-500 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 