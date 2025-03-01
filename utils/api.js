// Utility functions for fetching data

// Simulated data for blog posts
export const getBlogPosts = async () => {
  // In a real app, this would fetch from an API or CMS
  return [
    {
      id: 'optimizing-transportation-costs',
      slug: 'optimizing-transportation-costs',
      title: 'Optimizing Transportation Costs in a Volatile Market',
      excerpt: 'Learn strategies to reduce transportation costs while maintaining service levels in today\'s volatile logistics market.',
      date: '2023-10-15',
      author: 'Jennifer Smith',
      authorRole: 'Logistics Specialist',
      coverImage: '/images/blog/transportation-costs.jpg',
      content: `
        <p>In today's volatile logistics market, optimizing transportation costs while maintaining service levels has become more challenging than ever. This article explores effective strategies that can help businesses navigate these challenges.</p>
        
        <h2>Understanding the Current Market</h2>
        <p>The transportation industry has faced unprecedented disruptions in recent years. From the global pandemic to fuel price fluctuations and driver shortages, these factors have contributed to rising costs and service inconsistencies.</p>
        
        <h2>Data-Driven Decision Making</h2>
        <p>Leveraging transportation data is crucial for identifying cost-saving opportunities. By analyzing historical shipping patterns, businesses can optimize routes, consolidate shipments, and select the most cost-effective carriers for specific lanes.</p>
        
        <h2>Strategic Carrier Management</h2>
        <p>Developing strong relationships with a diverse carrier base provides flexibility and competitive pricing. Implementing a strategic carrier management program that balances cost, service, and capacity can yield significant savings.</p>
        
        <h2>Technology Solutions</h2>
        <p>Modern TMS platforms offer powerful tools for cost optimization. Features like automated tendering, real-time rate shopping, and AI-powered analytics can identify savings opportunities that might otherwise be missed.</p>
        
        <h2>Conclusion</h2>
        <p>While the transportation market remains challenging, businesses that adopt data-driven approaches, strategic carrier management, and modern technology solutions can effectively optimize costs while maintaining service excellence.</p>
      `
    },
    {
      id: 'supply-chain-visibility',
      slug: 'supply-chain-visibility',
      title: 'Enhancing Supply Chain Visibility with Real-Time Tracking',
      excerpt: 'Discover how real-time tracking technologies are transforming supply chain visibility and customer satisfaction.',
      date: '2023-09-22',
      author: 'Michael Rodriguez',
      authorRole: 'Supply Chain Analyst',
      coverImage: '/images/blog/supply-chain-visibility.jpg',
      content: `
        <p>Supply chain visibility has evolved from a nice-to-have feature to a critical business requirement. This article explores how real-time tracking technologies are transforming logistics operations and customer experiences.</p>
        
        <h2>The Evolution of Supply Chain Visibility</h2>
        <p>Traditional supply chain visibility relied on periodic status updates and estimated arrival times. Today's advanced solutions provide real-time location data, condition monitoring, and predictive ETAs based on current conditions.</p>
        
        <h2>Technologies Driving Enhanced Visibility</h2>
        <p>Several technologies are powering this visibility revolution, including GPS tracking, IoT sensors, cellular networks, and cloud computing. Together, these technologies create a comprehensive view of shipments throughout the supply chain.</p>
        
        <h2>Business Benefits</h2>
        <p>Enhanced visibility delivers numerous benefits, including improved customer satisfaction, reduced safety stock, faster issue resolution, and more efficient operations. Companies with superior visibility capabilities typically outperform their competitors in key metrics.</p>
        
        <h2>Implementation Strategies</h2>
        <p>Implementing real-time visibility requires a strategic approach. This includes selecting the right technology partners, integrating systems effectively, and establishing processes to act on the information received.</p>
        
        <h2>Future Trends</h2>
        <p>Looking ahead, visibility solutions will continue to evolve with advancements in AI, predictive analytics, and autonomous vehicles. These technologies will further enhance the accuracy and value of supply chain visibility.</p>
      `
    },
    {
      id: 'sustainable-logistics',
      slug: 'sustainable-logistics',
      title: 'Sustainable Logistics: Reducing Your Carbon Footprint',
      excerpt: 'Explore practical approaches to implementing sustainable logistics practices while maintaining operational efficiency.',
      date: '2023-08-30',
      author: 'Sarah Johnson',
      authorRole: 'Sustainability Director',
      coverImage: '/images/blog/sustainable-logistics.jpg',
      content: `
        <p>As environmental concerns grow, businesses are increasingly focused on reducing the carbon footprint of their logistics operations. This article explores practical approaches to implementing sustainable practices while maintaining operational efficiency.</p>
        
        <h2>The Environmental Impact of Logistics</h2>
        <p>Transportation accounts for approximately 29% of greenhouse gas emissions in the United States. Within the supply chain, logistics activities represent a significant opportunity for environmental improvement.</p>
        
        <h2>Route Optimization and Load Consolidation</h2>
        <p>One of the most effective ways to reduce emissions is by optimizing routes and consolidating shipments. Modern TMS solutions can identify opportunities to combine loads and select the most efficient routes, reducing miles driven and fuel consumed.</p>
        
        <h2>Alternative Fuels and Vehicle Technologies</h2>
        <p>The transition to alternative fuels and electric vehicles is accelerating. Many companies are incorporating electric delivery vehicles, hydrogen-powered trucks, and biofuels into their fleets to reduce emissions.</p>
        
        <h2>Sustainable Packaging</h2>
        <p>Packaging choices significantly impact the environmental footprint of logistics operations. Implementing recyclable materials, right-sized packaging, and reusable containers can substantially reduce waste and emissions.</p>
        
        <h2>Measuring and Reporting</h2>
        <p>Establishing clear metrics and reporting processes is essential for tracking progress toward sustainability goals. Many companies are now including carbon emissions in their regular performance reporting.</p>
        
        <h2>Conclusion</h2>
        <p>Sustainable logistics is no longer just a corporate social responsibility initiative—it's becoming a business imperative. Companies that proactively adopt sustainable practices can reduce costs, meet customer expectations, and contribute to environmental preservation.</p>
      `
    }
  ];
};

