import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { 
  TruckIcon, 
  DocumentTextIcon, 
  ClockIcon, 
  CheckIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { SECTION_CLASSES, TEXT_CLASSES } from '../../utils/colors';

export default function ShippingAutomation() {
  return (
    <Layout>
      <div className={SECTION_CLASSES.PRIMARY + " py-20"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shipping Automation
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Streamline your shipping processes with intelligent automation that saves time and reduces errors
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
                Automate Your Shipping Workflow
              </h2>
              <p className={TEXT_CLASSES.BODY + " mb-6"}>
                CloudLeap's shipping automation eliminates manual tasks and streamlines your entire shipping process, from order processing to delivery confirmation.
              </p>
              <p className={TEXT_CLASSES.BODY + " mb-6"}>
                Our intelligent workflow engine automates carrier selection, label generation, customs documentation, and tracking updates, allowing your team to focus on higher-value activities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Save Time</h3>
                    <p className={TEXT_CLASSES.BODY}>Reduce manual processing time by up to 80% with automated shipping workflows.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DocumentTextIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Eliminate Errors</h3>
                    <p className={TEXT_CLASSES.BODY}>Minimize costly shipping mistakes with automated validation and error checking.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowPathIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold mb-1"}>Scale Operations</h3>
                    <p className={TEXT_CLASSES.BODY}>Handle increasing shipping volumes without adding headcount.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Shipping Automation Dashboard Image</p>
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
              Key Automation Features
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              CloudLeap provides comprehensive automation capabilities for your entire shipping process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <DocumentTextIcon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                  Document Generation
                </h3>
              </div>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Automatically generate shipping labels, BOLs, commercial invoices, and customs documentation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Multi-carrier label support</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Customs documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Batch processing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <TruckIcon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                  Carrier Selection
                </h3>
              </div>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Automatically select the optimal carrier and service level based on your business rules.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Rule-based routing</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Cost optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Service level matching</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                  Validation & Compliance
                </h3>
              </div>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Ensure accuracy and compliance with automated validation and error checking.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Address validation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Restricted party screening</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className={TEXT_CLASSES.BODY}>Hazmat compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Automated Shipping Workflow
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              See how CloudLeap automates your entire shipping process from order to delivery.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                      <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-400">Order Processing Illustration</span>
                      </div>
                    </div>
                    <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3">
                      <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Order Processing</h3>
                      <p className={TEXT_CLASSES.BODY}>
                        CloudLeap automatically imports orders from your e-commerce platform, ERP, or WMS.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-3">
                      <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Carrier Selection</h3>
                      <p className={TEXT_CLASSES.BODY}>
                        Based on your business rules, CloudLeap automatically selects the optimal carrier and service level.
                      </p>
                    </div>
                    <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3 md:order-1">
                      <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-400">Carrier Selection Illustration</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-1">
                      <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-400">Document Generation Illustration</span>
                      </div>
                    </div>
                    <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3">
                      <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Document Generation</h3>
                      <p className={TEXT_CLASSES.BODY}>
                        Shipping labels, BOLs, and customs documents are automatically generated and sent to your fulfillment team.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right order-2 md:order-3">
                      <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-2"}>Tracking & Notifications</h3>
                      <p className={TEXT_CLASSES.BODY}>
                        CloudLeap automatically tracks shipments and sends notifications to customers and internal teams.
                      </p>
                    </div>
                    <div className="md:mx-auto bg-primary-500 rounded-full h-10 w-10 flex items-center justify-center z-10 order-1 md:order-2">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="flex-1 md:pl-8 order-3 md:order-1">
                      <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 h-24 flex items-center justify-center">
                        <span className="text-gray-400">Tracking Illustration</span>
                      </div>
                    </div>
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
                  How Wholesale Distributors Automated Their Shipping
                </h2>
                
                <p className={TEXT_CLASSES.BODY + " mb-6"}>
                  Wholesale Distributors, a B2B supplier shipping 10,000+ packages monthly, implemented CloudLeap's shipping automation to streamline their operations.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg text-center">
                    <div className="text-primary-500 text-2xl font-bold mb-1">80%</div>
                    <p className={TEXT_CLASSES.MUTED + " text-sm"}>Reduction in processing time</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-700 p-4 rounded-lg text-center">
                    <div className="text-primary-500 text-2xl font-bold mb-1">99.8%</div>
                    <p className={TEXT_CLASSES.MUTED + " text-sm"}>Shipping accuracy</p>
                  </div>
                </div>
                
                <Link 
                  href="/case-studies/wholesale-distributors"
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
            Ready to automate your shipping processes?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a demo to see how CloudLeap's shipping automation can transform your logistics operations.
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