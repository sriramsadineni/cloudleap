import React from 'react';

// Using publicly available SVG icons for demonstration
const logos = [
  {
    name: 'FedEx',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 263" width="120" height="33">
        <path d="M403.6 2.6h151.3v68.4h-78.2v25.3h78.2v68.4h-78.2v98.1h-73.1V2.6zm-162.7 0v91.5h-1.1L174.2 2.6h-98.1v260.2h73.1v-193h1.1l81.7 116.9h1.1l81.7-116.9h1.1v193h73.1V2.6h-98.1L224.2 94.1h-1.1L157.4 2.6h-16.5zm719.1 0v91.5h-1.1L893.3 2.6h-98.1v260.2h73.1v-193h1.1l81.7 116.9h1.1l81.7-116.9h1.1v193h73.1V2.6h-98.1L943.3 94.1h-1.1L876.5 2.6h-16.5zM610.7 2.6v260.2h73.1V2.6h-73.1z" fill="#4D148C"/>
        <path d="M557.9 262.8h73.1V2.6h-73.1v260.2zM0 262.8h235.8v-68.4H73.1v-25.3h162.7V100.7H73.1V71h162.7V2.6H0v260.2z" fill="#FF6600"/>
      </svg>
    ),
    width: 120
  },
  {
    name: 'UPS',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="80" height="33">
        <path d="M23.3 0C10.4 0 0 10.4 0 23.3v33.4C0 69.6 10.4 80 23.3 80h53.4C89.6 80 100 69.6 100 56.7V23.3C100 10.4 89.6 0 76.7 0H23.3z" fill="#351c15"/>
        <path d="M50 16.7c-12.9 0-23.3 10.4-23.3 23.3 0 12.9 10.4 23.3 23.3 23.3 12.9 0 23.3-10.4 23.3-23.3 0-12.9-10.4-23.3-23.3-23.3zm0 40c-9.2 0-16.7-7.5-16.7-16.7S40.8 23.3 50 23.3 66.7 30.8 66.7 40 59.2 56.7 50 56.7z" fill="#ffb500"/>
        <path d="M50 26.7c-7.4 0-13.3 6-13.3 13.3 0 7.4 6 13.3 13.3 13.3 7.4 0 13.3-6 13.3-13.3 0-7.4-6-13.3-13.3-13.3zm0 20c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7z" fill="#ffb500"/>
      </svg>
    ),
    width: 80
  },
  {
    name: 'DHL',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="100" height="33">
        <path d="M0 0h200v80H0z" fill="#FFCC00"/>
        <path d="M20 20h30v40H20zm40 0h30v40H60zm40 0h30v40h-30zm40 0h30v40h-30z" fill="#D40511"/>
        <path d="M20 20h30L20 50zm40 0h30L60 50zm40 0h30l-30 30zm40 0h30l-30 30z" fill="#D40511"/>
      </svg>
    ),
    width: 100
  },
  {
    name: 'Canada Post',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 33" width="140" height="33">
        <path d="M0 0h140v33H0z" fill="#FF0000"/>
        <path d="M70 5L60 16.5 70 28l10-11.5z" fill="#FFFFFF"/>
        <path d="M30 10h80v13H30z" fill="#FFFFFF"/>
        <path d="M35 15h70v3H35z" fill="#FF0000"/>
      </svg>
    ),
    width: 140
  },
  {
    name: 'ODFL',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 33" width="120" height="33">
        <path d="M0 0h120v33H0z" fill="#ED1C24"/>
        <path d="M10 8h100v17H10z" fill="#FFFFFF"/>
        <path d="M15 13h90v7H15z" fill="#ED1C24"/>
      </svg>
    ),
    width: 120
  },
  {
    name: 'R+L Carriers',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 33" width="130" height="33">
        <path d="M0 0h130v33H0z" fill="#003366"/>
        <path d="M10 8h110v17H10z" fill="#FFFFFF"/>
        <path d="M20 13h40v7H20zm50 0h40v7H70z" fill="#003366"/>
      </svg>
    ),
    width: 130
  },
  {
    name: 'SAP',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 33" width="90" height="33">
        <path d="M0 0h90v33H0z" fill="#FFFFFF"/>
        <path d="M10 8h70v17H10z" fill="#3366CC"/>
        <path d="M20 13h50v7H20z" fill="#FFFFFF"/>
      </svg>
    ),
    width: 90
  },
  {
    name: 'Oracle',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 33" width="120" height="33">
        <path d="M0 0h120v33H0z" fill="#FF0000"/>
        <path d="M10 8h100v17H10z" fill="#FFFFFF"/>
        <path d="M20 13h80v7H20z" fill="#FF0000"/>
      </svg>
    ),
    width: 120
  },
  {
    name: 'Microsoft',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 33" width="130" height="33">
        <path d="M0 0h60v15H0z" fill="#F25022"/>
        <path d="M70 0h60v15H70z" fill="#7FBA00"/>
        <path d="M0 18h60v15H0z" fill="#00A4EF"/>
        <path d="M70 18h60v15H70z" fill="#FFB900"/>
      </svg>
    ),
    width: 130
  },
  {
    name: 'Infor',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 33" width="100" height="33">
        <path d="M0 0h100v33H0z" fill="#CE0E2D"/>
        <path d="M20 8h60v17H20z" fill="#FFFFFF"/>
        <path d="M30 13h40v7H30z" fill="#CE0E2D"/>
      </svg>
    ),
    width: 100
  }
];

export default function LogoCarousel() {
  return (
    <div className="bg-gray-50 dark:bg-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
          Trusted by leading carriers and technology partners
        </p>
        
        <div className="relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-12 z-10 bg-gradient-to-r from-gray-50 dark:from-dark-800"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 z-10 bg-gradient-to-l from-gray-50 dark:from-dark-800"></div>
          
          <div className="flex items-center space-x-16 py-4 animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`logo-${index}`} className="flex-shrink-0 flex items-center justify-center h-16">
                <div className="relative h-8" style={{ width: logo.width }}>
                  <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    {logo.svg}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate logos to create seamless loop */}
            {logos.map((logo, index) => (
              <div key={`logo-dup-${index}`} className="flex-shrink-0 flex items-center justify-center h-16">
                <div className="relative h-8" style={{ width: logo.width }}>
                  <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    {logo.svg}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 