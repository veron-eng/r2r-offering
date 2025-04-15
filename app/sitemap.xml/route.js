import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/sanity';

export async function GET() {
  // Base URL for the site
  const baseUrl = 'https://rent-press.com';
  
  // Get the current date in the format required for the sitemap
  const date = new Date().toISOString();
  
  // Define your pages
  const pages = [
    { url: `${baseUrl}`, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/blogs`, priority: '0.9', changefreq: 'daily' },
    { url: `${baseUrl}/features`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/pricing`, priority: '0.8', changefreq: 'monthly' },
    { url: `${baseUrl}/faq`, priority: '0.7', changefreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: '0.7', changefreq: 'monthly' },
  ];
  
  // Get blog posts from Sanity
  try {
    const posts = await getAllPosts();
    
    // Add blog posts to pages
    posts.forEach(post => {
      pages.push({
        url: `${baseUrl}/blogs/${post.slug.current}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: post.publishedAt || date
      });
    });
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    // Fall back to sample blog posts if Sanity fetch fails
    const samplePosts = [
      { slug: { current: 'finding-great-r2r-properties' }, publishedAt: '2023-05-15' },
      { slug: { current: 'attract-premium-tenants' }, publishedAt: '2023-06-02' },
      { slug: { current: 'building-trust-with-landlords' }, publishedAt: '2023-07-10' },
    ];
    
    samplePosts.forEach(post => {
      pages.push({
        url: `${baseUrl}/blogs/${post.slug.current}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: post.publishedAt || date
      });
    });
  }

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