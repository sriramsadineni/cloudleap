import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function TechnologyPartnersPage() {
  return (
    <Layout title="Technology Partners | CloudLeap">
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Technology Partners</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Build integrations and solutions that extend the CloudLeap platform and reach our global customer base.
            </p>
          </div>
          
          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">API Access</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Full access to CloudLeap's API suite</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Developer sandbox environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Technical documentation and support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Marketing Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Featured in our integration marketplace</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Joint marketing opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Co-branded case studies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Business Growth</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Access to CloudLeap's customer base</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Referral opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Partner-exclusive events and networking</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Technical Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Integration development support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Early access to new features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Dedicated partner success manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Integration Types */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Integration Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect your platform with CloudLeap using our comprehensive API suite.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">Embedded Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Embed CloudLeap functionality directly within your application.
                </p>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3">Data Exchange</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Synchronize data between CloudLeap and your platform in real-time.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Become a Technology Partner?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our ecosystem and start building innovative solutions with CloudLeap.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/partners/apply" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-lg text-center"
              >
                Apply Now
              </Link>
              <Link 
                href="/docs" 
                className="bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-200 font-medium py-3 px-8 rounded-lg text-center"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 