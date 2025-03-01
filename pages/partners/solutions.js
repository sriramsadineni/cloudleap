import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function SolutionPartnersPage() {
  return (
    <Layout title="Solution Partners | CloudLeap">
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Solution Partners</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resell CloudLeap solutions and provide implementation services to your customers.
            </p>
          </div>
          
          {/* Partner Tiers */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Partner Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Silver Tier */}
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-100 dark:bg-dark-700 p-6 text-center">
                  <h3 className="text-2xl font-bold">Silver</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">For emerging partners</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">10% discount on resale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Basic sales training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Partner portal access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Email support</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-600">
                    <Link 
                      href="/partners/apply?tier=silver" 
                      className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg text-center"
                    >
                      Apply for Silver
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Gold Tier */}
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden border-2 border-primary-500 transform scale-105">
                <div className="bg-primary-500 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Gold</h3>
                  <p className="text-primary-100 mt-2">Recommended</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">20% discount on resale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Advanced sales training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Co-marketing opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Quarterly business reviews</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-600">
                    <Link 
                      href="/partners/apply?tier=gold" 
                      className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg text-center"
                    >
                      Apply for Gold
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Platinum Tier */}
              <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-800 dark:bg-black p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Platinum</h3>
                  <p className="text-gray-300 mt-2">For strategic partners</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">30% discount on resale</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Custom implementation training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Dedicated partner manager</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">Joint product roadmap input</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">24/7 priority support</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-600">
                    <Link 
                      href="/partners/apply?tier=platinum" 
                      className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg text-center"
                    >
                      Apply for Platinum
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Success Stories */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Partner Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                <blockquote className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "Partnering with CloudLeap has allowed us to offer comprehensive logistics solutions to our clients, increasing our average deal size by 40%."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-dark-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">CEO, LogisticsPro</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-md">
                <blockquote className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "The CloudLeap partner program provided us with all the resources we needed to successfully implement their solutions for our enterprise clients."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-dark-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-medium">Michael Chen</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">CTO, ShipTech Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our solution partner program and start offering CloudLeap's powerful logistics platform to your customers.
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