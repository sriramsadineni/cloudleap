import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function UpdatesBanner({ message, link, linkText }) {
  const [isVisible, setIsVisible] = useState(false);
  const bannerKey = 'updateBanner_' + (message ? message.substring(0, 20).replace(/\s/g, '_') : 'latest');
  
  useEffect(() => {
    // Check if this specific banner has been dismissed
    const isDismissed = localStorage.getItem(bannerKey);
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, [bannerKey]);
  
  const handleDismiss = () => {
    localStorage.setItem(bannerKey, 'dismissed');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-primary-500 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-sm font-medium">
              {message || "We've updated our platform with new features!"}
              {link && (
                <Link href={link} className="underline ml-2 hover:text-white/90">
                  {linkText || "Learn more"}
                </Link>
              )}
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white"
            aria-label="Dismiss"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 