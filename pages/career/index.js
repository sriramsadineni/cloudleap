import React from 'react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  RocketLaunchIcon,
  BriefcaseIcon,
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { SECTION_CLASSES, TEXT_CLASSES } from '../../utils/colors';

const openPositions = [
  {
    id: 'senior-software-engineer',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Chicago, IL (Hybrid)',
    type: 'Full-time'
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Chicago, IL (Hybrid)',
    type: 'Full-time'
  },
  {
    id: 'customer-success-manager',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote (US)',
    type: 'Full-time'
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Chicago, IL or Remote (US)',
    type: 'Full-time'
  },
  {
    id: 'logistics-specialist',
    title: 'Logistics Specialist',
    department: 'Professional Services',
    location: 'Chicago, IL (Hybrid)',
    type: 'Full-time'
  }
];

const benefits = [
  {
    title: 'Competitive Compensation',
    description: 'Competitive salary, equity, and performance bonuses',
    icon: <BuildingOfficeIcon className="h-8 w-8 text-primary-500" />
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance',
    icon: <UserGroupIcon className="h-8 w-8 text-primary-500" />
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and generous PTO',
    icon: <GlobeAltIcon className="h-8 w-8 text-primary-500" />
  },
  {
    title: 'Growth & Development',
    description: 'Learning stipend and career advancement opportunities',
    icon: <RocketLaunchIcon className="h-8 w-8 text-primary-500" />
  }
];

export default function Careers() {
  return (
    <Layout>
      <div className={SECTION_CLASSES.PRIMARY + " py-20"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Help us transform global logistics with innovative technology solutions
            </p>
            <Link 
              href="#open-positions" 
              className="btn-dark"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-6"}>
                Why Join CloudLeap?
              </h2>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                At CloudLeap, we're on a mission to transform global logistics with innovative technology solutions. We're looking for passionate, talented individuals to join our team and help us build the future of transportation management.
              </p>
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Our team combines deep logistics expertise with cutting-edge technology skills to solve complex supply chain challenges. We value creativity, collaboration, and a customer-first mindset.
              </p>
              <p className={TEXT_CLASSES.BODY}>
                If you're excited about making a real impact in an industry that powers the global economy, CloudLeap might be the perfect place for you.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <p>Team Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Our Values
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              These core principles guide our work and define our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <UserGroupIcon className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-3"}>
                Customer Focus
              </h3>
              <p className={TEXT_CLASSES.BODY}>
                We put our customers at the center of everything we do, building solutions that solve real problems.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <RocketLaunchIcon className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-3"}>
                Innovation
              </h3>
              <p className={TEXT_CLASSES.BODY}>
                We continuously innovate to deliver cutting-edge logistics technology that drives business value.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <BuildingOfficeIcon className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-3"}>
                Integrity
              </h3>
              <p className={TEXT_CLASSES.BODY}>
                We operate with transparency and honesty in all our business relationships.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <GlobeAltIcon className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold mb-3"}>
                Global Perspective
              </h3>
              <p className={TEXT_CLASSES.BODY}>
                We think globally to create solutions that work for businesses around the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Benefits & Perks
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              We offer competitive compensation and benefits to support our team members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className={TEXT_CLASSES.HEADING + " text-xl font-semibold"}>
                    {benefit.title}
                  </h3>
                </div>
                <p className={TEXT_CLASSES.BODY}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className={SECTION_CLASSES.LIGHT_ALT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Open Positions
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              Join our team and help us transform global logistics.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {openPositions.map((position) => (
                  <li key={position.id} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center mt-2">
                          <div className="flex items-center mr-4 mb-2 md:mb-0">
                            <BriefcaseIcon className="h-4 w-4 text-primary-500 mr-2" />
                            <span className={TEXT_CLASSES.MUTED + " text-sm"}>{position.department}</span>
                          </div>
                          <div className="flex items-center mr-4 mb-2 md:mb-0">
                            <MapPinIcon className="h-4 w-4 text-primary-500 mr-2" />
                            <span className={TEXT_CLASSES.MUTED + " text-sm"}>{position.location}</span>
                          </div>
                          <span className="bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <Link 
                        href={`/career/${position.id}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center"
                      >
                        View Details
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <p className={TEXT_CLASSES.BODY + " mb-4"}>
                Don't see a position that matches your skills? We're always looking for talented individuals.
              </p>
              <Link 
                href="/contact"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium inline-flex items-center"
              >
                Contact Us
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Testimonials */}
      <div className={SECTION_CLASSES.LIGHT + " py-16"}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className={TEXT_CLASSES.HEADING + " text-3xl font-bold mb-4"}>
              Life at CloudLeap
            </h2>
            <p className={TEXT_CLASSES.BODY}>
              Hear from our team members about what it's like to work at CloudLeap.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                  <span className="text-gray-500 dark:text-gray-400">JD</span>
                </div>
                <div>
                  <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                    John Doe
                  </h3>
                  <p className={TEXT_CLASSES.MUTED}>
                    Software Engineer, 2 years
                  </p>
                </div>
              </div>
              <p className={TEXT_CLASSES.BODY}>
                "Working at CloudLeap has been an incredible journey. I've had the opportunity to work on challenging problems and grow my skills while making a real impact on our customers' businesses."
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                  <span className="text-gray-500 dark:text-gray-400">JS</span>
                </div>
                <div>
                  <h3 className={TEXT_CLASSES.HEADING + " text-lg font-semibold"}>
                    Jane Smith
                  </h3>
                  <p className={TEXT_CLASSES.MUTED}>
                    Product Manager, 3 years
                  </p>
                </div>
              </div>
              <p className={TEXT_CLASSES.BODY}>
                "The culture at CloudLeap is truly special. We're a team of passionate individuals who care deeply about solving our customers' problems. The collaborative environment and focus on innovation make this the best place I've ever worked."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={SECTION_CLASSES.PRIMARY + " py-16"}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to join our team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our open positions and take the next step in your career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#open-positions" 
              className="btn-dark"
            >
              View Open Positions
            </a>
            <Link 
              href="/company" 
              className="btn-secondary"
            >
              Learn About CloudLeap
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 