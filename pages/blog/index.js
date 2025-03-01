import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { getBlogPosts } from '../../utils/api';

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            CloudLeap Blog
          </h1>
          <p className="text-xl text-blue-100 text-center mt-4 max-w-3xl mx-auto">
            Insights, trends, and best practices in transportation management and supply chain optimization
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  {/* Placeholder for blog post image */}
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Blog Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</div>
                  <h2 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug}`} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on request, if revalidation is enabled
export async function getStaticProps() {
  const posts = await getBlogPosts();
  
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60 * 10, // In seconds
  };
} 