import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Rent Press Blog | R2R Property Management Insights",
  description: "Expert advice and insights on rent-to-rent property management, tenant acquisition, and growing your R2R business.",
  keywords: "rent to rent blog, R2R property management, tenant acquisition, property marketing",
};

async function getBlogPosts() {
  // In production, you'd fetch from your API
  // For now, we'll use sample data
  const posts = [
    {
      id: 1,
      title: "5 Tips for Finding Great R2R Properties",
      slug: "finding-great-r2r-properties",
      excerpt: "Discover the best strategies for finding high-quality rent-to-rent properties in your area.",
      publishedAt: "2023-05-15",
      tags: ["r2r", "property search", "landlords"]
    },
    {
      id: 2,
      title: "How to Attract Premium Tenants to Your R2R Properties",
      slug: "attract-premium-tenants",
      excerpt: "Learn proven techniques to attract and retain high-quality tenants who pay on time.",
      publishedAt: "2023-06-02",
      tags: ["tenants", "property management", "r2r"]
    },
    {
      id: 3,
      title: "Building Trust with Landlords: A Guide for R2R Operators",
      slug: "building-trust-with-landlords",
      excerpt: "Learn how to establish strong relationships with property owners to grow your R2R portfolio.",
      publishedAt: "2023-07-10",
      tags: ["landlords", "r2r business", "property management"]
    }
  ];
  
  return posts;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  return (
    <main>
      <Header />
      
      <section className="px-4 sm:px-8 py-16 sm:py-32 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-center">Rent-to-Rent Insights</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">Expert advice and insights on managing your rent-to-rent business, finding properties, and attracting quality tenants.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-base-200 rounded-xl overflow-hidden">
              <div className="aspect-video bg-base-300"></div>
              <div className="p-6">
                <div className="flex gap-2 mb-2">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="badge badge-primary">{tag}</span>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="opacity-75 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-60">{post.publishedAt}</span>
                  <Link href={`/blog/${post.slug}`} className="btn btn-sm btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 