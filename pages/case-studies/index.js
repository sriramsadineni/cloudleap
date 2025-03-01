import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    id: 'global-retail',
    title: 'How Global Retail Inc. Reduced Shipping Costs by 23%',
    industry: 'Retail',
    challenge: 'Managing high-volume shipping across multiple carriers with manual processes',
    solution: 'Implemented CloudLeap TMS with automated rate shopping and invoice auditing',
    results: [
      '23% reduction in shipping costs',
      '15% improvement in delivery times',
      '98% on-time delivery rate',
      'Eliminated 30+ hours of manual work weekly'
    ],
    image: '/images/case-studies/retail.jpg',
    logo: '/images/logos/global-retail.png'
  },
  {
    id: 'tech-solutions',
    title: 'Tech Solutions Co. Streamlined Operations with Shipping Automation',
    industry: 'Technology',
    challenge: 'Scaling shipping operations without adding headcount',
    solution: 'Deployed CloudLeap\'s shipping automation and integration with existing ERP',
    results: [
      '80% reduction in manual processing time',
      'Zero shipping errors since implementation',
      'Scaled operations 3x without adding staff',
      'ROI achieved within first month'
    ],
    image: '/images/case-studies/tech.jpg',
    logo: '/images/logos/tech-solutions.png'
  },
  {
    id: 'wholesale-distributors',
    title: 'Wholesale Distributors Optimized Multi-Carrier Strategy',
    industry: 'Distribution',
    challenge: 'Managing complex shipping requirements across diverse product lines',
    solution: 'Implemented CloudLeap\'s multi-carrier management and business rules engine',
    results: [
      '18% reduction in transportation spend',
      'Consolidated 12 carrier relationships into a single platform',
      'Improved customer satisfaction with real-time tracking',
      'Reduced shipping-related customer service calls by 35%'
    ],
    image: '/images/case-studies/distribution.jpg',
    logo: '/images/logos/wholesale-distributors.png'
  }
];

export default function CaseStudies() {
  return (
    <Layout>
      <div className="bg-primary-600 dark:bg-primary-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              See how leading companies have transformed their logistics operations with CloudLeap TMS
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  {/* Placeholder for case study image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Case Study Image</span>
                  </div>
                  
                  {/* Company logo */}
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-dark-800 rounded-full h-16 w-16 flex items-center justify-center shadow-md">
                    <div className="text-primary-500 font-bold text-xl">
                      {study.industry.charAt(0)}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="text-sm text-primary-500 font-semibold mb-2">{study.industry}</div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h2>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Results</h3>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center"
                  >
                    Read full case study
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 dark:bg-dark-800 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to achieve similar results?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Schedule a demo to see how CloudLeap TMS can transform your logistics operations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/demo" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Request Demo
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-white dark:bg-dark-700 text-primary-500 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-600 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 