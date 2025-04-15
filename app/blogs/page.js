import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/sanity";

export const metadata = {
  title: "Rent Press Blog | R2R Property Management Insights",
  description: "Expert advice and insights on rent-to-rent property management, tenant acquisition, and growing your R2R business.",
  keywords: "rent to rent blog, R2R property management, tenant acquisition, property marketing",
};

export const revalidate = 60; // Revalidate the page every 60 seconds

export default async function BlogsPage() {
  const posts = await getAllPosts();
  
  return (
    <main>
      <Header />
      
      <section className="px-4 sm:px-8 py-16 sm:py-32 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-center">Rent-to-Rent Insights</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto">Expert advice and insights on managing your rent-to-rent business, finding properties, and attracting quality tenants.</p>
        
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">No posts yet</h2>
            <p className="opacity-75">Check back soon for insightful articles about the R2R industry.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </section>
      
      <Footer />
    </main>
  );
} 