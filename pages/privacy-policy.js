import React from 'react';
import Layout from '../components/layout/Layout';

export default function PrivacyPolicyPage() {
  // SEO data
  const seoData = {
    title: "Privacy Policy",
    description: "CloudLeap's privacy policy explains how we collect, use, and protect your personal information.",
    keywords: "privacy policy, GDPR, data protection, cookies, privacy",
    ogType: "article"
  };

  return (
    <Layout {...seoData}>
      <div className="bg-white dark:bg-dark-900">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>Introduction</h2>
              <p>
                CloudLeap ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website, products, and services.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, postal address, phone number, and payment information.
              </p>
              
              <h2>Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our website. This helps us provide you with a good experience when you browse our website and allows us to improve our site.
              </p>
              
              <h3>Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
                <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
                <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website.</li>
                <li><strong>Targeting Cookies:</strong> These record your visit to our website, the pages you have visited, and the links you have followed.</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to develop new services, and to protect CloudLeap and our users.
              </p>
              
              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@cloudleap.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 