// Get a single blog post by slug
export const getBlogPostBySlug = async (slug) => {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
};

// Simulated data for case studies
export const getCaseStudies = async () => {
  // In a real app, this would fetch from an API or CMS
  return [
    {
      id: 'retail-giant',
      slug: 'retail-giant-optimizes-delivery',
      title: 'How a Retail Giant Optimized Last-Mile Delivery',
      excerpt: 'Learn how one of the largest retailers in North America reduced delivery costs by 18% while improving on-time performance.',
      industry: 'Retail',
      coverImage: '/images/case-studies/retail-delivery.jpg',
      results: [
        'Reduced delivery costs by 18%',
        'Improved on-time delivery from 89% to 97%',
        'Decreased customer complaints by 24%'
      ],
      content: `
        <p>A leading North American retailer with over 1,200 stores was struggling with inefficient last-mile delivery operations. Rising customer expectations for fast delivery and increasing competition from e-commerce giants created pressure to improve performance while controlling costs.</p>
        
        <h2>The Challenge</h2>
        <p>The retailer faced several challenges in their delivery operations:</p>
        <ul>
          <li>Manual routing processes that couldn't efficiently handle high order volumes</li>
          <li>Limited visibility into driver locations and delivery status</li>
          <li>Inconsistent delivery experiences across different regions</li>
          <li>Rising costs from inefficient routes and missed delivery windows</li>
        </ul>
        
        <h2>The Solution</h2>
        <p>After evaluating several options, the retailer implemented CloudLeap's comprehensive TMS solution with a focus on last-mile optimization. The implementation included:</p>
        <ul>
          <li>AI-powered route optimization to maximize efficiency</li>
          <li>Real-time tracking and visibility for both internal teams and customers</li>
          <li>Automated customer communications for delivery updates</li>
          <li>Performance analytics to identify ongoing improvement opportunities</li>
        </ul>
        
        <h2>The Results</h2>
        <p>Within six months of implementation, the retailer achieved significant improvements:</p>
        <ul>
          <li>18% reduction in overall delivery costs</li>
          <li>Improvement in on-time delivery performance from 89% to 97%</li>
          <li>24% decrease in customer complaints related to delivery</li>
          <li>15% increase in driver productivity (stops per hour)</li>
          <li>Reduction in customer service calls about delivery status by 32%</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>By implementing CloudLeap's TMS solution, the retailer transformed their last-mile delivery operations from a cost center to a competitive advantage. The improved efficiency and customer experience have contributed to increased sales and customer loyalty.</p>
      `
    },
    {
      id: 'food-distributor',
      slug: 'food-distributor-streamlines-operations',
      title: 'Food Distributor Streamlines Operations with Integrated TMS',
      excerpt: 'Discover how a regional food distributor reduced operating costs and improved customer satisfaction through transportation management.',
      industry: 'Food & Beverage',
      coverImage: '/images/case-studies/food-distribution.jpg',
      results: [
        'Reduced transportation costs by 14%',
        'Decreased order-to-delivery time by 22%',
        'Improved inventory accuracy to 99.8%'
      ],
      content: `
        <p>A regional food distributor serving restaurants, hotels, and institutional customers across the Midwest was struggling with inefficient transportation operations and rising costs. With over 5,000 SKUs and time-sensitive deliveries, they needed a solution to streamline their logistics processes.</p>
        
        <h2>The Challenge</h2>
        <p>The distributor faced several operational challenges:</p>
        <ul>
          <li>Disconnected systems for order management, warehouse operations, and transportation</li>
          <li>Manual planning processes that couldn't efficiently handle complex routing requirements</li>
          <li>Limited visibility into inventory and delivery status</li>
          <li>High costs from inefficient routes and underutilized capacity</li>
          <li>Increasing customer complaints about late or incomplete deliveries</li>
        </ul>
        
        <h2>The Solution</h2>
        <p>After a thorough evaluation process, the distributor implemented CloudLeap's integrated TMS solution. The implementation included:</p>
        <ul>
          <li>Integration with existing ERP and WMS systems for seamless data flow</li>
          <li>Advanced route optimization considering customer time windows, vehicle constraints, and product requirements</li>
          <li>Real-time visibility for customer service and operations teams</li>
          <li>Mobile applications for drivers to manage deliveries and capture proof of delivery</li>
          <li>Analytics dashboard for continuous performance monitoring</li>
        </ul>
        
        <h2>The Results</h2>
        <p>Within the first year of implementation, the distributor achieved significant improvements:</p>
        <ul>
          <li>14% reduction in transportation costs</li>
          <li>22% decrease in order-to-delivery time</li>
          <li>Improvement in inventory accuracy to 99.8%</li>
          <li>28% reduction in customer complaints</li>
          <li>18% increase in driver productivity</li>
          <li>Reduction in administrative time spent on transportation planning by 65%</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>By implementing CloudLeap's TMS solution, the food distributor transformed their transportation operations, achieving significant cost savings while improving customer satisfaction. The integrated approach eliminated silos between systems and departments, creating a more efficient and responsive operation.</p>
      `
    },
    {
      id: 'manufacturing-company',
      slug: 'manufacturing-company-reduces-freight-spend',
      title: 'Manufacturing Company Reduces Freight Spend by 21%',
      excerpt: 'See how a mid-sized manufacturer optimized carrier selection and load planning to dramatically reduce transportation costs.',
      industry: 'Manufacturing',
      coverImage: '/images/case-studies/manufacturing.jpg',
      results: [
        'Reduced freight spend by 21%',
        'Decreased transit times by 17%',
        'Improved carrier compliance to 96%'
      ],
      content: `
        <p>A mid-sized manufacturer of industrial equipment with facilities in three states was struggling with rising freight costs and inconsistent carrier performance. With shipments to customers across North America, they needed a solution to optimize their transportation operations and reduce costs.</p>
        
        <h2>The Challenge</h2>
        <p>The manufacturer faced several challenges in their transportation operations:</p>
        <ul>
          <li>Manual processes for carrier selection and load tendering</li>
          <li>Limited visibility into carrier performance and costs</li>
          <li>Inefficient load planning resulting in underutilized capacity</li>
          <li>Inconsistent transit times affecting customer satisfaction</li>
          <li>Rising freight costs eating into profit margins</li>
        </ul>
        
        <h2>The Solution</h2>
        <p>After evaluating several options, the manufacturer implemented CloudLeap's TMS solution with a focus on freight optimization. The implementation included:</p>
        <ul>
          <li>Automated carrier selection based on cost, service, and capacity</li>
          <li>Load optimization to maximize trailer utilization</li>
          <li>Electronic tendering and confirmation with carriers</li>
          <li>Real-time tracking and exception management</li>
          <li>Comprehensive analytics for carrier performance and cost management</li>
        </ul>
        
        <h2>The Results</h2>
        <p>Within the first year of implementation, the manufacturer achieved significant improvements:</p>
        <ul>
          <li>21% reduction in overall freight spend</li>
          <li>17% decrease in average transit times</li>
          <li>Improvement in carrier compliance to 96%</li>
          <li>15% increase in trailer utilization</li>
          <li>Reduction in administrative time spent on transportation management by 70%</li>
          <li>Improved visibility leading to more accurate delivery estimates for customers</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>By implementing CloudLeap's TMS solution, the manufacturer transformed their transportation operations from a manual, inefficient process to a strategic advantage. The improved efficiency and reduced costs have directly contributed to increased profitability and customer satisfaction.</p>
      `
    }
  ];
};

