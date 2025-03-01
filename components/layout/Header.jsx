import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import MegaMenuProduct from '../navigation/MegaMenuProduct';
import MegaMenuResources from '../navigation/MegaMenuResources';
import MegaMenuSolutions from '../navigation/MegaMenuSolutions';
import MegaMenuIntegrations from '../navigation/MegaMenuIntegrations';
import MobileMenu from '../navigation/MobileMenu';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  
  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setActiveMenu(null);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      isScrolled ? 'bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">CloudLeap</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {/* Product */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  onClick={() => toggleMenu('product')}
                >
                  Product
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeMenu === 'product' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Solutions */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  onClick={() => toggleMenu('solutions')}
                >
                  Solutions
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Integrations */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  onClick={() => toggleMenu('integrations')}
                >
                  Integrations
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeMenu === 'integrations' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Resources */}
              <div className="relative group">
                <button
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                  onClick={() => toggleMenu('resources')}
                >
                  Resources
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                Log In
              </Link>
              <Link 
                href="/signup" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Request Demo
              </Link>
              <button
                onClick={toggleTheme}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mr-4"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mega Menus */}
      {activeMenu === 'product' && (
        <div className="absolute left-0 w-full bg-white dark:bg-dark-800 shadow-lg z-50 border-t border-gray-200 dark:border-dark-700">
          <div className="container mx-auto px-4 py-6">
            <MegaMenuProduct onClose={closeMenu} />
          </div>
        </div>
      )}
      
      {activeMenu === 'solutions' && (
        <div className="absolute left-0 w-full bg-white dark:bg-dark-800 shadow-lg z-50 border-t border-gray-200 dark:border-dark-700">
          <div className="container mx-auto px-4 py-6">
            <MegaMenuSolutions onClose={closeMenu} />
          </div>
        </div>
      )}
      
      {activeMenu === 'integrations' && (
        <div className="absolute left-0 w-full bg-white dark:bg-dark-800 shadow-lg z-50 border-t border-gray-200 dark:border-dark-700">
          <div className="container mx-auto px-4 py-6">
            <MegaMenuIntegrations onClose={closeMenu} />
          </div>
        </div>
      )}
      
      {activeMenu === 'resources' && (
        <div className="absolute left-0 w-full bg-white dark:bg-dark-800 shadow-lg z-50 border-t border-gray-200 dark:border-dark-700">
          <div className="container mx-auto px-4 py-6">
            <MegaMenuResources onClose={closeMenu} />
          </div>
        </div>
      )}
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
      
      {/* Backdrop for closing menus when clicking outside */}
      {activeMenu && !mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-transparent" 
          onClick={() => setActiveMenu(null)}
        />
      )}
    </header>
  );
} 