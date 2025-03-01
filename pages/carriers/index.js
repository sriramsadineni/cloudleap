import React from 'react';
import Layout from '../../components/layout/Layout';
import { getAllCarriers } from '../../lib/data/carriers';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CarriersPage({ carriers }) {
  return (
    <Layout title="Shipping Carriers | CloudLeap">
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Shipping Carrier Network</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect with our global network of shipping carriers to optimize your logistics operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {carriers.map(carrier => (
              <Link 
                href={`/carriers/${carrier.slug}`} 
                key={carrier.id}
                className="bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="relative h-12 w-full">
                    <Image 
                      src={carrier.logo} 
                      alt={carrier.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{carrier.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm flex-grow">{carrier.shortDescription}</p>
                <div className="mt-4 text-primary-500 text-sm font-medium flex items-center justify-center">
                  Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const carriers = getAllCarriers();
  return {
    props: { carriers }
  };
} 