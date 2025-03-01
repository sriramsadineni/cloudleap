import React from 'react';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

// This would typically come from an API or data file
const connectors = {
  shopify: {
    id: 'shopify',
    name: 'Shopify',
    logo: '/images/connectors/shopify.svg',
    description: 'Connect CloudLeap with your Shopify store to automate order fulfillment and shipping.',
    features: [
      {
        title: 'Order Synchronization',
        description: 'Automatically import orders from Shopify to CloudLeap.'
      },
      {
        title: 'Shipping Label Generation',
        description: 'Create shipping labels directly from your Shopify orders.'
      },
      {
        title: 'Tracking Updates',
        description: 'Send tracking information back to Shopify and notify customers.'
      },
      {
        title: 'Inventory Management',
        description: 'Keep inventory levels in sync between CloudLeap and Shopify.'
      }
    ],
    setupSteps: [
      'Install the CloudLeap app from the Shopify App Store',
      'Connect your CloudLeap account',
      'Configure your shipping preferences',
      'Start fulfilling orders automatically'
    ],
    documentation: '/docs/connectors/shopify'
  },
  
  // Print Server Connector
  print_server: {
    id: 'print_server',
    name: 'Print Server',
    logo: '/images/connectors/print-server.svg',
    description: 'Connect CloudLeap with your printing infrastructure to automate label and document printing.',
    features: [
      {
        title: 'Distributed Printing',
        description: 'Print shipping labels and documents to any printer in your network.'
      },
      {
        title: 'Printer Mapping',
        description: 'Configure specific document types to print to designated printers.'
      },
      {
        title: 'Print Queue Management',
        description: 'Monitor and manage print jobs from the CloudLeap dashboard.'
      },
      {
        title: 'Thermal Printer Support',
        description: 'Full support for thermal label printers from major manufacturers.'
      }
    ],
    setupSteps: [
      'Install the CloudLeap Print Server on your network',
      'Configure printer connections and settings',
      'Map document types to specific printers',
      'Test printing from CloudLeap'
    ],
    documentation: '/docs/connectors/print-server'
  },
  
  // Address Validation Connector
  address_validation: {
    id: 'address_validation',
    name: 'Address Validation',
    logo: '/images/connectors/address-validation.svg',
    description: 'Validate and standardize shipping addresses to reduce delivery issues and costs.',
    features: [
      {
        title: 'Real-time Validation',
        description: 'Validate addresses in real-time during order entry or import.'
      },
      {
        title: 'Global Coverage',
        description: 'Support for address validation across multiple countries and regions.'
      },
      {
        title: 'Correction Suggestions',
        description: 'Receive suggestions for correcting invalid or incomplete addresses.'
      },
      {
        title: 'Batch Processing',
        description: 'Validate multiple addresses at once for bulk operations.'
      }
    ],
    setupSteps: [
      'Select your preferred address validation provider',
      'Configure API credentials in CloudLeap',
      'Set validation rules and preferences',
      'Enable validation for your shipping workflows'
    ],
    documentation: '/docs/connectors/address-validation'
  },
  
  // Restricted Party Screening Connector
  restricted_party: {
    id: 'restricted_party',
    name: 'Restricted Party Screening',
    logo: '/images/connectors/restricted-party.svg',
    description: 'Screen customers and trading partners against global restricted party lists to ensure compliance.',
    features: [
      {
        title: 'Automated Screening',
        description: 'Automatically screen orders against restricted party lists.'
      },
      {
        title: 'Comprehensive Coverage',
        description: 'Access to major global restricted party lists and sanctions databases.'
      },
      {
        title: 'Configurable Alerts',
        description: 'Set up custom alerts and workflows for potential matches.'
      },
      {
        title: 'Audit Trail',
        description: 'Maintain detailed records of all screening activities for compliance purposes.'
      }
    ],
    setupSteps: [
      'Select your screening provider',
      'Configure API credentials in CloudLeap',
      'Set up screening rules and thresholds',
      'Define workflows for handling potential matches'
    ],
    documentation: '/docs/connectors/restricted-party-screening'
  },
  
  // SSO Connector
  sso: {
    id: 'sso',
    name: 'Single Sign-On (SSO)',
    logo: '/images/connectors/sso.svg',
    description: 'Integrate CloudLeap with your identity provider for seamless authentication and user management.',
    features: [
      {
        title: 'SAML 2.0 Support',
        description: 'Compatible with major SAML 2.0 identity providers.'
      },
      {
        title: 'OAuth 2.0 Integration',
        description: 'Support for OAuth 2.0 authentication flows.'
      },
      {
        title: 'Automatic User Provisioning',
        description: 'Automatically create and manage user accounts based on your identity provider.'
      },
      {
        title: 'Role Mapping',
        description: 'Map identity provider groups and roles to CloudLeap permissions.'
      }
    ],
    setupSteps: [
      'Configure your identity provider for CloudLeap integration',
      'Set up CloudLeap as a service provider in your IdP',
      'Configure user attribute mapping',
      'Test SSO authentication flow'
    ],
    documentation: '/docs/connectors/sso'
  },
  
  // Dangerous Goods Labels Connector
  dg_labels: {
    id: 'dg_labels',
    name: 'Dangerous Goods Labels',
    logo: '/images/connectors/dg-labels.svg',
    description: 'Generate compliant dangerous goods documentation and labels for hazardous shipments.',
    features: [
      {
        title: 'Regulatory Compliance',
        description: 'Generate labels compliant with IATA, DOT, IMDG, and other regulations.'
      },
      {
        title: 'Hazmat Classification',
        description: 'Identify and classify dangerous goods based on product information.'
      },
      {
        title: 'Documentation Generation',
        description: 'Create shipping papers, declarations, and other required documentation.'
      },
      {
        title: 'Carrier Integration',
        description: 'Seamlessly integrate DG information with carrier shipping processes.'
      }
    ],
    setupSteps: [
      'Configure dangerous goods settings in CloudLeap',
      'Set up product hazmat classifications',
      'Configure label and document templates',
      'Test dangerous goods shipping workflow'
    ],
    documentation: '/docs/connectors/dangerous-goods'
  },
  
  // Packers Connector
  packers: {
    id: 'packers',
    name: 'Packing Optimization',
    logo: '/images/connectors/packers.svg',
    description: 'Optimize package selection and item arrangement to minimize shipping costs and packaging waste.',
    features: [
      {
        title: 'Carton Optimization',
        description: 'Automatically select the optimal box size for each shipment.'
      },
      {
        title: '3D Packing Algorithms',
        description: 'Use advanced algorithms to determine the best arrangement of items in each package.'
      },
      {
        title: 'Multi-Package Shipments',
        description: 'Intelligently split orders into multiple packages when necessary.'
      },
      {
        title: 'Packaging Rules',
        description: 'Define custom rules for item compatibility and special handling requirements.'
      }
    ],
    setupSteps: [
      'Configure your packaging inventory in CloudLeap',
      'Set up product dimensions and weights',
      'Define packing rules and constraints',
      'Enable packing optimization for your shipping workflows'
    ],
    documentation: '/docs/connectors/packing-optimization'
  }
};

