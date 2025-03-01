import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { getCaseStudies, getCaseStudyBySlug } from '../../utils/api';

export default function CaseStudy({ caseStudy }) {
  if (!caseStudy) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="inline-block px-3 py-1 bg-white text-blue-800 text-sm font-medium rounded-full mb-4">
            {caseStudy.industry}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {caseStudy.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
            {/* Placeholder for case study image */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Case Study Image</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Key Results</h2>
            <ul className="space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Case Studies
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const caseStudies = await getCaseStudies();
  
  // Get the paths we want to pre-render based on case studies
  const paths = caseStudies.map((study) => ({
    params: { slug: study.slug },
  }));
  
  // We'll pre-render only these paths at build time.
  return { paths, fallback: 'blocking' };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const caseStudy = await getCaseStudyBySlug(params.slug);
  
  // If no case study is found, return 404 page
  if (!caseStudy) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      caseStudy,
    },
    // Re-generate the page at most once per 10 minutes
    revalidate: 60 * 10, // In seconds
  };
} 