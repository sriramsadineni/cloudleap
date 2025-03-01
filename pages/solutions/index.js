import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    id: 'order-management',
    title: 'Order Management',
    description: 'Streamline your order processing from multiple sales channels',
    features: [
      'Centralized order dashboard',
      'Multi-channel order synchronization',
      'Automated order routing',
      'Order status tracking'
    ],
    image: '/images/solutions/order-management.jpg',
    href: '/solutions/order-management'
  },
  {
    id: 'shipping-management',
    title: 'Shipping Management',
    description: 'Optimize your shipping operations and reduce costs',
    features: [
      'Rate shopping across carriers',
      'Automated label generation',
      'Batch processing',
      'International shipping documentation'
    ],
    image: '/images/solutions/shipping-management.jpg',
    href: '/solutions/shipping-management'
  },
  {
    id: 'warehouse-management',
    title: 'Warehouse Management',
    description: 'Improve warehouse efficiency and accuracy',
    features: [
      'Inventory management',
      'Pick and pack optimization',
      'Barcode scanning',
      'Warehouse analytics'
    ],
    image: '/images/solutions/warehouse-management.jpg',
    href: '/solutions/warehouse-management'
  },
  {
    id: 'returns-management',
    title: 'Returns Management',
    description: 'Streamline your returns process and improve customer satisfaction',
    features: [
      'Self-service return portal',
      'Return label generation',
      'Return tracking',
      'Refund processing'
    ],
    image: '/images/solutions/returns-management.jpg',
    href: '/solutions/returns-management'
  }
];

export default function SolutionsPage() {
  // SEO data
  const seoData = {
    title: "Logistics Solutions",
    description: "Comprehensive logistics solutions to optimize your shipping operations, reduce costs, and improve customer experience.",
    keywords: "logistics solutions, shipping management, order management, warehouse management, transportation management system, TMS",
    ogImage: "/images/og/solutions.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "CloudLeap Logistics Solutions",
      "description": "Comprehensive logistics solutions to optimize your shipping operations",
      "url": "https://cloudleap.com/solutions",
      "mainEntityOfPage": {
        "@type": "CollectionPage",
        "@id": "https://cloudleap.com/solutions"
      },
      "itemListElement": solutions.map((solution, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": solution.title,
        "url": solution.href
      }))
    }
  };

  return (
    <Layout {...seoData}>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">CloudLeap Solutions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive logistics solutions to optimize your operations
            </p>
          </div>
          
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gray-200 dark:bg-dark-700 rounded-lg overflow-hidden h-80 relative">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={solution.href} 
                    className="inline-flex items-center text-primary-500 font-medium"
                  >
                    Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-24 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn how CloudLeap can transform your logistics operations.
            </p>
            <Link 
              href="/request-demo" 
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg text-center"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 