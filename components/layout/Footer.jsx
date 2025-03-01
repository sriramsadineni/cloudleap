import React from 'react';
import Link from 'next/link';
import { 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import { TEXT_CLASSES } from '../../utils/colors';

const footerNavigation = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Shipping Automation', href: '/features/shipping-automation' },
    { name: 'Rate Shopping', href: '/features/rate-shopping' },
    { name: 'Invoice Audit', href: '/features/invoice-audit' },
    { name: 'Integrations', href: '/integrations' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Events', href: '/events' },
    { name: 'API Documentation', href: 'https://api.cloudleap.com/docs', external: true },
    { name: 'Support', href: 'https://support.cloudleap.com', external: true },
  ],
  company: [
    { name: 'About Us', href: '/company' },
    { name: 'Careers', href: '/career' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/cloudleap',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/cloudleap',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/cloudleap',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer({ theme, toggleTheme }) {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-700">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="text-2xl font-bold text-primary-500">CloudLeap</div>
            <p className={TEXT_CLASSES.BODY + " max-w-xs"}>
              Modern transportation management system for businesses of all sizes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-primary-500 mr-2" />
                <a href="mailto:info@cloudleap.com" className={TEXT_CLASSES.BODY + " hover:text-primary-500"}>
                  info@cloudleap.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary-500 mr-2" />
                <a href="tel:+18005551234" className={TEXT_CLASSES.BODY + " hover:text-primary-500"}>
                  (800) 555-1234
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-primary-500 mr-2" />
                <span className={TEXT_CLASSES.BODY}>
                  Chicago, IL
                </span>
              </div>
            </div>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-primary-500" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className={TEXT_CLASSES.HEADING + " text-sm font-semibold"}>
                Product
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.product.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className={TEXT_CLASSES.BODY + " hover:text-primary-500"}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={TEXT_CLASSES.HEADING + " text-sm font-semibold"}>
                Resources
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className={TEXT_CLASSES.BODY + " hover:text-primary-500"}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={TEXT_CLASSES.HEADING + " text-sm font-semibold"}>
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className={TEXT_CLASSES.BODY + " hover:text-primary-500"}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-dark-700 pt-8">
          <div className="flex justify-between items-center">
            <p className={TEXT_CLASSES.MUTED + " text-sm"}>
              &copy; {new Date().getFullYear()} CloudLeap, Inc. All rights reserved.
            </p>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-500 dark:text-gray-400">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
              <button
                onClick={toggleTheme}
                className="rounded-md p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <MoonIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 