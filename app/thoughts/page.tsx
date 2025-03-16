import { getAllBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Thoughts on design, development, and creative processes.',
  title: 'Thoughts',
};

export default function ThoughtsPage() {
  const posts = getAllBlogPosts();
  
  return (
    <div className="mx-auto w-full max-w-[800px] space-y-8 px-8">
      <div className="mb-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-secondary hover:text-primary transition-colors duration-150 flex items-center gap-1"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to home
        </Link>
      </div>
      
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Thoughts</h1>
        <p className="text-secondary">
          Thoughts on design, development, and creative processes.
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/thoughts/${post.slug}`}
            className="group flex flex-col gap-2 transition-opacity duration-150 hover:opacity-70"
          >
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-medium text-secondary group-hover:text-primary transition-colors duration-150 max-w-[75%]">
                {post.title}
              </h2>
              <span className="text-quaternary text-sm whitespace-nowrap">
                {formatDate(post.date)}
              </span>
            </div>
            <p className="text-tertiary">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 