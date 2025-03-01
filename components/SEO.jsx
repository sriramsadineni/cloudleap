import React from 'react';
import Head from 'next/head';

export default function SEO({
  title,
  description,
  keywords,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  structuredData
}) {
  // Format the title consistently
  const formattedTitle = title ? `${title} | CloudLeap` : 'CloudLeap | Transportation Management System';
  
  // Default description if none provided
  const defaultDescription = 'CloudLeap is a modern transportation management system that helps businesses optimize their shipping operations, reduce costs, and improve customer experience.';
  
  // Default keywords if none provided
  const defaultKeywords = 'transportation management system, TMS, shipping software, logistics software, supply chain management';
  
  // Use the canonical URL or default to the current URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cloudleap.com';
  const pageUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl || pageUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || pageUrl} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl || pageUrl} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
} 