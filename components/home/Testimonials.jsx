import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "CloudLeap has transformed our shipping operations. We've reduced costs by 23% and improved delivery times by 15%.",
    author: "Sarah Johnson",
    title: "Logistics Director, Global Retail Inc."
  },
  {
    quote: "The automation features have saved our team countless hours of manual work. The ROI was evident within the first month.",
    author: "Michael Chen",
    title: "Supply Chain Manager, Tech Solutions Co."
  },
  {
    quote: "Customer support is exceptional. They helped us customize the platform to our specific needs and were always available.",
    author: "David Rodriguez",
    title: "Operations VP, Wholesale Distributors"
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their logistics with CloudLeap TMS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-dark-800 rounded-lg p-8">
              <div className="mb-4 text-primary-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-gray-600 dark:text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
