import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { 
  UserGroupIcon, 
  TruckIcon, 
  CubeIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { SECTION_CLASSES, TEXT_CLASSES } from '../../utils/colors';

const partnerTypes = [
  {
    id: 'integrations',
    title: 'Technology Partners',
    description: 'Connect your software with CloudLeap to provide seamless logistics solutions for your customers.',
    icon: <CubeIcon className="h-12 w-12 text-primary-500" />,
    benefits: [
      'Access to CloudLeap API and developer resources',
      'Joint marketing opportunities',
      'Technical support and implementation assistance',
      'Partner certification program'
    ],
    cta: 'Become a Technology Partner',
    link: '/partners/integrations'
  },
  {
    id: 'carriers',
    title: 'Carrier Partners',
    description: 'Join our carrier network to expand your reach and connect with CloudLeap customers.',
    icon: <TruckIcon className="h-12 w-12 text-primary-500" />,
    benefits: [
      'Increased visibility to CloudLeap customers',
      'Streamlined onboarding process',
      'Simplified rating and shipment processing',
      'Enhanced tracking and delivery confirmation'
    ],
    cta: 'Become a Carrier Partner',
    link: '/partners/carriers'
  },
  {
    id: 'resellers',
    title: 'Reseller Partners',
    description: 'Offer CloudLeap TMS to your customers and grow your business with recurring revenue.',
    icon: <UserGroupIcon className="h-12 w-12 text-primary-500" />,
    benefits: [
      'Competitive commission structure',
      'Sales and marketing support',
      'Product training and certification',
      'Dedicated partner success manager'
    ],
    cta: 'Become a Reseller Partner',
    link: '/partners/become-partner'
  }
];

const featuredPartners = [
  { name: 'Acme Logistics', logo: '/images/partners/acme.png', type: 'Technology Partner' },
  { name: 'Global Shipping Co.', logo: '/images/partners/global-shipping.png', type: 'Carrier Partner' },
  { name: 'Supply Chain Solutions', logo: '/images/partners/supply-chain.png', type: 'Reseller Partner' },
  { name: 'Logistics Tech Inc.', logo: '/images/partners/logistics-tech.png', type: 'Technology Partner' },
  { name: 'Express Carriers', logo: '/images/partners/express-carriers.png', type: 'Carrier Partner' },
  { name: 'Enterprise Systems', logo: '/images/partners/enterprise-systems.png', type: 'Reseller Partner' }
];

export default function PartnersPage() {
  // SEO data
  const seoData = {
    title: "Partner Program",
    description: "Join CloudLeap's partner ecosystem to grow your business and deliver exceptional logistics solutions to your customers.",
    keywords: "logistics partners, shipping partners, technology partners, carrier partners, solution partners, partner program",
    ogImage: "/images/og/partners.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "CloudLeap Partner Program",
      "description": "Join our ecosystem of partners to grow your business and deliver exceptional logistics solutions to your customers.",
      "url": "https://cloudleap.com/partners",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://cloudleap.com/partners"
      }
    }
  };

  return (
    <Layout {...seoData}>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">CloudLeap Partner Program</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join our ecosystem of partners to grow your business and deliver exceptional logistics solutions to your customers.
            </p>
          </div>
          
          {/* Partner Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Technology Partners */}
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Technology Partners</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Build integrations and solutions that extend the CloudLeap platform and reach our global customer base.
              </p>
              <Link 
                href="/partners/technology" 
                className="text-primary-500 font-medium flex items-center"
              >
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            {/* Carrier Partners */}
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Carrier Partners</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Connect your shipping services with our platform to reach more customers and streamline operations.
              </p>
              <Link 
                href="/carriers" 
                className="text-primary-500 font-medium flex items-center"
              >
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            {/* Solution Partners */}
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Solution Partners</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Resell CloudLeap solutions and provide implementation services to your customers.
              </p>
              <Link 
                href="/partners/solutions" 
                className="text-primary-500 font-medium flex items-center"
              >
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Partner Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Expand Your Reach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access CloudLeap's global customer base and marketing resources.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get dedicated technical resources and integration assistance.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Revenue Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Unlock new revenue streams through referrals and joint solutions.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Co-Marketing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaborate on marketing initiatives and joint customer success stories.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner Today</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and start growing your business with CloudLeap.
            </p>
            <Link 
              href="/partners/apply" 
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 