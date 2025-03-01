import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ComputerDesktopIcon,
  ArrowsRightLeftIcon,
  TruckIcon,
  DocumentTextIcon,
  PrinterIcon,
  NewspaperIcon,
  MapPinIcon,
  CreditCardIcon,
  PhoneIcon,
  ArrowRightIcon,
  UserGroupIcon,
  CubeIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const integrationCategories = [
  {
    id: 'platforms',
    name: 'Platforms',
    description: 'Connect with e-commerce and marketplace platforms',
    icon: <ComputerDesktopIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Integrations',
        href: '/integrations',
        description: 'Browse all available integrations',
        icon: <ArrowsRightLeftIcon className="h-5 w-5" />
      },
      {
        name: 'Connectors',
        href: '/connectors',
        description: 'Pre-built connections to popular systems',
        icon: <CubeIcon className="h-5 w-5" />
      },
      {
        name: 'API',
        href: '/docs/api',
        description: 'Build custom integrations with our API',
        icon: <DocumentTextIcon className="h-5 w-5" />
      },
      {
        name: 'Specialized Solutions',
        href: '/solutions/specialized',
        description: 'Advanced tools for complex logistics needs',
        icon: <PrinterIcon className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'partners',
    name: 'Partners',
    description: 'Join our partner ecosystem',
    icon: <UserGroupIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Partner Program',
        href: '/partners',
        description: 'Overview of our partner ecosystem',
        icon: <UserGroupIcon className="h-5 w-5" />
      },
      {
        name: 'Technology Partners',
        href: '/partners/technology',
        description: 'Build integrations with CloudLeap',
        icon: <ComputerDesktopIcon className="h-5 w-5" />
      },
      {
        name: 'Solution Partners',
        href: '/partners/solutions',
        description: 'Resell and implement CloudLeap',
        icon: <CubeIcon className="h-5 w-5" />
      },
      {
        name: 'Carrier Partners',
        href: '/carriers',
        description: 'Connect your shipping services',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'Become a Partner',
        href: '/partners/apply',
        description: 'Apply to join our partner program',
        icon: <ArrowRightIcon className="h-5 w-5" />,
        highlight: true
      }
    ]
  }
];

export default function MegaMenuIntegrations({ onClose }) {
  const [activeCategory, setActiveCategory] = useState('platforms');
  const router = useRouter();
  
  const handleNavigation = (href, external = false) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
    if (onClose) onClose();
  };
  
  const activeItems = integrationCategories.find(cat => cat.id === activeCategory)?.items || [];
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-6">
        {/* Left sidebar with categories */}
        <div className="col-span-3 bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
          <div className="space-y-1">
            {integrationCategories.map((category) => (
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
              href={activeCategory === 'features' ? '/features' : '/solutions'}
              className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              onClick={() => onClose && onClose()}
            >
              {activeCategory === 'features' ? 'View all features' : 'View all solutions'}
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}