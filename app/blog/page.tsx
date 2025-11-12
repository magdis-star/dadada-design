import Link from "next/link";
import { getBlogPosts } from "@/lib/data/blogPosts";

export const metadata = {
  title: "Blog - dadada design | Consejos de Diseño Web y Marketing",
  description: "Aprende sobre diseño web, UX, y estrategias digitales para hacer crecer tu pequeño negocio.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <div className="bg-primary-brand text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Blog
          </h1>
          <p className="text-xl text-gray-100 font-body">
            Consejos prácticos sobre diseño web, UX y estrategia digital para pequeños negocios
          </p>
        </div>
      </div>

      <section className="section-padding bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-body">
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

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary-brand mb-4 hover:text-secondary-brand transition font-heading">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-700 text-lg mb-6 font-body">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-brand font-semibold hover:text-secondary-brand transition font-body"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-xl border-2 border-secondary-brand">
            <h3 className="text-2xl font-bold text-text-dark mb-4 font-heading">
              ¿Listo para transformar tu negocio online?
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-body">
              Si estos consejos te resultan útiles, imagina lo que podemos lograr trabajando juntos en tu proyecto.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-primary-brand hover:bg-opacity-90 shadow-lg transition duration-300 transform hover:scale-105 font-heading"
            >
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
