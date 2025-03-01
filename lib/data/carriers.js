export const carriers = [
  {
    id: 'fedex',
    name: 'FedEx',
    slug: 'fedex',
    logo: '/images/carriers/fedex-logo.svg',
    description: 'Connect with FedEx to streamline your shipping operations and provide reliable delivery services to your customers.',
    shortDescription: 'Global shipping and logistics services',
    features: [
      {
        title: 'Real-time Tracking',
        description: 'Get real-time visibility into your shipments with detailed tracking information.'
      },
      {
        title: 'Automated Label Generation',
        description: 'Generate shipping labels automatically without leaving your CloudLeap dashboard.'
      },
      {
        title: 'Rate Shopping',
        description: 'Compare FedEx rates with other carriers to find the best shipping option.'
      },
      {
        title: 'International Shipping',
        description: 'Ship to over 220 countries and territories with full customs documentation.'
      }
    ],
    solutions: `
      <h3>E-commerce Integration</h3>
      <p>Seamlessly connect your online store with FedEx shipping services to automate order fulfillment and provide customers with reliable delivery options.</p>
      
      <h3>Warehouse Management</h3>
      <p>Integrate FedEx with your warehouse operations to streamline picking, packing, and shipping processes.</p>
      
      <h3>Returns Management</h3>
      <p>Simplify the returns process with automated return label generation and tracking.</p>
    `
  },
  // Add more carriers here
];

export function getAllCarriers() {
  return carriers;
}

export function getCarrierBySlug(slug) {
  return carriers.find(carrier => carrier.slug === slug);
}

export function getAllCarrierSlugs() {
  return carriers.map(carrier => carrier.slug);
} 