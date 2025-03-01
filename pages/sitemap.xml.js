import { getAllPosts } from '../lib/api';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cloudleap.com';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Static Pages -->
      <url>
        <loc>${SITE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${SITE_URL}/features</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${SITE_URL}/solutions</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${SITE_URL}/partners</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${SITE_URL}/partners/technology</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${SITE_URL}/partners/solutions</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${SITE_URL}/partners/apply</loc>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
      <url>
        <loc>${SITE_URL}/connectors</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${SITE_URL}/carriers</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${SITE_URL}/pricing</loc>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${SITE_URL}/company</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${SITE_URL}/contact</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      
      <!-- Blog Posts -->
      ${posts
        ? posts.map(({ slug }) => {
            return `
              <url>
                <loc>${`${SITE_URL}/blog/${slug}`}</loc>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
              </url>
            `;
          }).join('')
        : ''}
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  // Get all blog posts
  const posts = getAllPosts ? await getAllPosts() : [];
  
  // Generate the XML sitemap
  const sitemap = generateSiteMap(posts);
  
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  
  return {
    props: {},
  };
}

export default function Sitemap() {
  // This component doesn't need to render anything
  return null;
} 