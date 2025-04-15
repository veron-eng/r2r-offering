import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Sanity configuration
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-08-01', // Use the latest API version
  useCdn: process.env.NODE_ENV === 'production',
};

// Create a Sanity client
export const client = createClient(config);

// Set up a helper function for generating image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Helper functions for fetching data from Sanity
export async function getAllPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->name
    }
  `);
}

export async function getPostBySlug(slug) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->name
    }
  `, { slug });
}

export async function getPostPaths() {
  const posts = await client.fetch(`
    *[_type == "post"] {
      "slug": slug.current
    }
  `);
  
  return posts.map(post => ({ slug: post.slug }));
} 