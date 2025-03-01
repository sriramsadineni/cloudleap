import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function GlobalRetailCaseStudy() {
  return (
    <Layout>
      <div className="bg-primary-600 dark:bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-white mb-6 hover:underline"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-1" />
              Back to Case Studies
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Global Retail Inc. Reduced Shipping Costs by 23%
            </h1>
            <div className="flex items-center">
              <div className="bg-white dark:bg-dark-800 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                <span className="text-primary-500 font-bold">R</span>
              </div>
              <div>
                <p className="text-white font-medium">Global Retail Inc.</p>
                <p className="text-blue-100">Retail | 500+ stores nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                {/* Placeholder for case study hero image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Case Study Hero Image</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Industry</h3>
                    <p className="text-gray-900 dark:text-white">Retail</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Company Size</h3>
                    <p className="text-gray-900 dark:text-white">Enterprise (5,000+ employees)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Location</h3>
                    <p className="text-gray-900 dark:text-white">United States</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Challenge</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Global Retail Inc., a leading retail chain with over 500 stores nationwide, was struggling with inefficient shipping processes that were costing them millions annually. Their challenges included:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Manual carrier selection and rate shopping processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Lack of visibility into shipping performance across locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Inconsistent shipping policies between stores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>No automated invoice auditing, resulting in significant overpayments</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solution</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Global Retail implemented CloudLeap TMS across their entire organization, focusing on:
                  </p>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-primary-500" />
                      </div>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Automated Rate Shopping</strong>
                        <p>Implementing real-time rate shopping across 25+ carriers to automatically select the most cost-effective shipping option for each package.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-primary-500" />
                      </div>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Centralized Shipping Policy Management</strong>
                        <p>Creating standardized shipping rules and policies that could be managed centrally but applied locally across all locations.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-primary-500" />
                      </div>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Automated Invoice Auditing</strong>
                        <p>Implementing automated carrier invoice auditing to identify and recover billing errors and overcharges.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-primary-500" />
                      </div>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Real-time Analytics Dashboard</strong>
                        <p>Deploying comprehensive analytics to track shipping performance, costs, and delivery times across all locations.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-primary-500 mb-2">23%</div>
                      <p className="text-gray-700 dark:text-gray-300">Reduction in shipping costs</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-primary-500 mb-2">15%</div>
                      <p className="text-gray-700 dark:text-gray-300">Improvement in delivery times</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
                      <p className="text-gray-700 dark:text-gray-300">On-time delivery rate</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6 text-center">
                      <div className="text-4xl font-bold text-primary-500 mb-2">30+</div>
                      <p className="text-gray-700 dark:text-gray-300">Hours saved weekly per location</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    Within the first year of implementing CloudLeap TMS, Global Retail Inc. achieved a 23% reduction in overall shipping costs, representing millions in annual savings. The automated rate shopping alone accounted for 12% of these savings, while the invoice auditing recovered an additional 8% in carrier overcharges.
                  </p>
                </div>
                
                <div className="mb-8 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">From the Client</h2>
                  <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                    "CloudLeap has transformed our logistics operations. The visibility and control we now have over our shipping processes has not only reduced costs significantly but also improved our customer experience with faster, more reliable deliveries."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">SJ</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
                      <p className="text-gray-600 dark:text-gray-400">Logistics Director, Global Retail Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
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
                  href="/case-studies" 
                  className="bg-white dark:bg-dark-700 text-primary-500 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-600 px-8 py-3 rounded-md font-medium transition-colors"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 