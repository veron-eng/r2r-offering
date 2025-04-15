import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortableText from "@/components/PortableText";
import { getPostBySlug, getPostPaths, urlFor } from "@/lib/sanity";

export const revalidate = 60; // Revalidate the page every 60 seconds

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Rent Press Blog",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: `${post.title} | Rent Press Blog`,
    description: post.excerpt || "Read our latest insights on rent-to-rent property management.",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage 
        ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }] 
        : [],
    },
  };
}

export async function generateStaticParams() {
  // This generates all pages at build time if you're using static site generation
  const posts = await getPostPaths();
  return posts;
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <main>
      <Header />
      
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Post header */}
        <div className="mb-8 sm:mb-12">
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.categories.map((category) => (
                <span key={category} className="badge badge-primary">
                  {category}
                </span>
              ))}
            </div>
          )}
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-sm opacity-75">
            <span>By {post.author || "Rent Press Team"}</span>
            <span>•</span>
            <span>
              {post.publishedAt 
                ? format(new Date(post.publishedAt), 'dd MMMM yyyy')
                : 'No date'}
            </span>
          </div>
        </div>
        
        {/* Featured image */}
        {post.mainImage && (
          <div className="mb-10 sm:mb-16 relative w-full h-64 sm:h-96">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        )}
        
        {/* Post content */}
        <div className="prose lg:prose-lg max-w-none">
          {post.excerpt && (
            <p className="text-xl font-medium mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}
          
          <PortableText content={post.body} />
        </div>
      </article>
      
      <Footer />
    </main>
  );
} 