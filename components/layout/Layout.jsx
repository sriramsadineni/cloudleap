import React from 'react';
import SEO from '../SEO';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from '../CookieConsent';
import UpdatesBanner from '../UpdatesBanner';

export default function Layout({ 
  children, 
  title, 
  description, 
  keywords,
  ogImage,
  ogType,
  canonicalUrl,
  structuredData,
  updateMessage,
  updateLink,
  updateLinkText,
  hideHeader = false,
  hideFooter = false
}) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        ogImage={ogImage}
        ogType={ogType}
        canonicalUrl={canonicalUrl}
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white dark:bg-dark-900 flex flex-col">
        {updateMessage && (
          <UpdatesBanner 
            message={updateMessage} 
            link={updateLink} 
            linkText={updateLinkText} 
          />
        )}
        {!hideHeader && <Header />}
        <main className="flex-grow">{children}</main>
        {!hideFooter && <Footer />}
        <CookieConsent />
      </div>
    </>
  );
} 