import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const specializedSolutions = [
  {
    id: 'print_server',
    name: 'Print Server',
    description: 'Streamline your label and document printing across multiple locations',
    benefits: [
      'Eliminate manual printing processes',
      'Support for all major printer manufacturers',
      'Centralized print management',
      'Automatic printer failover'
    ],
    icon: '/images/connectors/print-server.svg',
    connectorLink: '/connectors/print_server'
  },
  {
    id: 'address_validation',
    name: 'Address Validation',
    description: 'Reduce delivery issues with real-time address validation',
    benefits: [
      'Reduce failed deliveries',
      'Lower shipping costs',
      'Improve customer satisfaction',
      'Global address coverage'
    ],
    icon: '/images/connectors/address-validation.svg',
    connectorLink: '/connectors/address_validation'
  },
  {
    id: 'restricted_party',
    name: 'Restricted Party Screening',
    description: 'Ensure compliance with global trade regulations',
    benefits: [
      'Automated compliance checks',
      'Reduce compliance risk',
      'Streamline international shipping',
      'Comprehensive audit trail'
    ],
    icon: '/images/connectors/restricted-party.svg',
    connectorLink: '/connectors/restricted_party'
  },
  {
    id: 'sso',
    name: 'Single Sign-On (SSO)',
    description: 'Simplify user authentication and management',
    benefits: [
      'Streamlined user experience',
      'Enhanced security',
      'Reduced IT overhead',
      'Automated user provisioning'
    ],
    icon: '/images/connectors/sso.svg',
    connectorLink: '/connectors/sso'
  },
  {
    id: 'dg_labels',
    name: 'Dangerous Goods Labels',
    description: 'Ensure compliance when shipping hazardous materials',
    benefits: [
      'Regulatory compliance',
      'Automated documentation',
      'Reduced shipping delays',
      'Carrier integration'
    ],
    icon: '/images/connectors/dg-labels.svg',
    connectorLink: '/connectors/dg_labels'
  },
  {
    id: 'packers',
    name: 'Packing Optimization',
    description: 'Minimize shipping costs with intelligent package selection',
    benefits: [
      'Reduce dimensional weight charges',
      'Minimize packaging waste',
      'Optimize multi-item shipments',
      'Custom packing rules'
    ],
    icon: '/images/connectors/packers.svg',
    connectorLink: '/connectors/packers'
  }
];

export default function SpecializedSolutionsPage() {
  return (
    <Layout title="Specialized Solutions | CloudLeap">
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Specialized Logistics Solutions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Enhance your logistics operations with our specialized tools and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {specializedSolutions.map(solution => (
              <div key={solution.id} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-4">
                    <Image 
                      src={solution.icon} 
                      alt={solution.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h2 className="text-xl font-bold">{solution.name}</h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">{solution.description}</p>
                
                <h3 className="font-medium mb-3">Key Benefits:</h3>
                <ul className="space-y-2 mb-6">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={solution.connectorLink} 
                  className="text-primary-500 font-medium flex items-center"
                >
                  Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can build custom solutions tailored to your specific logistics requirements.
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