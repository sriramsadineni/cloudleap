import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Streamline Your Supply Chain with CloudLeap TMS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              The all-in-one transportation management system that helps you reduce costs, improve efficiency, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/demo" 
                className="bg-dark hover:bg-dark-800 text-white px-8 py-3 rounded-md font-medium text-center transition-colors"
              >
                Request Demo
              </Link>
              <Link 
                href="/features" 
                className="bg-white dark:bg-dark-800 text-primary-500 dark:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 px-8 py-3 rounded-md font-medium text-center transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-[400px] w-full">
                {/* Replace with your actual dashboard image */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">CloudLeap Dashboard Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 