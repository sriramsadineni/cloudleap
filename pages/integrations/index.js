import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { getAllIntegrations, getIntegrationCategories } from '../../lib/data/integrations';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function IntegrationsPage({ integrations, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeCategory);
  
  return (
    <Layout title="Integrations | CloudLeap">
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Integration Ecosystem</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect CloudLeap with your favorite tools and platforms to streamline your logistics operations.
            </p>
          </div>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className={`px-4 py-2 rounded-full transition ${activeCategory === 'all' ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600'}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full transition ${activeCategory === category ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Integrations grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {filteredIntegrations.map(integration => (
              <Link 
                href={`/integrations/${integration.slug}`} 
                key={integration.id}
                className="bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 mr-3">
                    <Image 
                      src={integration.logo} 
                      alt={integration.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 className="font-medium">{integration.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{integration.shortDescription}</p>
                <div className="text-primary-500 text-sm font-medium flex items-center">
                  Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const integrations = getAllIntegrations();
  const categories = getIntegrationCategories();
  return {
    props: { integrations, categories }
  };
} 