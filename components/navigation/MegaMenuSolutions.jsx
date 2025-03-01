import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CubeIcon,
  BeakerIcon,
  TruckIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const solutionCategories = [
  {
    id: 'industries',
    name: 'Industries',
    description: 'Solutions by industry',
    icon: <BuildingOfficeIcon className="h-5 w-5" />,
    items: [
      {
        name: 'E-commerce',
        href: '/solutions/ecommerce',
        description: 'For online retailers and marketplaces',
        icon: <ShoppingCartIcon className="h-5 w-5" />
      },
      {
        name: 'Retail',
        href: '/solutions/retail',
        description: 'For brick-and-mortar retailers',
        icon: <BuildingStorefrontIcon className="h-5 w-5" />
      },
      {
        name: 'Manufacturing',
        href: '/solutions/manufacturing',
        description: 'For manufacturers and distributors',
        icon: <CubeIcon className="h-5 w-5" />
      },
      {
        name: 'Healthcare',
        href: '/solutions/healthcare',
        description: 'For healthcare providers and suppliers',
        icon: <BeakerIcon className="h-5 w-5" />
      },
      {
        name: 'Logistics',
        href: '/solutions/logistics',
        description: 'For 3PLs and logistics providers',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        description: 'For large organizations',
        icon: <BuildingOfficeIcon className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Needs',
    description: 'Solutions by use case',
    icon: <BriefcaseIcon className="h-5 w-5" />,
    items: [
      {
        name: 'International Shipping',
        href: '/solutions/international',
        description: 'Ship globally with ease',
        icon: <GlobeAltIcon className="h-5 w-5" />
      },
      {
        name: 'Multi-carrier Shipping',
        href: '/solutions/multi-carrier',
        description: 'Manage multiple carriers efficiently',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'Supply Chain Visibility',
        href: '/solutions/supply-chain',
        description: 'End-to-end visibility',
        icon: <CubeIcon className="h-5 w-5" />
      },
      {
        name: 'Customer Experience',
        href: '/solutions/customer-experience',
        description: 'Enhance delivery experience',
        icon: <UserGroupIcon className="h-5 w-5" />
      }
    ]
  }
];

export default function MegaMenuSolutions({ onClose }) {
  const [activeCategory, setActiveCategory] = useState('industries');
  const router = useRouter();
  
  const handleNavigation = (href, external = false) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
    if (onClose) onClose();
  };
  
  const activeItems = solutionCategories.find(cat => cat.id === activeCategory)?.items || [];
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-6">
        {/* Left sidebar with categories */}
        <div className="col-span-3 bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
          <div className="space-y-1">
            {solutionCategories.map((category) => (
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
              href="/solutions"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              onClick={() => onClose && onClose()}
            >
              View all solutions
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 