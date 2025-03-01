import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  TruckIcon, 
  CubeIcon, 
  ChartBarIcon, 
  CogIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const featureGroups = [
  {
    title: "Transportation Management",
    id: "transportation",
    description: "Streamline your transportation operations with powerful planning, execution, and optimization tools.",
    features: [
      {
        icon: <TruckIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
        title: "Carrier Management",
        description: "Manage your carrier network, contracts, and performance in one centralized system."
      },
      {
        icon: <CogIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
        title: "Shipment Planning",
        description: "Plan and optimize shipments with intelligent routing and consolidation."
      },
      {
        icon: <DocumentTextIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
        title: "Documentation",
        description: "Automatically generate and manage all shipping documentation."
      }
    ]
  },
  {
    title: "Warehouse Management",
    id: "warehouse",
    description: "Optimize your warehouse operations with comprehensive inventory and fulfillment capabilities.",
    features: [
      {
        icon: <CubeIcon className="w-6 h-6 text-blue-600" />,
        title: "Inventory Management",
        description: "Maintain accurate inventory levels with real-time tracking and automated replenishment."
      },
      {
        icon: <DocumentTextIcon className="w-6 h-6 text-blue-600" />,
        title: "Order Fulfillment",
        description: "Streamline picking, packing, and shipping processes to improve efficiency."
      },
      {
        icon: <ShieldCheckIcon className="w-6 h-6 text-blue-600" />,
        title: "Quality Control",
        description: "Implement quality checks throughout the fulfillment process to ensure accuracy."
      },
      {
        icon: <UserGroupIcon className="w-6 h-6 text-blue-600" />,
        title: "Labor Management",
        description: "Optimize workforce allocation and track productivity metrics."
      }
    ]
  },
  {
    title: "Analytics & Reporting",
    id: "analytics",
    description: "Gain actionable insights with powerful analytics and customizable reports.",
    features: [
      {
        icon: <ChartBarIcon className="w-6 h-6 text-blue-600" />,
        title: "Performance Dashboards",
        description: "Monitor key performance indicators with customizable dashboards."
      },
      {
        icon: <CogIcon className="w-6 h-6 text-blue-600" />,
        title: "Custom Reports",
        description: "Create and schedule custom reports to meet your specific business needs."
      },
      {
        icon: <ClockIcon className="w-6 h-6 text-blue-600" />,
        title: "Predictive Analytics",
        description: "Leverage AI-powered analytics to forecast demand and identify optimization opportunities."
      },
      {
        icon: <CurrencyDollarIcon className="w-6 h-6 text-blue-600" />,
        title: "Cost Analysis",
        description: "Analyze transportation and warehouse costs to identify savings opportunities."
      }
    ]
  }
];

export default function Features() {
  return (
    <Layout>
      <div className="bg-primary-600 dark:bg-primary-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            CloudLeap TMS Features
          </h1>
          <p className="text-xl text-blue-100 text-center mt-4 max-w-3xl mx-auto">
            Powerful tools to optimize your entire transportation management process
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {featureGroups.map((group, index) => (
          <div key={group.id} id={group.id}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{group.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{group.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {index < featureGroups.length - 1 && (
              <div className="border-b border-gray-200 dark:border-gray-700 my-16"></div>
            )}
          </div>
        ))}
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Ready to see CloudLeap in action?</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Schedule a personalized demo to see how CloudLeap TMS can transform your logistics operations.
            </p>
          </div>
          <div className="flex justify-center">
            <a 
              href="/demo" 
              className="bg-cta-500 hover:bg-cta-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 