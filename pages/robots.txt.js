export async function getServerSideProps({ res }) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cloudleap.com';
  
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
`;

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default function RobotsTxt() {
  return null;
} 