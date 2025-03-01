import React from 'react';
import { 
  TruckIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <TruckIcon className="w-12 h-12 text-primary-500 dark:text-primary-400" />,
    title: 'Carrier Management',
    description: 'Manage all your carriers in one place with automated rate shopping and performance tracking.'
  },
  {
    icon: <CurrencyDollarIcon className="w-12 h-12 text-primary-500 dark:text-primary-400" />,
    title: 'Cost Optimization',
    description: 'Reduce shipping costs with automated rate shopping and invoice auditing.'
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-primary-500 dark:text-primary-400" />,
    title: 'Analytics & Reporting',
    description: 'Gain insights into your shipping operations with powerful analytics and customizable reports.'
  },
  {
    icon: <ClockIcon className="w-12 h-12 text-primary-500 dark:text-primary-400" />,
    title: 'Process Automation',
    description: 'Automate manual shipping tasks to save time and reduce errors.'
  }
];

const Features = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Logistics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            CloudLeap TMS provides everything you need to optimize your transportation management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-8 transition-transform hover:transform hover:scale-105">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 