import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { getEvents } from '../../utils/api';
import { 
  CalendarIcon, 
  MapPinIcon, 
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { SECTION_CLASSES, TEXT_CLASSES } from '../../utils/colors';

const upcomingEvents = [
  {
    id: 'logistics-summit-2023',
    title: 'Global Logistics Summit 2023',
    date: 'October 15-17, 2023',
    location: 'Chicago, IL',
    type: 'Conference',
    description: 'Join CloudLeap at the premier logistics industry event featuring keynotes, workshops, and networking opportunities.',
    image: '/images/events/logistics-summit.jpg'
  },
  {
    id: 'tms-webinar-series',
    title: 'TMS Innovation Webinar Series',
    date: 'November 8, 2023',
    location: 'Virtual',
    type: 'Webinar',
    description: 'Learn about the latest innovations in transportation management systems and how they can transform your logistics operations.',
    image: '/images/events/webinar-series.jpg'
  },
  {
    id: 'supply-chain-expo',
    title: 'Supply Chain Expo 2023',
    date: 'December 5-7, 2023',
    location: 'Atlanta, GA',
    type: 'Trade Show',
    description: 'Visit CloudLeap at booth #342 to see live demos of our latest TMS features and speak with our logistics experts.',
    image: '/images/events/supply-chain-expo.jpg'
  }
];

const pastEvents = [
  {
    id: 'logistics-tech-forum',
    title: 'Logistics Technology Forum',
    date: 'August 22, 2023',
    location: 'Dallas, TX',
    type: 'Forum'
  },
  {
    id: 'carrier-management-webinar',
    title: 'Carrier Management Best Practices',
    date: 'July 14, 2023',
    location: 'Virtual',
    type: 'Webinar'
  },
  {
    id: 'shipping-automation-workshop',
    title: 'Shipping Automation Workshop',
    date: 'June 8, 2023',
    location: 'Boston, MA',
    type: 'Workshop'
  }
];

export default function Events() {
  return (
    <Layout>
      <div className={SECTION_CLASSES.PRIMARY + " py-20"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Events & Webinars
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join CloudLeap at industry events or attend our webinars to learn about the latest in logistics technology
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-8"}>
              Upcoming Events
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                    {/* Placeholder for event image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">Event Image</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className={TEXT_CLASSES.HEADING + " text-xl font-bold mb-3"}>
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-primary-500 mr-2" />
                        <span className={TEXT_CLASSES.BODY}>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-500 mr-2" />
                        <span className={TEXT_CLASSES.BODY}>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className={TEXT_CLASSES.BODY + " mb-4"}>
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6 mt-auto">
                    <Link 
                      href={`/events/${event.id}`}
                      className="btn-primary w-full text-center"
                    >
                      Event Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Webinar Registration */}
      <div className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className={TEXT_CLASSES.HEADING + " text-2xl font-bold mb-4"}>
                  TMS Innovation Webinar Series
                </h2>
                <p className={TEXT_CLASSES.BODY + " mb-6"}>
                  Join our upcoming webinar to learn how modern TMS solutions are transforming logistics operations through automation, analytics, and AI.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-primary-500 mr-3" />
                    <span className={TEXT_CLASSES.BODY}>November 8, 2023 | 2:00 PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-5 w-5 text-primary-500 mr-3" />
                    <span className={TEXT_CLASSES.BODY}>Presented by John Smith, VP of Product</span>
                  </div>
                </div>
                
                <Link 
                  href="/events/tms-webinar-series"
                  className="btn-primary inline-block"
                >
                  Register Now
                </Link>
              </div>
              
              <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-center p-8">
                  <p>Webinar Promotional Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Events */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-8"}>
              Past Events
            </h2>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {pastEvents.map((event) => (
                  <li key={event.id} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                          {event.title}
                        </h3>
                        <div className="flex items-center mt-2">
                          <CalendarIcon className="h-4 w-4 text-primary-500 mr-2" />
                          <span className={TEXT_CLASSES.MUTED + " text-sm mr-4"}>{event.date}</span>
                          <MapPinIcon className="h-4 w-4 text-primary-500 mr-2" />
                          <span className={TEXT_CLASSES.MUTED + " text-sm"}>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-4">
                          {event.type}
                        </span>
                        <Link 
                          href={`/events/${event.id}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center"
                        >
                          View Details
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/events/archive"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium inline-flex items-center"
              >
                View All Past Events
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={SECTION_CLASSES.PRIMARY + " py-16"}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to see CloudLeap in action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our TMS can transform your logistics operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/demo" 
              className="btn-dark"
            >
              Request Demo
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const events = await getEvents();
  
  // Separate upcoming and past events
  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);
  
  return {
    props: {
      events,
      upcomingEvents,
      pastEvents,
    },
    // Re-generate the page at most once every hour
    revalidate: 60 * 60, // In seconds
  };
} 