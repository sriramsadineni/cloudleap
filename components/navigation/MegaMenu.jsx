import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CubeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ComputerDesktopIcon,
  ArrowsRightLeftIcon,
  PrinterIcon,
  NewspaperIcon,
  CreditCardIcon,
  PhoneIcon,
  LightBulbIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  HomeIcon,
  CogIcon,
  ShoppingBagIcon,
  HeartIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';
import MegaMenuResources from './MegaMenuResources';
import MegaMenuIntegrations from './MegaMenuIntegrations';
import MegaMenuAbout from './MegaMenuAbout';

const productCategories = [
  {
    id: 'features',
    name: 'Features',
    icon: <CubeIcon className="h-6 w-6" />,
    description: 'Core capabilities of our TMS platform',
    items: [
      {
        name: 'Shipping Automation',
        href: '/features/shipping-automation',
        icon: <TruckIcon className="h-5 w-5" />,
        description: 'Automate your shipping workflows'
      },
      {
        name: 'Rate Shopping',
        href: '/features/rate-shopping',
        icon: <CurrencyDollarIcon className="h-5 w-5" />,
        description: 'Find the best carrier rates instantly'
      },
      {
        name: 'Invoice Audit',
        href: '/features/invoice-audit',
        icon: <DocumentTextIcon className="h-5 w-5" />,
        description: 'Automatically catch billing errors'
      },
      {
        name: 'Export Filing',
        href: '/features/export-filing',
        icon: <DocumentTextIcon className="h-5 w-5" />,
        description: 'Streamline international shipping'
      },
      {
        name: 'DG Shipping',
        href: '/features/dg-shipping',
        icon: <ShieldCheckIcon className="h-5 w-5" />,
        description: 'Ship dangerous goods safely and compliantly'
      },
      {
        name: 'Address Validation',
        href: '/features/address-validation',
        icon: <MapPinIcon className="h-5 w-5" />,
        description: 'Ensure accurate delivery addresses'
      },
      {
        name: 'Tracking',
        href: '/features/tracking',
        icon: <ChartBarIcon className="h-5 w-5" />,
        description: 'Real-time visibility into shipments'
      }
    ]
  },
  {
    id: 'solutions',
    name: 'Solutions',
    icon: <LightBulbIcon className="h-6 w-6" />,
    description: 'Industry-specific solutions',
    items: [
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        icon: <BuildingOfficeIcon className="h-5 w-5" />,
        description: 'For large organizations'
      },
      {
        name: 'Mid-Market',
        href: '/solutions/mid-market',
        icon: <BuildingStorefrontIcon className="h-5 w-5" />,
        description: 'For growing businesses'
      },
      {
        name: 'Small Business',
        href: '/solutions/small-business',
        icon: <HomeIcon className="h-5 w-5" />,
        description: 'For small operations'
      },
      {
        name: 'Manufacturing',
        href: '/solutions/manufacturing',
        icon: <CogIcon className="h-5 w-5" />,
        description: 'For manufacturing companies'
      },
      {
        name: 'Retail',
        href: '/solutions/retail',
        icon: <ShoppingBagIcon className="h-5 w-5" />,
        description: 'For retail businesses'
      },
      {
        name: 'Healthcare',
        href: '/solutions/healthcare',
        icon: <HeartIcon className="h-5 w-5" />,
        description: 'For healthcare organizations'
      }
    ]
  }
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();
  
  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const handleNavigation = (href) => {
    router.push(href);
    closeMenu();
  };
  
  const activeItems = productCategories.find(cat => cat.id === activeMenu)?.items || [];
  
  return (
    <>
      <div className="flex items-center space-x-8">
        {/* Product */}
        <div className="relative">
          <button
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            onClick={() => toggleMenu('product')}
          >
            Product
            <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeMenu === 'product' ? 'rotate-180' : ''}`} />
          </button>
          
          {activeMenu === 'product' && (
            <MegaMenuIntegrations onClose={closeMenu} />
          )}
        </div>
        
        {/* Solutions */}
        <Link 
          href="/solutions" 
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
          onClick={closeMenu}
        >
          Solutions
        </Link>
        
        {/* Resources */}
        <div className="relative">
          <button
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            onClick={() => toggleMenu('resources')}
          >
            Resources
            <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
          </button>
          
          {activeMenu === 'resources' && (
            <MegaMenuResources onClose={closeMenu} />
          )}
        </div>
        
        {/* Company */}
        <div className="relative">
          <button
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
            onClick={() => toggleMenu('company')}
          >
            Company
            <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
          </button>
          
          {activeMenu === 'company' && (
            <MegaMenuAbout onClose={closeMenu} />
          )}
        </div>
      </div>
      
      {/* Backdrop for closing menus when clicking outside */}
      {activeMenu && (
        <div 
          className="fixed inset-0 z-30 bg-transparent" 
          onClick={closeMenu}
        />
      )}
    </>
  );
} 