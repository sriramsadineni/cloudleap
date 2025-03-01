import { useEffect } from 'react';
import Layout from '../../components/layout/Layout';

export default function DocsRedirect() {
  useEffect(() => {
    window.location.href = 'https://docs.piyovi.io';
  }, []);
  
  return (
    <Layout title="Documentation | CloudLeap">
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Documentation...</h1>
        <p>If you are not redirected automatically, <a href="https://docs.piyovi.io" className="text-primary-500 hover:text-primary-600">click here</a>.</p>
      </div>
    </Layout>
  );
} 