import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://blueprintglobal.io';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Add blog posts dynamically
  const postsDir = path.join(process.cwd(), 'content/blog');
  let blogPosts = [];
  try {
    if (fs.existsSync(postsDir)) {
      blogPosts = fs.readdirSync(postsDir)
        .filter(f => f.endsWith('.json'))
        .map(f => {
          const post = JSON.parse(fs.readFileSync(path.join(postsDir, f), 'utf8'));
          return {
            url: `${baseUrl}/blog/${f.replace('.json', '')}`,
            lastModified: post.date ? new Date(post.date) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
          };
        });
    }
  } catch {}

  return [...staticPages, ...blogPosts];
}
