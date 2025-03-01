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
  CubeIcon,
  GlobeAltIcon,
  ServerIcon,
  CogIcon,
  LockClosedIcon,
  EnvelopeIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const integrationCategories = [
  {
    id: 'erp',
    name: 'ERP & WMS',
    description: 'Enterprise systems',
    icon: <ServerIcon className="h-5 w-5" />,
    items: [
      {
        name: 'SAP',
        href: '/integrations/sap',
        description: 'Connect with SAP ERP systems',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'Oracle',
        href: '/integrations/oracle',
        description: 'Integrate with Oracle ERP Cloud',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'Microsoft Dynamics',
        href: '/integrations/dynamics',
        description: 'Connect with Dynamics 365',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'Infor M3',
        href: '/integrations/infor-m3',
        description: 'Integrate with Infor M3',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'OTM',
        href: '/integrations/otm',
        description: 'Oracle Transportation Management',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'NetSuite',
        href: '/integrations/netsuite',
        description: 'Connect with Oracle NetSuite',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'Manhattan WMS',
        href: '/integrations/manhattan',
        description: 'Integrate with Manhattan WMS',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'Blue Yonder WMS',
        href: '/integrations/blue-yonder',
        description: 'Connect with Blue Yonder WMS',
        icon: <CogIcon className="h-5 w-5" />
      },
      {
        name: 'All ERP & WMS',
        href: '/integrations/erp-wms',
        description: 'View all enterprise integrations',
        icon: <ArrowRightIcon className="h-5 w-5" />,
        highlight: true
      }
    ]
  },
  {
    id: 'connectors',
    name: 'Connectors',
    description: 'Third-party providers',
    icon: <ArrowsRightLeftIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Address Validators',
        href: '/integrations/address-validators',
        description: 'Verify shipping addresses',
        icon: <MapPinIcon className="h-5 w-5" />
      },
      {
        name: 'Printer Servers',
        href: '/integrations/printer-servers',
        description: 'Connect with label printers',
        icon: <PrinterIcon className="h-5 w-5" />
      },
      {
        name: 'Packing Solutions',
        href: '/integrations/packing',
        description: 'Optimize package dimensions',
        icon: <CubeIcon className="h-5 w-5" />
      },
      {
        name: 'SSO Providers',
        href: '/integrations/sso',
        description: 'Single sign-on authentication',
        icon: <LockClosedIcon className="h-5 w-5" />
      },
      {
        name: 'Email Services',
        href: '/integrations/email',
        description: 'Notification and alert systems',
        icon: <EnvelopeIcon className="h-5 w-5" />
      },
      {
        name: 'ID Verification',
        href: '/integrations/id-verification',
        description: 'Identity verification services',
        icon: <IdentificationIcon className="h-5 w-5" />
      },
      {
        name: 'Payment Gateways',
        href: '/integrations/payment',
        description: 'Process shipping payments',
        icon: <CreditCardIcon className="h-5 w-5" />
      },
      {
        name: 'All Connectors',
        href: '/integrations/connectors',
        description: 'View all third-party connectors',
        icon: <ArrowRightIcon className="h-5 w-5" />,
        highlight: true
      }
    ]
  },
  {
    id: 'carriers',
    name: 'Carriers',
    description: 'Shipping providers',
    icon: <TruckIcon className="h-5 w-5" />,
    items: [
      {
        name: 'UPS',
        href: '/carriers/ups',
        description: 'United Parcel Service integration',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'FedEx',
        href: '/carriers/fedex',
        description: 'FedEx shipping integration',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'USPS',
        href: '/carriers/usps',
        description: 'US Postal Service integration',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'DHL',
        href: '/carriers/dhl',
        description: 'DHL Express integration',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'Canada Post',
        href: '/carriers/canada-post',
        description: 'Canada Post integration',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'All Carriers',
        href: '/carriers',
        description: 'View all supported carriers',
        icon: <GlobeAltIcon className="h-5 w-5" />,
        highlight: true
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
  const [activeCategory, setActiveCategory] = useState('erp');
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
              href={
                activeCategory === 'erp' ? '/integrations/erp-wms' :
                activeCategory === 'carriers' ? '/carriers' : 
                `/integrations/${activeCategory}`
              }
              className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              onClick={() => onClose && onClose()}
            >
              {
                activeCategory === 'erp' ? 'View all ERP & WMS integrations' :
                activeCategory === 'carriers' ? 'View all carriers' : 
                `View all ${activeCategory}`
              }
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}