export const integrations = [
  {
    id: 'shopify',
    name: 'Shopify',
    slug: 'shopify',
    category: 'E-commerce',
    logo: '/images/integrations/shopify-logo.svg',
    description: 'Connect CloudLeap with Shopify to automate order fulfillment and shipping for your online store.',
    shortDescription: 'E-commerce platform integration',
    features: [
      {
        title: 'Order Synchronization',
        description: 'Automatically import orders from Shopify to CloudLeap.'
      },
      {
        title: 'Shipping Label Generation',
        description: 'Create shipping labels directly from your Shopify orders.'
      },
      {
        title: 'Tracking Updates',
        description: 'Send tracking information back to Shopify and notify customers.'
      },
      {
        title: 'Inventory Management',
        description: 'Keep inventory levels in sync between CloudLeap and Shopify.'
      }
    ],
    useCases: `
      <h3>Multi-Channel Fulfillment</h3>
      <p>Manage orders from Shopify alongside other sales channels in a unified dashboard.</p>
      
      <h3>International Shipping</h3>
      <p>Simplify international shipping with automated customs documentation and carrier selection.</p>
      
      <h3>Returns Management</h3>
      <p>Streamline the returns process with automated return label generation and tracking.</p>
    `
  },
  // Add more integrations here
];

export const integrationCategories = [
  'E-commerce',
  'Marketplace',
  'ERP',
  'WMS',
  'CRM'
];

export function getAllIntegrations() {
  return integrations;
}

export function getIntegrationBySlug(slug) {
  return integrations.find(integration => integration.slug === slug);
}

export function getAllIntegrationSlugs() {
  return integrations.map(integration => integration.slug);
}

export function getIntegrationCategories() {
  return integrationCategories;
} 