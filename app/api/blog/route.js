export async function GET() {
  // This would typically fetch from a database
  // For now, we'll return sample blog posts
  const posts = [
    {
      id: 1,
      title: "5 Tips for Finding Great R2R Properties",
      slug: "finding-great-r2r-properties",
      excerpt: "Discover the best strategies for finding high-quality rent-to-rent properties in your area.",
      content: "Content would go here...",
      publishedAt: "2023-05-15",
      tags: ["r2r", "property search", "landlords"]
    },
    {
      id: 2,
      title: "How to Attract Premium Tenants to Your R2R Properties",
      slug: "attract-premium-tenants",
      excerpt: "Learn proven techniques to attract and retain high-quality tenants who pay on time.",
      content: "Content would go here...",
      publishedAt: "2023-06-02",
      tags: ["tenants", "property management", "r2r"]
    }
  ];

  return Response.json({ posts });
} 