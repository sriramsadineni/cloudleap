import React, { useState, useEffect } from 'react';

export default function CookieSettings() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Essential cookies cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false
  });
  
  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);
  
  const handleToggle = (category) => {
    if (category === 'essential') return; // Essential cookies cannot be toggled
    
    const newPreferences = {
      ...cookiePreferences,
      [category]: !cookiePreferences[category]
    };
    
    setCookiePreferences(newPreferences);
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
    
    // Here you would implement the actual cookie management
    // For example, clearing certain cookies if they're disabled
  };
  
  const handleSaveAll = () => {
    const allEnabled = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    setCookiePreferences(allEnabled);
    localStorage.setItem('cookiePreferences', JSON.stringify(allEnabled));
    localStorage.setItem('cookieConsent', 'true');
  };
  
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Cookie Settings</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Manage your cookie preferences. Essential cookies are necessary for the website to function properly and cannot be disabled.
      </p>
      
      <div className="space-y-4">
        {Object.entries(cookiePreferences).map(([category, enabled]) => (
          <div key={category} className="flex items-center justify-between">
            <div>
              <h3 className="font-medium capitalize">{category} Cookies</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {category === 'essential' 
                  ? 'Required for the website to function properly' 
                  : category === 'analytics'
                  ? 'Help us understand how visitors interact with our website'
                  : category === 'marketing'
                  ? 'Used to deliver relevant ads and marketing campaigns'
                  : 'Remember your preferences and settings'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                onChange={() => handleToggle(category)}
                disabled={category === 'essential'}
              />
              <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer ${
                enabled ? 'peer-checked:bg-primary-500' : 'dark:bg-gray-700'
              } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}></div>
            </label>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={handleSaveAll}
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Accept All
        </button>
        <button
          onClick={() => localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences))}
          className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-dark-700 px-4 py-2 rounded-md text-sm font-medium"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
} 