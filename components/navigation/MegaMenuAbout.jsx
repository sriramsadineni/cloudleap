import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BookOpenIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  DocumentTextIcon,
  NewspaperIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  TruckIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const aboutCategories = [
  {
    id: 'resources',
    name: 'Resources',
    icon: <BookOpenIcon className="h-6 w-6" />,
    description: 'Learn more about CloudLeap',
    items: [
      {
        name: 'Blog',
        href: '/blog',
        icon: <NewspaperIcon className="h-5 w-5" />,
        description: 'Latest news and insights'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        icon: <DocumentTextIcon className="h-5 w-5" />,
        description: 'Customer success stories'
      },
      {
        name: 'Events',
        href: '/events',
        icon: <CalendarIcon className="h-5 w-5" />,
        description: 'Webinars and conferences'
      },
      {
        name: 'Knowledge Base',
        href: '/kb',
        icon: <AcademicCapIcon className="h-5 w-5" />,
        description: 'Guides and documentation'
      },
      {
        name: 'Support',
        href: 'https://support.cloudleap.com',
        icon: <QuestionMarkCircleIcon className="h-5 w-5" />,
        description: 'Get help with CloudLeap',
        external: true
      }
    ]
  },
  {
    id: 'partners',
    name: 'Partners',
    icon: <UserGroupIcon className="h-6 w-6" />,
    description: 'Join our partner ecosystem',
    items: [
      {
        name: 'Technology Partners',
        href: '/partners/integrations',
        icon: <UserGroupIcon className="h-5 w-5" />,
        description: 'Integration partners'
      },
      {
        name: 'Carrier Partners',
        href: '/partners/carriers',
        icon: <TruckIcon className="h-5 w-5" />,
        description: 'Shipping carrier partners'
      },
      {
        name: 'Become a Partner',
        href: '/partners/become-partner',
        icon: <ArrowRightIcon className="h-5 w-5" />,
        description: 'Join our partner program'
      }
    ]
  },
  {
    id: 'company',
    name: 'Company',
    icon: <BuildingOfficeIcon className="h-6 w-6" />,
    description: 'About CloudLeap',
    items: [
      {
        name: 'About Us',
        href: '/company',
        icon: <BuildingOfficeIcon className="h-5 w-5" />,
        description: 'Our story and mission'
      },
      {
        name: 'Careers',
        href: '/career',
        icon: <BriefcaseIcon className="h-5 w-5" />,
        description: 'Join our team'
      },
      {
        name: 'Contact',
        href: '/contact',
        icon: <ArrowRightIcon className="h-5 w-5" />,
        description: 'Get in touch with us'
      }
    ]
  }
];

export default function MegaMenuAbout({ onClose }) {
  const [activeCategory, setActiveCategory] = useState('resources');
  const router = useRouter();
  
  const handleNavigation = (href, external) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      router.push(href);
    }
    if (onClose) onClose();
  };
  
  const activeItems = aboutCategories.find(cat => cat.id === activeCategory)?.items || [];
  
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-xl overflow-hidden" style={{ width: 'max-content', maxWidth: '100%' }}>
      <div className="grid grid-cols-12">
        {/* Left sidebar with categories */}
        <div className="col-span-4 bg-gray-50 dark:bg-dark-700 p-4" >
          <div className="space-y-1">
            {aboutCategories.map((category) => (
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
        <div className="col-span-8 p-6">
          <div className="grid grid-cols-2 gap-4">
            {activeItems.map((item) => (
              <div 
                key={item.name}
                className="group cursor-pointer"
                onClick={() => handleNavigation(item.href, item.external)}
              >
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition">
                  <div className="text-primary-500 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className={`${TEXT_CLASSES.HEADING} font-medium group-hover:text-primary-500`}>
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
              href={`/${activeCategory}`}
              className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              onClick={() => onClose && onClose()}
            >
              View all {activeCategory}
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 