import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { 
  TruckIcon, 
  ChartBarIcon, 
  CogIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function EnterpriseSolutions() {
  return (
    <Layout>
      <div className="bg-primary-600 dark:bg-primary-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Transportation Management Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Powerful, scalable solutions designed for the complex logistics needs of large organizations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/demo" 
                className="bg-cta-500 hover:bg-cta-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Request Demo
              </Link>
              <Link 
                href="/contact" 
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 rounded-md font-medium transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Challenges Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Solving Enterprise Logistics Challenges
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              CloudLeap helps large organizations overcome their most complex transportation management challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="mb-4">
                <GlobeAltIcon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Global Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manage complex international shipping with multi-language, multi-currency support and compliance with global regulations.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="mb-4">
                <CogIcon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                System Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Seamlessly connect with your existing ERP, WMS, and other enterprise systems through our robust API and pre-built connectors.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="mb-4">
                <ShieldCheckIcon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Security & Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enterprise-grade security with SOC 2 compliance, role-based access control, and comprehensive audit trails.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful capabilities designed for large-scale logistics operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4">
                <TruckIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Multi-Modal Transportation Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Manage all transportation modes including LTL, FTL, parcel, air, ocean, and rail from a single platform.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <ChartBarIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Advanced Analytics & BI</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gain actionable insights with customizable dashboards, predictive analytics, and integration with BI tools.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <UserGroupIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Supplier & Carrier Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Streamline communication with suppliers and carriers through collaborative portals and automated workflows.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <CogIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Custom Workflows & Automation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create custom workflows and automation rules tailored to your specific business processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 dark:text-gray-400 text-xl font-bold">GR</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Global Retail Inc.</h3>
                    <p className="text-gray-600 dark:text-gray-300">Fortune 500 Retailer</p>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  "CloudLeap transformed our global logistics operations"
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "With operations in 15 countries and over 2,000 stores, we needed a solution that could handle our complex logistics requirements. CloudLeap provided the scalability, visibility, and automation we needed to reduce costs by 23% and improve on-time delivery rates to 98%."
                </p>
                
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
                    <p className="text-gray-600 dark:text-gray-400">VP of Supply Chain</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/case-studies/global-retail"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                  >
                    Read the full case study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary-600 dark:bg-primary-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your enterprise logistics?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our enterprise solutions team to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/demo" 
              className="bg-cta-500 hover:bg-cta-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Request Demo
            </Link>
            <Link 
              href="/contact" 
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 