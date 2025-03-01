import React from 'react';
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
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  VideoCameraIcon,
  PresentationChartLineIcon,
  BriefcaseIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const resourceCategories = [
  {
    id: 'documentation',
    name: 'Documentation',
    description: 'Technical resources',
    icon: <DocumentTextIcon className="h-5 w-5" />,
    items: [
      {
        name: 'API Documentation',
        href: '/docs/api',
        description: 'Integrate with our API',
        redirect: true,
        icon: <CodeBracketIcon className="h-5 w-5" />
      },
      {
        name: 'Product Guide',
        href: '/docs/product',
        description: 'Learn how to use CloudLeap',
        redirect: true,
        icon: <BookOpenIcon className="h-5 w-5" />
      },
      {
        name: 'Changelogs',
        href: '/docs/changelog',
        description: 'Latest updates and improvements',
        redirect: true,
        icon: <ArrowPathIcon className="h-5 w-5" />
      },
      {
        name: 'Implementation Guide',
        href: '/docs/implementation',
        description: 'Best practices for setup',
        icon: <ClipboardDocumentListIcon className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'support',
    name: 'Support',
    description: 'Help resources',
    icon: <QuestionMarkCircleIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Knowledge Base',
        href: '/kb',
        description: 'Find answers to common questions',
        icon: <BookOpenIcon className="h-5 w-5" />
      },
      {
        name: 'Support Center',
        href: '/support',
        description: 'Contact our support team',
        redirect: true,
        icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />
      },
      {
        name: 'FAQs',
        href: '/faqs',
        description: 'Frequently asked questions',
        icon: <QuestionMarkCircleIcon className="h-5 w-5" />
      },
      {
        name: 'Status Page',
        href: '/status',
        description: 'System status and incidents',
        redirect: true,
        icon: <ExclamationTriangleIcon className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'learning',
    name: 'Learning',
    description: 'Educational resources',
    icon: <AcademicCapIcon className="h-5 w-5" />,
    items: [
      {
        name: 'Blog',
        href: '/blog',
        description: 'Industry insights and updates',
        icon: <NewspaperIcon className="h-5 w-5" />
      },
      {
        name: 'Webinars',
        href: '/webinars',
        description: 'Live and on-demand sessions',
        icon: <PresentationChartLineIcon className="h-5 w-5" />
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Customer success stories',
        icon: <DocumentTextIcon className="h-5 w-5" />
      },
      {
        name: 'Video Tutorials',
        href: '/tutorials',
        description: 'Step-by-step visual guides',
        icon: <VideoCameraIcon className="h-5 w-5" />
      }
    ]
  },
  {
    id: 'company',
    name: 'Company',
    description: 'About CloudLeap',
    icon: <BuildingOfficeIcon className="h-5 w-5" />,
    items: [
      {
        name: 'About Us',
        href: '/company',
        description: 'Our mission and team',
        icon: <BuildingOfficeIcon className="h-5 w-5" />
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <BriefcaseIcon className="h-5 w-5" />
      },
      {
        name: 'Events',
        href: '/events',
        description: 'Upcoming industry events',
        icon: <CalendarIcon className="h-5 w-5" />
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Partner ecosystem',
        icon: <UserGroupIcon className="h-5 w-5" />
      }
    ]
  }
];

export default function MegaMenuResources({ onClose }) {
  const router = useRouter();
  
  const handleNavigation = (href, redirect = false) => {
    if (redirect) {
      window.location.href = href;
    } else {
      router.push(href);
    }
    if (onClose) onClose();
  };
  
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-8">
        {resourceCategories.map((category) => (
          <div key={category.id}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-dark-700">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div 
                  key={item.name}
                  className="group cursor-pointer"
                  onClick={() => handleNavigation(item.href, item.redirect)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-primary-500 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-500">
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
            <div className="mt-6">
              <Link 
                href={`/${category.id === 'documentation' ? 'docs' : 
                       category.id === 'support' ? 'support' :
                       category.id === 'learning' ? 'resources' :
                       'company'}`}
                className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                onClick={() => onClose && onClose()}
              >
                {category.id === 'documentation' ? 'View all documentation' : 
                 category.id === 'support' ? 'Visit support center' :
                 category.id === 'learning' ? 'View all resources' :
                 'Learn more about us'}
                <ArrowRightIcon className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 