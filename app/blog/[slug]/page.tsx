import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/data/blogPosts";

function formatMarkdown(content: string): string {
  let html = content;

  // Handle headings
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Handle bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Handle lists - improved version
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  html = html.replace(/<\/ul>\n<ul>/gim, '\n');

  // Handle numbered lists
  html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');

  // Handle images and links
  html = html.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2" class="rounded-lg shadow-md my-8" />');
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  // Handle paragraphs
  html = html.replace(/\n\n/gim, '</p><p>');
  html = html.replace(/^(?!<[h|p|u|o|l])(.*$)/gim, '<p>$1</p>');
  html = html.replace(/<p><\/p>/gim, '');
  html = html.replace(/<p>(<[h|u|o])/gim, '$1');
  html = html.replace(/(<\/[h|u|o].*>)<\/p>/gim, '$1');

  return html;
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

        <div className="max-w-[680px] mx-auto px-6 py-16">
          <style dangerouslySetInnerHTML={{ __html: `
            .medium-content {
              font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
              font-size: 21px;
              line-height: 1.58;
              letter-spacing: -0.003em;
              color: #242424;
            }
            .medium-content h1 {
              font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-size: 40px;
              font-weight: 700;
              line-height: 1.2;
              letter-spacing: -0.022em;
              color: #242424;
              margin-bottom: 0.5em;
              margin-top: 1.5em;
            }
            .medium-content h2 {
              font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-size: 32px;
              font-weight: 700;
              line-height: 1.25;
              letter-spacing: -0.019em;
              color: #242424;
              margin-top: 2em;
              margin-bottom: 0.46em;
            }
            .medium-content h3 {
              font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-size: 26px;
              font-weight: 700;
              line-height: 1.3;
              letter-spacing: -0.014em;
              color: #242424;
              margin-top: 1.8em;
              margin-bottom: 0.46em;
            }
            .medium-content p {
              margin-bottom: 1.25em;
              margin-top: 0;
            }
            .medium-content strong {
              font-weight: 700;
              color: inherit;
            }
            .medium-content em {
              font-style: italic;
            }
            .medium-content a {
              color: inherit;
              text-decoration: underline;
              text-decoration-thickness: 1px;
              text-underline-offset: 2px;
            }
            .medium-content a:hover {
              text-decoration-thickness: 2px;
            }
            .medium-content ul, .medium-content ol {
              margin-top: 1.25em;
              margin-bottom: 1.25em;
              padding-left: 30px;
            }
            .medium-content li {
              margin-bottom: 0.65em;
              padding-left: 0.3em;
            }
            .medium-content blockquote {
              border-left: 3px solid #242424;
              padding-left: 23px;
              margin-left: -23px;
              font-style: italic;
              color: #6B6B6B;
              margin-top: 1.25em;
              margin-bottom: 1.25em;
            }
            .medium-content img {
              max-width: 100%;
              height: auto;
              margin: 2em 0;
            }
          ` }} />

          <article
            className="medium-content"
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
