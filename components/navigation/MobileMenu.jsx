import React, { useState } from 'react';
import Link from 'next/link';
import { XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const menuItems = [
  {
    name: 'Product',
    href: '/product',
    submenu: [
      { 
        name: 'Features',
        href: '/features',
        subItems: [
          { name: 'Shipping Automation', href: '/features/shipping-automation' },
          { name: 'Rate Shopping', href: '/features/rate-shopping' },
          { name: 'Invoice Audit', href: '/features/invoice-audit' },
          { name: 'Export Filing', href: '/features/export-filing' },
          { name: 'DG Shipping', href: '/features/dg-shipping' },
          { name: 'Address Validation', href: '/features/address-validation' },
          { name: 'Tracking', href: '/features/tracking' }
        ]
      },
      {
        name: 'Platforms',
        href: '/integrations',
        subItems: [
          { name: 'E-commerce Platforms', href: '/integrations/ecommerce' },
          { name: 'Marketplaces', href: '/integrations/marketplaces' },
          { name: 'ERP Systems', href: '/integrations/erp' },
          { name: 'API & Connectors', href: '/connectors' }
        ]
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    submenu: [
      { 
        name: 'Industries',
        href: '/solutions/industries',
        subItems: [
          { name: 'E-commerce', href: '/solutions/ecommerce' },
          { name: 'Retail', href: '/solutions/retail' },
          { name: 'Manufacturing', href: '/solutions/manufacturing' },
          { name: 'Healthcare', href: '/solutions/healthcare' },
          { name: 'Logistics', href: '/solutions/logistics' },
          { name: 'Enterprise', href: '/solutions/enterprise' }
        ]
      },
      { 
        name: 'Business Needs',
        href: '/solutions/business',
        subItems: [
          { name: 'International Shipping', href: '/solutions/international' },
          { name: 'Multi-carrier Shipping', href: '/solutions/multi-carrier' },
          { name: 'Supply Chain Visibility', href: '/solutions/supply-chain' },
          { name: 'Customer Experience', href: '/solutions/customer-experience' }
        ]
      }
    ]
  },
  {
    name: 'Integrations',
    href: '/integrations',
    submenu: [
      { 
        name: 'ERP & WMS',
        href: '/integrations/erp-wms',
        subItems: [
          { name: 'SAP', href: '/integrations/sap' },
          { name: 'Oracle', href: '/integrations/oracle' },
          { name: 'Microsoft Dynamics', href: '/integrations/dynamics' },
          { name: 'Infor M3', href: '/integrations/infor-m3' },
          { name: 'OTM', href: '/integrations/otm' },
          { name: 'NetSuite', href: '/integrations/netsuite' },
          { name: 'Manhattan WMS', href: '/integrations/manhattan' },
          { name: 'Blue Yonder WMS', href: '/integrations/blue-yonder' }
        ]
      },
      { 
        name: 'Connectors',
        href: '/integrations/connectors',
        subItems: [
          { name: 'Address Validators', href: '/integrations/address-validators' },
          { name: 'Printer Servers', href: '/integrations/printer-servers' },
          { name: 'Packing Solutions', href: '/integrations/packing' },
          { name: 'SSO Providers', href: '/integrations/sso' },
          { name: 'Email Services', href: '/integrations/email' },
          { name: 'ID Verification', href: '/integrations/id-verification' },
          { name: 'Payment Gateways', href: '/integrations/payment' }
        ]
      },
      { 
        name: 'E-commerce Platforms',
        href: '/integrations/ecommerce',
        subItems: [
          { name: 'Shopify', href: '/integrations/shopify' },
          { name: 'Magento', href: '/integrations/magento' },
          { name: 'WooCommerce', href: '/integrations/woocommerce' },
          { name: 'BigCommerce', href: '/integrations/bigcommerce' }
        ]
      },
      { 
        name: 'Marketplaces',
        href: '/integrations/marketplaces',
        subItems: [
          { name: 'Amazon', href: '/integrations/amazon' },
          { name: 'eBay', href: '/integrations/ebay' },
          { name: 'Walmart', href: '/integrations/walmart' }
        ]
      },
      { 
        name: 'Carriers',
        href: '/carriers',
        subItems: [
          { name: 'UPS', href: '/carriers/ups' },
          { name: 'FedEx', href: '/carriers/fedex' },
          { name: 'USPS', href: '/carriers/usps' },
          { name: 'DHL', href: '/carriers/dhl' },
          { name: 'Canada Post', href: '/carriers/canada-post' },
          { name: 'All Carriers', href: '/carriers' }
        ]
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    submenu: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support', redirect: true },
      { name: 'Knowledge Base', href: '/kb' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Events', href: '/events' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Partners', href: '/partners' },
      { name: 'Company', href: '/company' }
    ]
  }
];

export default function MobileMenu({ onClose }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openSubItems, setOpenSubItems] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
    setOpenSubItems(null);
  };

  const toggleSubItems = (name) => {
    setOpenSubItems(openSubItems === name ? null : name);
  };

  const handleClick = (item, onClose) => {
    if (item.redirect) {
      window.location.href = item.href;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-dark-900 overflow-y-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-2xl font-bold" onClick={onClose}>
            CloudLeap
          </Link>
          <button 
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={item.name} className="border-b border-gray-100 dark:border-dark-700 py-2">
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center justify-between w-full py-2 text-left text-gray-900 dark:text-white font-medium"
                    onClick={() => toggleSubmenu(index)}
                  >
                    {item.name}
                    <ChevronRightIcon 
                      className={`h-5 w-5 transition-transform ${openSubmenu === index ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  
                  {openSubmenu === index && (
                    <div className="mt-2 pl-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.name}>
                          {subItem.subItems ? (
                            <>
                              <button
                                className="flex items-center justify-between w-full py-2 text-left text-gray-700 dark:text-gray-300 hover:text-primary-500"
                                onClick={() => toggleSubItems(subItem.name)}
                              >
                                {subItem.name}
                                <ChevronRightIcon 
                                  className={`h-4 w-4 transition-transform ${openSubItems === subItem.name ? 'rotate-90' : ''}`} 
                                />
                              </button>
                              
                              {openSubItems === subItem.name && (
                                <div className="mt-1 pl-4 space-y-2">
                                  {subItem.subItems.map((nestedItem) => (
                                    <Link
                                      key={nestedItem.name}
                                      href={nestedItem.href}
                                      className="block py-1 text-gray-600 dark:text-gray-400 hover:text-primary-500"
                                      onClick={() => handleClick(nestedItem, onClose)}
                                    >
                                      {nestedItem.name}
                                      {nestedItem.redirect && <span className="ml-1 text-xs text-gray-500">(Redirect)</span>}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500"
                              onClick={() => handleClick(subItem, onClose)}
                            >
                              {subItem.name}
                              {subItem.redirect && <span className="ml-1 text-xs text-gray-500">(Redirect)</span>}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block py-2 text-gray-900 dark:text-white font-medium"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          <Link
            href="/login"
            className="block w-full text-center py-3 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white font-medium"
            onClick={onClose}
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="block w-full text-center py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium"
            onClick={onClose}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
} 