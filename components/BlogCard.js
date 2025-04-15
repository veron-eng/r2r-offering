import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { format } from 'date-fns';

export default function BlogCard({ post }) {
  return (
    <div className="bg-base-200 rounded-xl overflow-hidden">
      {post.mainImage ? (
        <div className="aspect-video relative">
          <Image
            src={urlFor(post.mainImage).width(600).height(350).url()}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-video bg-base-300"></div>
      )}
      
      <div className="p-6">
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mb-2">
            {post.categories.slice(0, 2).map((category) => (
              <span key={category} className="badge badge-primary">
                {category}
              </span>
            ))}
          </div>
        )}
        
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        
        {post.excerpt && (
          <p className="opacity-75 mb-4">{post.excerpt}</p>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-60">
            {post.publishedAt 
              ? format(new Date(post.publishedAt), 'dd MMM yyyy')
              : 'No date'}
          </span>
          <Link href={`/blogs/${post.slug.current}`} className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
} 