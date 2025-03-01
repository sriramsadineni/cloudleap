import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const connectorCategories = [
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Connect your online store with CloudLeap',
    connectors: [
      { id: 'shopify', name: 'Shopify', logo: '/images/connectors/shopify.svg' },
      { id: 'woocommerce', name: 'WooCommerce', logo: '/images/connectors/woocommerce.svg' },
      { id: 'magento', name: 'Magento', logo: '/images/connectors/magento.svg' }
    ]
  },
  {
    id: 'erp',
    name: 'ERP Systems',
    description: 'Integrate with your enterprise resource planning software',
    connectors: [
      { id: 'sap', name: 'SAP', logo: '/images/connectors/sap.svg' },
      { id: 'netsuite', name: 'NetSuite', logo: '/images/connectors/netsuite.svg' },
      { id: 'dynamics', name: 'Microsoft Dynamics', logo: '/images/connectors/dynamics.svg' }
    ]
  },
  {
    id: 'wms',
    name: 'Warehouse Management',
    description: 'Connect with your warehouse management system',
    connectors: [
      { id: 'manhattan', name: 'Manhattan Associates', logo: '/images/connectors/manhattan.svg' },
      { id: 'highjump', name: 'HighJump', logo: '/images/connectors/highjump.svg' },
      { id: 'infor', name: 'Infor WMS', logo: '/images/connectors/infor.svg' }
    ]
  },
  {
    id: 'specialized',
    name: 'Specialized Solutions',
    description: 'Enhance your logistics operations with specialized tools and services',
    connectors: [
      { id: 'print_server', name: 'Print Server', logo: '/images/connectors/print-server.svg' },
      { id: 'address_validation', name: 'Address Validation', logo: '/images/connectors/address-validation.svg' },
      { id: 'restricted_party', name: 'Restricted Party Screening', logo: '/images/connectors/restricted-party.svg' },
      { id: 'sso', name: 'Single Sign-On (SSO)', logo: '/images/connectors/sso.svg' },
      { id: 'dg_labels', name: 'Dangerous Goods Labels', logo: '/images/connectors/dg-labels.svg' },
      { id: 'packers', name: 'Packing Optimization', logo: '/images/connectors/packers.svg' }
    ]
  }
];

export default function ConnectorsPage() {
  // SEO data
  const seoData = {
    title: "Connectors",
    description: "Pre-built integrations to connect CloudLeap with your existing systems including e-commerce platforms, ERP systems, and warehouse management software.",
    keywords: "logistics connectors, shipping integrations, e-commerce integration, ERP integration, WMS integration, logistics API",
    ogImage: "/images/og/connectors.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "CloudLeap Connectors",
      "description": "Pre-built integrations to connect CloudLeap with your existing systems",
      "url": "https://cloudleap.com/connectors",
      "mainEntityOfPage": {
        "@type": "CollectionPage",
        "@id": "https://cloudleap.com/connectors"
      },
      "itemListElement": connectorCategories.flatMap(category => 
        category.connectors.map((connector, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": connector.name,
          "url": `https://cloudleap.com/connectors/${connector.id}`
        }))
      )
    }
  };

  return (
    <Layout {...seoData}>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">CloudLeap Connectors</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Pre-built integrations to connect CloudLeap with your existing systems
            </p>
          </div>
          
          {/* Connector Categories */}
          {connectorCategories.map(category => (
            <div key={category.id} className="mt-16">
              <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.connectors.map(connector => (
                  <Link 
                    key={connector.id}
                    href={`/connectors/${connector.id}`}
                    className="bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="relative h-10 w-10 mr-3">
                        <Image 
                          src={connector.logo} 
                          alt={connector.name}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <h3 className="font-medium">{connector.name}</h3>
                    </div>
                    <div className="text-primary-500 text-sm font-medium flex items-center">
                      View details <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          {/* Custom Connector CTA */}
          <div className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Connector?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see the connector you need? Our team can build custom integrations for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/request-demo" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg text-center"
              >
                Request a Demo
              </Link>
              <Link 
                href="/partners/technology" 
                className="bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-200 font-medium py-3 px-8 rounded-lg text-center"
              >
                Become a Technology Partner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 