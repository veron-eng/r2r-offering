import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Post Not Found | Rent Press Blog",
  description: "The blog post you're looking for could not be found.",
};

export default function BlogNotFound() {
  return (
    <main>
      <Header />
      
      <section className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-bold mb-6">Blog Post Not Found</h2>
        <p className="mb-8 text-lg opacity-75">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/blogs" className="btn btn-primary">
          Return to Blog
        </Link>
      </section>
      
      <Footer />
    </main>
  );
} 