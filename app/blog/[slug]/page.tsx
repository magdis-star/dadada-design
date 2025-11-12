import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/data/blogPosts";

function formatMarkdown(content: string): string {
  return content
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" />')
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^(?!<[h|p|u|o])(.*$)/gim, '<p>$1</p>')
    .replace(/<p><\/p>/gim, '');
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return {
    title: `${post.title} | Blog - dadada design`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="bg-white">
        <header className="bg-primary-brand text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-100 hover:text-white mb-6 font-body"
            >
              ← Volver al blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-gray-200 mb-6 font-body">
              <span className="bg-secondary-brand text-text-dark px-3 py-1 rounded-full font-semibold">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readTime} de lectura</span>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold mb-4 font-heading">
              {post.title}
            </h1>

            <p className="text-xl text-gray-100 font-body">
              Por {post.author}
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="prose prose-lg max-w-none font-body prose-headings:font-heading prose-headings:text-primary-brand prose-a:text-primary-brand prose-strong:text-text-dark"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-background-light p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-text-dark mb-4 font-heading">
                ¿Te ha resultado útil este artículo?
              </h3>
              <p className="text-gray-700 mb-6 font-body">
                Si tienes preguntas sobre cómo mejorar tu web o quieres discutir tu proyecto, estoy aquí para ayudarte.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-primary-brand hover:bg-opacity-90 shadow-lg transition duration-300 font-heading"
              >
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