// Get a single case study by slug
export const getCaseStudyBySlug = async (slug) => {
  const caseStudies = await getCaseStudies();
  return caseStudies.find(study => study.slug === slug);
};

// Simulated data for events
export const getEvents = async () => {
  // In a real app, this would fetch from an API or CMS
  const currentDate = new Date();
  
  return [
    {
      id: 'supply-chain-summit',
      slug: 'supply-chain-summit-2023',
      title: 'Supply Chain Innovation Summit 2023',
      date: '2023-11-15T09:00:00Z',
      endDate: '2023-11-16T17:00:00Z',
      location: 'Chicago, IL',
      venue: 'Chicago Convention Center',
      type: 'Conference',
      coverImage: '/images/events/supply-chain-summit.jpg',
      excerpt: 'Join industry leaders for two days of insights, networking, and innovation in supply chain management.',
      isUpcoming: new Date('2023-11-15') > currentDate,
      content: `
        <p>The Supply Chain Innovation Summit brings together industry leaders, technology experts, and logistics professionals for two days of learning, networking, and collaboration. This year's theme focuses on resilience and innovation in the face of global disruptions.</p>
        
        <h2>Event Highlights</h2>
        <ul>
          <li>Keynote presentations from industry thought leaders</li>
          <li>Panel discussions on emerging trends and challenges</li>
          <li>Interactive workshops and technology demonstrations</li>
          <li>Networking opportunities with peers and solution providers</li>
          <li>Exhibition hall featuring the latest supply chain technologies</li>
        </ul>
        
        <h2>Featured Speakers</h2>
        <ul>
          <li>Sarah Johnson, Chief Supply Chain Officer, Global Retail Inc.</li>
          <li>Dr. Michael Chen, Professor of Supply Chain Management, MIT</li>
          <li>David Rodriguez, VP of Logistics, Rapid Distribution LLC</li>
          <li>Jennifer Smith, Director of Transportation, CloudLeap</li>
        </ul>
        
        <h2>Who Should Attend</h2>
        <p>This event is designed for supply chain executives, logistics managers, transportation directors, and technology leaders who are responsible for optimizing supply chain operations and driving innovation within their organizations.</p>
        
        <h2>Registration Information</h2>
        <p>Early bird registration is available until September 30, 2023. Group discounts are available for organizations sending three or more attendees.</p>
      `
    },
    {
      id: 'tms-webinar',
      slug: 'maximizing-roi-tms-webinar',
      title: 'Webinar: Maximizing ROI from Your TMS Investment',
      date: '2023-10-05T14:00:00Z',
      endDate: '2023-10-05T15:00:00Z',
      location: 'Online',
      venue: 'Virtual Event',
      type: 'Webinar',
      coverImage: '/images/events/tms-webinar.jpg',
      excerpt: 'Learn practical strategies to maximize the return on investment from your transportation management system.',
      isUpcoming: new Date('2023-10-05') > currentDate,
      content: `
        <p>Implementing a Transportation Management System (TMS) represents a significant investment for most organizations. This webinar will provide practical strategies to ensure you're maximizing the return on that investment through effective implementation, user adoption, and ongoing optimization.</p>
        
        <h2>Webinar Topics</h2>
        <ul>
          <li>Key performance indicators for measuring TMS success</li>
          <li>Strategies for increasing user adoption and compliance</li>
          <li>Advanced features that many organizations underutilize</li>
          <li>Integration opportunities to enhance TMS value</li>
          <li>Continuous improvement approaches for long-term ROI</li>
        </ul>
        
        <h2>Presenters</h2>
        <ul>
          <li>Jennifer Smith, Director of Transportation Solutions, CloudLeap</li>
          <li>Michael Rodriguez, Implementation Specialist, CloudLeap</li>
        </ul>
        
        <h2>Who Should Attend</h2>
        <p>This webinar is ideal for transportation managers, logistics directors, supply chain executives, and IT leaders who are currently using a TMS or planning to implement one in the near future.</p>
        
        <h2>Registration Information</h2>
        <p>Registration is free but space is limited. All registrants will receive a recording of the webinar and additional resources after the event.</p>
      `
    },
    {
      id: 'logistics-tech-expo',
      slug: 'logistics-technology-expo-2023',
      title: 'Logistics Technology Expo 2023',
      date: '2023-12-07T09:00:00Z',
      endDate: '2023-12-08T17:00:00Z',
      location: 'Atlanta, GA',
      venue: 'Atlanta Exhibition Center',
      type: 'Expo',
      coverImage: '/images/events/logistics-tech-expo.jpg',
      excerpt: 'Explore the latest innovations in logistics technology at this premier industry event.',
      isUpcoming: new Date('2023-12-07') > currentDate,
      content: `
        <p>The Logistics Technology Expo is the premier event for discovering the latest innovations in supply chain and logistics technology. With over 100 exhibitors and dozens of educational sessions, this event provides a comprehensive overview of the tools and solutions that are transforming the industry.</p>
        
        <h2>Event Highlights</h2>
        <ul>
          <li>Exhibition hall featuring leading technology providers</li>
          <li>Product demonstrations and hands-on experiences</li>
          <li>Educational sessions on emerging technologies and trends</li>
          <li>Networking opportunities with technology experts and peers</li>
          <li>Innovation showcase featuring new startups and solutions</li>
        </ul>
        
        <h2>Technology Focus Areas</h2>
        <ul>
          <li>Transportation Management Systems</li>
          <li>Warehouse Automation and Robotics</li>
          <li>Visibility and Tracking Solutions</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Last-Mile Delivery Technologies</li>
          <li>Blockchain and Supply Chain Security</li>
        </ul>
        
        <h2>Who Should Attend</h2>
        <p>This event is designed for supply chain executives, logistics managers, IT leaders, and operations directors who are responsible for evaluating and implementing technology solutions within their organizations.</p>
        
        <h2>Registration Information</h2>
        <p>Early bird registration is available until October 31, 2023. Exhibitor and sponsorship opportunities are also available for technology providers.</p>
      `
    }
  ];
};

// Get a single event by slug
export const getEventBySlug = async (slug) => {
  const events = await getEvents();
  return events.find(event => event.slug === slug);
}; 