import React from 'react';
import Layout from '../../components/layout/Layout';
import { getIntegrationBySlug, getAllIntegrationSlugs } from '../../lib/data/integrations';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function IntegrationPage({ integration }) {
  return (
    <Layout title={`${integration.name} Integration | CloudLeap`}>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column - Integration info */}
            <div className="md:w-2/3">
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 relative mr-6">
                    <Image 
                      src={integration.logo} 
                      alt={integration.name} 
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">{integration.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{integration.description}</p>
                  </div>
                </div>
                
                {/* Features section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {integration.features.map((feature, index) => (
                      <div key={index} className="flex">
                        <CheckCircleIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Use Cases section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Use Cases</h2>
                  <div className="prose dark:prose-dark max-w-none" dangerouslySetInnerHTML={{ __html: integration.useCases }} />
                </div>
              </div>
            </div>
            
            {/* Right column - Connect CTA */}
            <div className="md:w-1/3">
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Connect with {integration.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Integrate {integration.name} with CloudLeap to streamline your operations.
                </p>
                <Link 
                  href="/request-demo" 
                  className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg text-center"
                >
                  Request a Demo
                </Link>
                <Link 
                  href="/docs/integrations" 
                  className="block w-full border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-200 font-medium py-3 px-4 rounded-lg text-center mt-3"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllIntegrationSlugs().map(slug => ({
    params: { slug }
  }));
  
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const integration = getIntegrationBySlug(params.slug);
  return {
    props: { integration }
  };
} 