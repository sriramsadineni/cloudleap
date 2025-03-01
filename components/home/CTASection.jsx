import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses that have optimized their logistics operations with CloudLeap TMS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/demo" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Request Demo
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 