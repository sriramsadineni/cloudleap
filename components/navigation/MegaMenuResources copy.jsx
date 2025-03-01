import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  DocumentTextIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  TruckIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  NewspaperIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const resourceCategories = [
  {
    id: 'documentation',
    name: 'Documentation',
    description: 'Guides and references',
    icon: <DocumentTextIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Carriers',
        href: '/carriers',
        description: 'Supported shipping carriers',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'Support',
        href: '/support',
        description: 'Get help with our platform',
        icon: <QuestionMarkCircleIcon className="h-5 w-5" />,
        redirect: true
      },
      {
        name: 'Knowledge Base',
        href: '/kb',
        description: 'Find answers to common questions',
        icon: <BookOpenIcon className="h-5 w-5" />
      },
      {
        name: 'API Docs',
        href: '/api-docs',
        description: 'Technical API documentation',
        icon: <CodeBracketIcon className="h-5 w-5" />,
        redirect: true
      },
      {
        name: 'Product Docs',
        href: '/product-docs',
        description: 'Product documentation and guides',
        icon: <DocumentDuplicateIcon className="h-5 w-5" />,
        redirect: true
      },
      {
        name: 'Shipping API',
        href: '/shipping-api',
        description: 'Shipping API documentation',
        icon: <CodeBracketIcon className="h-5 w-5" />,
        redirect: true
      },
      {
        name: 'Rate API',
        href: '/rate-api',
        description: 'Rate API documentation',
        icon: <CodeBracketIcon className="h-5 w-5" />,
        redirect: true
      }
    ]
  },
  {
    id: 'resources',
    name: 'Resources',
    description: 'Learn and connect',
    icon: <NewspaperIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Events',
        href: '/events',
        description: 'Upcoming webinars and conferences',
        icon: <CalendarIcon className="h-5 w-5" />
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Industry insights and updates',
        icon: <NewspaperIcon className="h-5 w-5" />
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Customer success stories',
        icon: <DocumentDuplicateIcon className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'partners',
    name: 'Partners',
    description: 'Join our ecosystem',
    icon: <UserGroupIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Integrations',
        href: '/partners/integrations',
        description: 'Integration partners',
        icon: <CodeBracketIcon className="h-5 w-5" />
      },
      {
        name: 'Carriers',
        href: '/partners/carriers',
        description: 'Carrier partners',
        icon: <TruckIcon className="h-5 w-5" />
      },
      {
        name: 'Become a Partner',
        href: '/partners/become-partner',
        description: 'Join our partner program',
        icon: <UserGroupIcon className="h-5 w-5" />,
        highlight: true
      }
    ]
  },
  {
    id: 'company',
    name: 'Company',
    description: 'About us',
    icon: <BuildingOfficeIcon className="h-5 w-5" />,
    items: [
      {
        name: 'About Us',
        href: '/company',
        description: 'Our mission and values',
        icon: <BuildingOfficeIcon className="h-5 w-5" />
      },
      {
        name: 'Career',
        href: '/career',
        description: 'Join our team',
        icon: <BriefcaseIcon className="h-5 w-5" />
      },
      {
        name: 'Contact',
        href: '/contact',
        description: 'Get in touch with us',
        icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />
      }
    ]
  }
];

export default function MegaMenuResources({ onClose }) {
  const [activeCategory, setActiveCategory] = useState('documentation');
  const router = useRouter();
  
  const handleNavigation = (href, external = false, redirect = false) => {
    if (external) {
      window.open(href, '_blank');
    } else if (redirect) {
      window.location.href = href;
    } else {
      router.push(href);
    }
    if (onClose) onClose();
  };
  
  const activeItems = resourceCategories.find(cat => cat.id === activeCategory)?.items || [];
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-6">
        {/* Left sidebar with categories */}
        <div className="col-span-3 bg-gray-50 dark:bg-dark-700 p-4 rounded-lg">
          <div className="space-y-1">
            {resourceCategories.map((category) => (
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
                onClick={() => handleNavigation(item.href, false, item.redirect)}
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
                      {item.redirect && <span className="ml-1 text-xs">(Redirect)</span>}
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
                activeCategory === 'documentation' ? '/docs' : 
                activeCategory === 'resources' ? '/resources' :
                activeCategory === 'partners' ? '/partners' : '/company'
              }
              className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              onClick={() => onClose && onClose()}
            >
              {activeCategory === 'documentation' ? 'View all documentation' : 
               activeCategory === 'resources' ? 'View all resources' :
               activeCategory === 'partners' ? 'View all partners' : 'Learn more about us'}
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 