import { NextResponse } from 'next/server';

export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://rent-press.com';
  
  // Get the current date in the format required for the sitemap
  const date = new Date().toISOString();
  
  // Define your pages
  const pages = [
    { url: `${baseUrl}`, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/blog`, priority: '0.9', changefreq: 'daily' },
    { url: `${baseUrl}/features`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/pricing`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/faq`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: '0.7', changefreq: 'monthly' },
  ];
  
  // Sample blog posts - in a real app, these would be fetched from your API/database
  const blogPosts = [
    { slug: 'finding-great-r2r-properties', date: '2023-05-15' },
    { slug: 'attract-premium-tenants', date: '2023-06-02' },
    { slug: 'building-trust-with-landlords', date: '2023-07-10' },
  ];
  
  // Add blog posts to pages
  blogPosts.forEach(post => {
    pages.push({
      url: `${baseUrl}/blog/${post.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date(post.date).toISOString()
    });
  });

  // Generate the XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || date}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  // Return the XML with the appropriate content type
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 