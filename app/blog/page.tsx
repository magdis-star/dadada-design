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

      <section className="section-padding bg-white">
        <div className="max-w-[728px] mx-auto px-6">
          <div className="divide-y divide-gray-200">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="py-12 hover:bg-gray-50 transition-colors duration-200"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3 font-body">
                    <span className="text-xs font-normal">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span className="text-xs font-normal">{post.readTime} de lectura</span>
                  </div>

                  <h2
                    className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors leading-tight font-body"
                    style={{
                      letterSpacing: '-0.019em'
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    className="text-gray-600 mb-4 leading-relaxed font-body"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5'
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full font-body"
                    >
                      {post.category}
                    </span>
                  </div>
                </Link>
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
