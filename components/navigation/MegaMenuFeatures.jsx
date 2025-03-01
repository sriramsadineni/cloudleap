import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  TruckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CubeIcon,
  ClockIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const featureCategories = [
  {
    id: 'core',
    name: 'Core Features',
    description: 'Essential shipping capabilities',
    icon: <CubeIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Shipping Automation',
        href: '/features/shipping-automation',
        description: 'Automate your shipping workflows',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'Rate Shopping',
        href: '/features/rate-shopping',
        description: 'Find the best carrier rates instantly',
        icon: <CurrencyDollarIcon className="h-5 w-5" />
      },
      {
        name: 'Invoice Audit',
        href: '/features/invoice-audit',
        description: 'Automatically verify carrier invoices',
        icon: <DocumentTextIcon className="h-5 w-5" />
      },
      {
        name: 'Address Validation',
        href: '/features/address-validation',
        description: 'Ensure delivery addresses are accurate',
        icon: <MapPinIcon className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced Features',
    description: 'Specialized shipping tools',
    icon: <CogIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Real-time Tracking',
        href: '/features/tracking',
        description: 'Monitor shipments in real-time',
        icon: <ClockIcon className="h-5 w-5" />
      },
      {
        name: 'Analytics & Reporting',
        href: '/features/analytics',
        description: 'Gain insights into shipping performance',
        icon: <ChartBarIcon className="h-5 w-5" />
      },
      {
        name: 'Mobile App',
        href: '/features/mobile',
        description: 'Manage shipping on the go',
        icon: <DevicePhoneMobileIcon className="h-5 w-5" />
      },
      {
        name: 'International Shipping',
        href: '/features/international',
        description: 'Ship globally with ease',
        icon: <GlobeAltIcon className="h-5 w-5" />
      },
      {
        name: 'Security & Compliance',
        href: '/features/security',
        description: 'Keep your shipping data secure',
        icon: <ShieldCheckIcon className="h-5 w-5" />,
        highlight: true
      }
    ]
  }
];

export default function MegaMenuFeatures({ onClose }) {
  const [activeCategory, setActiveCategory] = useState('core');
  const router = useRouter();
  
  const handleNavigation = (href, external = false) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
    if (onClose) onClose();
  };
  
  const activeItems = featureCategories.find(cat => cat.id === activeCategory)?.items || [];
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-6">
        {/* Left sidebar with categories */}
        <div className="col-span-3 bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
          <div className="space-y-1">
            {featureCategories.map((category) => (
              <button
                key={category.id}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition ${
                  activeCategory === category.id
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                    : 'hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`${
                  activeCategory === category.id
                    ? 'text-primary-500'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {category.icon}
                </div>
                <div>
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{category.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Right content area with items */}
        <div className="col-span-9 p-6">
          <div className="grid grid-cols-3 gap-4">
            {activeItems.map((item) => (
              <div 
                key={item.name}
                className="group cursor-pointer"
                onClick={() => handleNavigation(item.href)}
              >
                <div className={`flex items-start space-x-3 p-3 rounded-lg transition ${
                  item.highlight 
                    ? 'bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30' 
                    : 'hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}>
                  <div className={`${item.highlight ? 'text-primary-600' : 'text-primary-500'} mt-0.5`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className={`font-medium ${
                      item.highlight 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : 'group-hover:text-primary-500'
                    }`}>
                      {item.name}
                    </div>
                    <div className={`${TEXT_CLASSES.MUTED} text-sm`}>
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-600">
            <Link 
              href="/features"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              onClick={() => onClose && onClose()}
            >
              View all features
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 