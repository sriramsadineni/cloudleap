import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { SECTION_CLASSES, TEXT_CLASSES } from '../../utils/colors';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    title: 'Chief Executive Officer',
    bio: 'Sarah has over 20 years of experience in logistics and supply chain technology.',
    image: '/images/team/sarah-johnson.jpg'
  },
  {
    name: 'Michael Chen',
    title: 'Chief Technology Officer',
    bio: 'Michael leads our engineering team and has a background in enterprise software development.',
    image: '/images/team/michael-chen.jpg'
  },
  {
    name: 'David Rodriguez',
    title: 'VP of Product',
    bio: 'David oversees product strategy and roadmap, with expertise in logistics software.',
    image: '/images/team/david-rodriguez.jpg'
  },
  {
    name: 'Emily Williams',
    title: 'VP of Customer Success',
    bio: 'Emily ensures our customers achieve their logistics goals with CloudLeap.',
    image: '/images/team/emily-williams.jpg'
  }
];

const values = [
  {
    title: 'Customer Focus',
    description: 'We put our customers at the center of everything we do, building solutions that solve real problems.',
    icon: <UserGroupIcon className="h-10 w-10 text-primary-500" />
  },
  {
    title: 'Innovation',
    description: 'We continuously innovate to deliver cutting-edge logistics technology that drives business value.',
    icon: <RocketLaunchIcon className="h-10 w-10 text-primary-500" />
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty in all our business relationships.',
    icon: <BuildingOfficeIcon className="h-10 w-10 text-primary-500" />
  },
  {
    title: 'Global Perspective',
    description: 'We think globally to create solutions that work for businesses around the world.',
    icon: <GlobeAltIcon className="h-10 w-10 text-primary-500" />
  }
];

export default function Company() {
  return (
    <Layout>
      <div className={SECTION_CLASSES.PRIMARY + " py-20"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About CloudLeap
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We're on a mission to transform logistics with innovative transportation management solutions
            </p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-6"}>
                Our Story
              </h2>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Founded in 2015, CloudLeap was born from a simple observation: logistics operations were being held back by outdated, complex software that was difficult to use and expensive to maintain.
              </p>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Our founders, with decades of experience in logistics and software development, set out to create a modern, cloud-based transportation management system that would be powerful yet intuitive, flexible yet affordable.
              </p>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Today, CloudLeap serves hundreds of customers worldwide, from small businesses to Fortune 500 companies, helping them optimize their shipping operations, reduce costs, and deliver exceptional customer experiences.
              </p>
              <p className={TEXT_CLASSES.BODY}>
                Based in Chicago with offices in London and Singapore, our team of logistics experts and software engineers continues to innovate and expand our platform to meet the evolving needs of global supply chains.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Company Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Our Values
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              These core principles guide everything we do at CloudLeap.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-3"}>
                  {value.title}
                </h3>
                <p className={TEXT_CLASSES.BODY}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Leadership Team
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              Meet the experienced team leading CloudLeap's innovation in logistics technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Photo</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-1"}>
                    {member.name}
                  </h3>
                  <p className={TEXT_CLASSES.PRIMARY + " mb-3"}>
                    {member.title}
                  </p>
                  <p className={TEXT_CLASSES.BODY}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className={SECTION_CLASSES.PRIMARY + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">2015</div>
                <p className="text-blue-100">Founded</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <p className="text-blue-100">Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100M+</div>
                <p className="text-blue-100">Shipments Processed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
                <p className="text-blue-100">Global Offices</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers CTA */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-dark-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className={TEXT_CLASSES.HEADING + " text-2xl font-bold mb-4"}>
                  Join Our Team
                </h2>
                <p className={TEXT_CLASSES.BODY + " mb-6"}>
                  We're always looking for talented individuals who are passionate about logistics and technology. Check out our open positions and become part of our mission to transform global logistics.
                </p>
                <Link 
                  href="/career"
                  className="btn-primary inline-block"
                >
                  View Open Positions
                </Link>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-center p-8">
                  <p>Team Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 