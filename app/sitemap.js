export default async function sitemap() {
  const baseUrl = 'https://rent-press.com';
  
  // Define your main pages
  const routes = ['', '/features', '/how-it-works', '/pricing', '/faq', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  return routes;
} 