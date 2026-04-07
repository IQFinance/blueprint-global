import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Blog',
  description: 'Insights on global wealth strategy, tax residency, second citizenship, crypto structuring, and international planning.',
};

function getPosts() {
  const indexPath = path.join(process.cwd(), 'content/blog/_index.json');
  try {
    if (fs.existsSync(indexPath)) {
      return JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    }
  } catch {}
  return [];
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="bg-ink min-h-screen font-sans selection:bg-bronze/30 selection:text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-data text-sm uppercase tracking-[0.2em] text-bronze mb-6">Blog</h1>
          <h2 className="text-4xl md:text-5xl font-drama font-normal tracking-tight text-surface mb-12">
            Insights & Strategy
          </h2>

          {posts.length === 0 ? (
            <div className="border border-surface/10 rounded-2xl p-12 text-center">
              <p className="text-surface/60 font-sans text-lg">
                Articles coming soon. Subscribe to be notified.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-surface/10 rounded-2xl p-8 hover:border-bronze/30 transition-colors group"
                >
                  <p className="font-data text-xs uppercase tracking-widest text-bronze mb-3">
                    {post.date} {post.cluster && <span className="text-surface/30 ml-2">{post.cluster}</span>}
                  </p>
                  <h3 className="text-xl md:text-2xl font-sans font-medium text-surface mb-2 group-hover:text-bronze transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-surface/60 font-sans text-[15px] leading-relaxed">
                    {post.description}
                  </p>
                  {post.readTime && (
                    <p className="font-data text-xs text-surface/30 mt-4">{post.readTime} min read</p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
