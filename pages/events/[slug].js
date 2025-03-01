import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { getEvents, getEventBySlug } from '../../utils/api';

export default function Event({ event }) {
  if (!event) {
    return <div>Loading...</div>;
  }

  // Format date and time
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <Layout>
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="inline-block px-3 py-1 bg-white text-blue-800 text-sm font-medium rounded-full mb-4">
            {event.type}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
            {/* Placeholder for event image */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Event Image</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Event Details</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <div className="font-medium">Date</div>
                  <div className="text-gray-700">{formatDate(event.date)}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <div className="font-medium">Time</div>
                  <div className="text-gray-700">{formatTime(event.date)} - {formatTime(event.endDate)}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-gray-700">{event.venue}, {event.location}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: event.content }} />
          
          {event.isUpcoming && (
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Register for this Event</h2>
              <p className="mb-4">Secure your spot at this event by registering today.</p>
              <Link 
                href="/contact?event=registration"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Register Now
              </Link>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/events" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Events
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const events = await getEvents();
  
  // Get the paths we want to pre-render based on events
  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));
  
  // We'll pre-render only these paths at build time.
  return { paths, fallback: 'blocking' };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const event = await getEventBySlug(params.slug);
  
  // If no event is found, return 404 page
  if (!event) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      event,
    },
    // Re-generate the page at most once per hour
    revalidate: 60 * 60, // In seconds
  };
} 