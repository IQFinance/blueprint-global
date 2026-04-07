import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

function getPost(slug) {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.description || post.title,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="bg-ink min-h-screen font-sans selection:bg-bronze/30 selection:text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <article className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="font-data text-xs uppercase tracking-widest text-bronze mb-4">{post.date} {post.cluster && `\u00b7 ${post.cluster}`}</p>
            <h1 className="text-3xl md:text-5xl font-drama font-normal tracking-tight text-surface mb-6">{post.title}</h1>
            {post.description && <p className="text-surface/60 font-sans text-lg leading-relaxed">{post.description}</p>}
          </div>

          <div
            className="prose prose-invert prose-bronze max-w-none font-sans text-surface/80 leading-relaxed [&_h2]:text-surface [&_h2]:font-sans [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-surface [&_h3]:font-sans [&_a]:text-bronze [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="mt-16 pt-8 border-t border-surface/10">
            <p className="text-surface/30 font-sans text-xs leading-relaxed">
              Blueprint Global coordinates international structuring and project-manages the implementation process. We do not provide tax, legal, investment, or immigration advice. All advisory services are delivered by licensed professionals in their respective jurisdictions.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
