import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };
  
  const handleDecline = () => {
    // For GDPR compliance, we should still respect the user's choice
    // but we can set a flag to show the banner again later
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-dark-800 shadow-lg border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex-grow pr-4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-1">Cookie Consent</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              <a href="/privacy-policy" className="text-primary-500 hover:text-primary-600 ml-1">
                Read our Cookie Policy
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDecline}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm font-medium"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Accept All
            </button>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 