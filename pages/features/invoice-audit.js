import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { 
  CurrencyDollarIcon, 
  DocumentMagnifyingGlassIcon, 
  ClockIcon, 
  CheckIcon,
  ArrowPathIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { SECTION_CLASSES, TEXT_CLASSES } from '../../utils/colors';

export default function InvoiceAudit() {
  return (
    <Layout>
      <div className={SECTION_CLASSES.PRIMARY + " py-20"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Invoice Audit
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Automatically audit carrier invoices to identify errors and recover overcharges
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
                Stop Overpaying for Shipping
              </h2>
              <p className={TEXT_CLASSES.BODY + " mb-6"}>
                CloudLeap's invoice audit solution automatically reviews every carrier invoice to identify errors, duplicate charges, and service failures that result in overcharges.
              </p>
              <p className={TEXT_CLASSES.BODY + " mb-6"}>
                Our intelligent audit engine compares invoiced amounts against contracted rates, validates accessorial charges, and identifies service failures to ensure you only pay for the services you received.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CurrencyDollarIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Recover Overcharges</h3>
                    <p className={TEXT_CLASSES.BODY}>Identify and recover 2-8% of your shipping spend through automated invoice auditing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DocumentMagnifyingGlassIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Comprehensive Audit</h3>
                    <p className={TEXT_CLASSES.BODY}>Audit 100% of your invoices against 50+ potential error types.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowPathIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Automated Recovery</h3>
                    <p className={TEXT_CLASSES.BODY}>Automatically file claims with carriers and track recovery status.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Invoice Audit Dashboard Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Key Audit Features
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              CloudLeap provides comprehensive invoice auditing capabilities to recover overcharges and improve carrier compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <DocumentMagnifyingGlassIcon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                  Rate Verification
                </h3>
              </div>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Automatically verify that invoiced rates match your contracted rates and discounts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Base rate validation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Discount verification</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Dimensional weight checks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <ClockIcon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                  Service Failure Detection
                </h3>
              </div>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Identify late deliveries and service failures that qualify for money-back guarantees.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Delivery time monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Service guarantee tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Automated refund claims</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <ChartBarIcon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                  Reporting & Analytics
                </h3>
              </div>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Gain insights into carrier performance and invoice accuracy with detailed reporting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Carrier error trends</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Recovery metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Custom dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              How Invoice Audit Works
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              CloudLeap's automated invoice audit process ensures you only pay for the services you received.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-dark-700"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                    <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Invoice Import</h3>
                    <p className={TEXT_CLASSES.BODY}>
                      CloudLeap automatically imports carrier invoices via EDI, API, or email.
                    </p>
                  </div>
                  <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                      <span className="text-gray-400">Invoice Import Illustration</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-3">
                    <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                      <span className="text-gray-400">Audit Process Illustration</span>
                    </div>
                  </div>
                  <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3 md:order-1">
                    <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Automated Audit</h3>
                    <p className={TEXT_CLASSES.BODY}>
                      Our system compares invoiced amounts against contracted rates and identifies discrepancies.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                    <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Dispute Management</h3>
                    <p className={TEXT_CLASSES.BODY}>
                      CloudLeap automatically generates and submits claims for identified overcharges.
                    </p>
                  </div>
                  <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                      <span className="text-gray-400">Dispute Management Illustration</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-3">
                    <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                      <span className="text-gray-400">Recovery Tracking Illustration</span>
                    </div>
                  </div>
                  <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-3 md:order-1">
                    <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Recovery Tracking</h3>
                    <p className={TEXT_CLASSES.BODY}>
                      Track the status of all claims and monitor recovery amounts in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Success Story */}
      <div className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-500 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Customer Success Story
                </div>
                
                <h2 className={TEXT_CLASSES.HEADING + " text-2xl font-bold mb-4"}>
                  How National Retailer Saved $1.2M in Shipping Costs
                </h2>
                
                <p className={TEXT_CLASSES.BODY + " mb-6"}>
                  A national retailer with over $50M in annual shipping spend implemented CloudLeap's invoice audit solution to identify and recover carrier overcharges.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg text-center">
                    <div className="text-primary-500 text-2xl font-bold mb-1">$1.2M</div>
                    <p className={TEXT_CLASSES.MUTED + " text-sm"}>Annual savings</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg text-center">
                    <div className="text-primary-500 text-2xl font-bold mb-1">2.4%</div>
                    <p className={TEXT_CLASSES.MUTED + " text-sm"}>Of total shipping spend</p>
                  </div>
                </div>
                
                <Link 
                  href="/case-studies/national-retailer"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium inline-flex items-center"
                >
                  Read the Full Story
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-center p-8">
                  <p>Success Story Image</p>
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
            Ready to stop overpaying for shipping?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a demo to see how CloudLeap's invoice audit solution can help you recover shipping overcharges.
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