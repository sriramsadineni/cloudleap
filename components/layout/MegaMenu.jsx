import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const menuItems = [
  {
    title: 'Product',
    path: '/product',
    submenu: true,
    submenuType: 'tabs',
    tabs: [
      {
        title: 'Features',
        items: [
          { title: 'Shipping Automation', path: '/features/shipping-automation' },
          { title: 'Rate Shopping', path: '/features/rate-shopping' },
          { title: 'Invoice Audit', path: '/features/invoice-audit' },
          { title: 'Export Filing', path: '/features/export-filing' },
          { title: 'DG Shipping', path: '/features/dg-shipping' },
          { title: 'Address Validation', path: '/features/address-validation' },
          { title: 'Tracking', path: '/features/tracking' },
        ]
      },
      {
        title: 'Integrations',
        items: [
          { title: 'Infor m3', path: '/integrations/infor-m3' },
          { title: 'OTM', path: '/integrations/otm' },
          { title: 'SAP', path: '/integrations/sap' },
        ]
      }
    ]
  },
  {
    title: 'Resources',
    path: '/resources',
    submenu: true,
    submenuType: 'columns',
    columns: [
      {
        title: 'Resources',
        items: [
          { title: 'Carriers', path: '/resources/carriers' },
          { title: 'Support', path: 'https://support.cloudleap.com', external: true },
          { 
            title: 'KB', 
            path: '/resources/kb',
            submenu: true,
            items: [
              { title: 'API Docs', path: 'https://api.cloudleap.com/docs', external: true },
              { title: 'Product Docs', path: 'https://docs.cloudleap.com', external: true },
              { title: 'Shipping API', path: 'https://api.cloudleap.com/shipping', external: true },
              { title: 'Rate API', path: 'https://api.cloudleap.com/rates', external: true },
            ]
          },
          { title: 'Events', path: '/events' },
          { title: 'Blog', path: '/blog' },
          { title: 'Case Studies', path: '/case-studies' },
        ]
      },
      {
        title: 'Partners',
        items: [
          { title: 'Integrations', path: '/partners/integrations' },
          { title: 'Carriers', path: '/partners/carriers' },
          { title: 'Become a partner', path: '/partners/become-partner' },
        ]
      },
      {
        title: 'Company',
        items: [
          { title: 'Career', path: '/career' },
          { title: 'About Us', path: '/company' },
        ]
      }
    ]
  },
  {
    title: 'Pricing',
    path: '/pricing',
    submenu: false
  },
  {
    title: 'Contact',
    path: '/contact',
    submenu: false
  }
];

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const menuRef = useRef(null);
  const router = useRouter();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setActiveMenu(null);
  }, [router.asPath]);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setActiveTab(0); // Reset active tab when opening a new menu
  };

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  return (
    <nav className="hidden md:flex space-x-1" ref={menuRef}>
      {menuItems.map((item, index) => (
        <div key={index} className="relative">
          {item.submenu ? (
            <>
              <button 
                className={`flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${isActive(item.path) ? 'text-primary-500 dark:text-primary-400' : ''}`}
                onClick={() => toggleMenu(index)}
                aria-expanded={activeMenu === index}
              >
                {item.title}
                <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${activeMenu === index ? 'transform rotate-180' : ''}`} />
              </button>
              
              {activeMenu === index && (
                <div className="absolute left-0 mt-2 w-screen max-w-md bg-white dark:bg-dark-800 rounded-md shadow-lg dark:shadow-dark-900/70 z-50 overflow-hidden">
                  <div className="p-5">
                    {/* Different layout based on menu type */}
                    {item.submenuType === 'tabs' && (
                      <div>
                        {/* Tabs navigation */}
                        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-5">
                          {item.tabs.map((tab, tabIndex) => (
                            <button
                              key={tabIndex}
                              className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                                activeTab === tabIndex
                                  ? 'border-b-2 border-primary-500 text-primary-500 dark:text-primary-400'
                                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                              }`}
                              onClick={() => setActiveTab(tabIndex)}
                            >
                              {tab.title}
                            </button>
                          ))}
                        </div>
                        
                        {/* Tab content */}
                        <div>
                          <ul className="space-y-3">
                            {item.tabs[activeTab].items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                {subItem.external ? (
                                  <a 
                                    href={subItem.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 flex items-center"
                                  >
                                    {subItem.title}
                                    <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
                                  </a>
                                ) : (
                                  <Link 
                                    href={subItem.path}
                                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 block"
                                  >
                                    {subItem.title}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {item.submenuType === 'columns' && (
                      <div className="grid grid-cols-3 gap-8">
                        {item.columns.map((column, colIndex) => (
                          <div key={colIndex}>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                              {column.title}
                            </h3>
                            <ul className="space-y-3">
                              {column.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  {subItem.submenu ? (
                                    <div>
                                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{subItem.title}</p>
                                      <ul className="pl-4 space-y-2">
                                        {subItem.items.map((nestedItem, nestedIndex) => (
                                          <li key={nestedIndex}>
                                            {nestedItem.external ? (
                                              <a 
                                                href={nestedItem.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 flex items-center text-sm"
                                              >
                                                {nestedItem.title}
                                                <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
                                              </a>
                                            ) : (
                                              <Link 
                                                href={nestedItem.path}
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 block text-sm"
                                              >
                                                {nestedItem.title}
                                              </Link>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ) : (
                                    <>
                                      {subItem.external ? (
                                        <a 
                                          href={subItem.path}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 flex items-center"
                                        >
                                          {subItem.title}
                                          <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
                                        </a>
                                      ) : (
                                        <Link 
                                          href={subItem.path}
                                          className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 block"
                                        >
                                          {subItem.title}
                                        </Link>
                                      )}
                                    </>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link 
              href={item.path}
              className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive(item.path) ? 'text-primary-500 dark:text-primary-400' : ''}`}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MegaMenu; 