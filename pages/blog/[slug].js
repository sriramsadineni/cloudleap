import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { getBlogPosts, getBlogPostBySlug } from '../../utils/api';

export default function BlogPost({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            {post.title}
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              {/* Placeholder for author image */}
              <div className="absolute inset-0 bg-blue-400 flex items-center justify-center">
                <span className="text-white text-xs">{post.author[0]}</span>
              </div>
            </div>
            <div className="text-blue-100">
              <div className="font-medium">{post.author}</div>
              <div className="text-sm">{new Date(post.date).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
            {/* Placeholder for blog post image */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Blog Post Image</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const posts = await getBlogPosts();
  
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // { fallback: true } would generate the page on-demand
  return { paths, fallback: 'blocking' };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  
  // If no post is found, return 404 page
  if (!post) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      post,
    },
    // Re-generate the post at most once per 10 minutes
    // if a request comes in
    revalidate: 60 * 10, // In seconds
  };
} 