export default function ConnectorPage({ connector }) {
  if (!connector) {
    return <div>Connector not found</div>;
  }

  // SEO data
  const seoData = {
    title: `${connector.name} Connector`,
    description: connector.description,
    keywords: `${connector.name.toLowerCase()}, integration, connector, logistics, shipping, ${connector.name.toLowerCase()} integration`,
    ogImage: connector.logo || "/images/og/connectors.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": `${connector.name} Connector for CloudLeap`,
      "description": connector.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <Layout {...seoData}>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column - Connector info */}
            <div className="md:w-2/3">
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 relative mr-6">
                    <Image 
                      src={connector.logo} 
                      alt={connector.name} 
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">{connector.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{connector.description}</p>
                  </div>
                </div>
                
                {/* Features section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {connector.features.map((feature, index) => (
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
                
                {/* Setup Steps section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Setup Process</h2>
                  <ol className="list-decimal pl-5 space-y-3">
                    {connector.setupSteps.map((step, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 pl-2">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            
            {/* Right column - Connect CTA */}
            <div className="md:w-1/3">
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Get Started with {connector.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Connect your {connector.name} account with CloudLeap to streamline your operations.
                </p>
                <Link 
                  href="/request-demo" 
                  className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg text-center"
                >
                  Request a Demo
                </Link>
                <Link 
                  href={connector.documentation} 
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
  const paths = Object.keys(connectors).map(id => ({
    params: { id }
  }));
  
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const connector = connectors[params.id] || null;
  
  return {
    props: { connector }
  };
} 