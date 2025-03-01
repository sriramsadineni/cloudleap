import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  TruckIcon, 
  CheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { SECTION_CLASSES, TEXT_CLASSES } from '../../utils/colors';

export default function RateShopping() {
  return (
    <Layout>
      <div className={SECTION_CLASSES.PRIMARY + " py-20"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rate Shopping
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Automatically compare carrier rates to find the best shipping option for every package
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/demo" 
                className="btn-dark"
              >
                Request Demo
              </Link>
              <Link 
                href="/features" 
                className="btn-secondary"
              >
                All Features
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-6"}>
                Find the Best Shipping Rates Every Time
              </h2>
              <p className={TEXT_CLASSES.BODY + " mb-6"}>
                CloudLeap's rate shopping engine automatically compares rates across all your carriers to find the most cost-effective shipping option that meets your delivery requirements.
              </p>
              <p className={TEXT_CLASSES.BODY + " mb-6"}>
                Our platform considers all relevant factors including service level, transit time, dimensional weight, accessorial charges, and negotiated discounts to identify the true lowest cost option for each shipment.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CurrencyDollarIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Reduce Shipping Costs</h3>
                    <p className={TEXT_CLASSES.BODY}>Save 10-15% on average by automatically selecting the most cost-effective carrier for each shipment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowPathIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Real-time Rate Comparison</h3>
                    <p className={TEXT_CLASSES.BODY}>Compare rates in real-time across all your carriers with a single API call.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TruckIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Multi-Carrier Support</h3>
                    <p className={TEXT_CLASSES.BODY}>Compare rates across 100+ global and regional carriers in a single platform.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Rate Shopping Dashboard Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              How Rate Shopping Works
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              CloudLeap's intelligent rate shopping engine optimizes your shipping costs while meeting your delivery requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-500 font-bold text-xl">1</span>
              </div>
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Enter Shipment Details</h3>
              <p className={TEXT_CLASSES.BODY}>
                Provide package dimensions, weight, origin, destination, and service requirements.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-500 font-bold text-xl">2</span>
              </div>
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Compare Carrier Rates</h3>
              <p className={TEXT_CLASSES.BODY}>
                Our engine queries all available carriers and returns rates, transit times, and service levels.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-500 font-bold text-xl">3</span>
              </div>
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Select Optimal Carrier</h3>
              <p className={TEXT_CLASSES.BODY}>
                The system automatically selects the best option based on your business rules and priorities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Key Rate Shopping Features
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              CloudLeap provides comprehensive rate shopping capabilities to optimize your shipping costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <ChartBarIcon className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Business Rules Engine</h3>
              <p className={TEXT_CLASSES.BODY}>
                Create custom rules to automatically select carriers based on your specific business requirements.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <CurrencyDollarIcon className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Contract Rate Management</h3>
              <p className={TEXT_CLASSES.BODY}>
                Store and manage your negotiated carrier rates to ensure accurate rate shopping results.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <TruckIcon className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Multi-Carrier Support</h3>
              <p className={TEXT_CLASSES.BODY}>
                Compare rates across all major carriers including FedEx, UPS, USPS, DHL, and regional carriers.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <ArrowPathIcon className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Real-time Rate Updates</h3>
              <p className={TEXT_CLASSES.BODY}>
                Stay current with carrier rate changes and surcharges to ensure accurate cost comparisons.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <ChartBarIcon className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Analytics Dashboard</h3>
              <p className={TEXT_CLASSES.BODY}>
                Track savings and performance metrics to quantify the impact of rate shopping on your bottom line.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <CurrencyDollarIcon className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Accessorial Fee Calculation</h3>
              <p className={TEXT_CLASSES.BODY}>
                Account for all accessorial charges to determine the true total cost of each shipping option.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Success Story */}
      <div className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <CurrencyDollarIcon className="h-8 w-8 text-primary-500" />
                </div>
                <h2 className={TEXT_CLASSES.HEADING + " text-2xl font-bold"}>
                  Customer Success Story
                </h2>
              </div>
              
              <div className="mb-6">
                <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>
                  Tech Solutions Co. Saved 14% on Shipping Costs
                </h3>
                <p className={TEXT_CLASSES.BODY + " mb-4"}>
                  Tech Solutions Co., an e-commerce retailer shipping 5,000+ packages monthly, implemented CloudLeap's rate shopping to optimize their shipping costs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg text-center">
                    <div className="text-primary-500 text-2xl font-bold mb-1">14%</div>
                    <p className={TEXT_CLASSES.MUTED + " text-sm"}>Reduction in shipping costs</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg text-center">
                    <div className="text-primary-500 text-2xl font-bold mb-1">$84K</div>
                    <p className={TEXT_CLASSES.MUTED + " text-sm"}>Annual savings</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg text-center">
                    <div className="text-primary-500 text-2xl font-bold mb-1">100%</div>
                    <p className={TEXT_CLASSES.MUTED + " text-sm"}>Automated selection</p>
                  </div>
                </div>
                <p className={TEXT_CLASSES.BODY}>
                  "CloudLeap's rate shopping engine has been a game-changer for our business. We've reduced our shipping costs by 14% while maintaining our delivery promises to customers."
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">MC</span>
                  </div>
                </div>
                <div>
                  <p className={TEXT_CLASSES.HEADING + " font-semibold"}>Michael Chen</p>
                  <p className={TEXT_CLASSES.MUTED}>Supply Chain Manager, Tech Solutions Co.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={SECTION_CLASSES.PRIMARY + " py-16"}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to optimize your shipping costs?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a demo to see how CloudLeap's rate shopping can reduce your shipping costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/demo" 
              className="btn-dark"
            >
              Request Demo
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 