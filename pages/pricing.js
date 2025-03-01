import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    period: 'per month',
    description: 'Perfect for small businesses shipping up to 500 packages per month',
    features: [
      'Up to 3 carrier integrations',
      'Basic rate shopping',
      'Shipment tracking',
      'Email support',
      'Basic reporting'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$999',
    period: 'per month',
    description: 'Ideal for growing businesses shipping up to 2,000 packages per month',
    features: [
      'Up to 10 carrier integrations',
      'Advanced rate shopping',
      'Automated invoice auditing',
      'Real-time tracking',
      'Priority support',
      'Advanced analytics',
      'API access'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large organizations with complex shipping requirements',
    features: [
      'Unlimited carrier integrations',
      'Global shipping capabilities',
      'Custom workflows',
      'Dedicated account manager',
      'SLA guarantees',
      'Custom reporting',
      'White-label options',
      'Advanced security features'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <Layout>
      <div className="bg-primary-600 dark:bg-primary-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-blue-100 text-center mt-4 max-w-3xl mx-auto">
            Choose the plan that's right for your business
          </p>
        </div>
      </div>

      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden ${
                  plan.highlighted 
                    ? 'ring-2 ring-primary-500 shadow-xl bg-white dark:bg-gray-800 transform md:-translate-y-4' 
                    : 'bg-white dark:bg-gray-800 shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-primary-500 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={plan.cta === 'Contact Sales' ? '/contact' : '/signup'}
                    className={`block w-full text-center py-3 rounded-md font-medium transition-colors ${
                      plan.highlighted 
                        ? 'bg-cta-500 hover:bg-cta-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Can I change plans later?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600 dark:text-gray-300">No, there are no setup fees for our Starter and Professional plans. Enterprise plans may include a one-time implementation fee based on your requirements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, you can save 15% by choosing annual billing on any of our plans.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">What happens if I exceed my monthly shipment limit?</h3>
                <p className="text-gray-600 dark:text-gray-300">If you exceed your monthly shipment limit, additional shipments will be billed at a per-shipment rate. We'll notify you when you're approaching your limit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team is here to help you find the perfect plan for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Sales
            </Link>
            <Link 
              href="/demo" 
              className="bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-600 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 