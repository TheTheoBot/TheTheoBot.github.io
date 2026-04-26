import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { getAllArticles } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const latest = articles.slice(1);

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-6 md:px-8 lg:px-10">
      <header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/60 px-4 py-3 shadow-sm backdrop-blur dark:bg-white/[0.03]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Theo Learning Journal</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">Gedanken, Modelle und Themen mit Transferwert</p>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-[2rem] border border-white/10 bg-white/70 px-8 py-10 shadow-xl shadow-slate-950/5 backdrop-blur dark:bg-white/[0.04] md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary/80 dark:text-primary/90">
            Lesen, lernen, klarer denken
          </p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 dark:text-white md:text-6xl lg:text-7xl">
            Ein ruhiger Ort für tägliches Lernen über die Ränder des eigenen Fachgebiets hinaus.
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Hier sammeln sich Artikel über Ideen, Systeme und Beobachtungen, die helfen können, klarer zu denken, besser zu entscheiden und mit etwas mehr Neugier auf die Welt zu schauen.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5" href={featured ? `/articles/${featured.slug}` : "/"}>
            Aktuellen Artikel lesen
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:text-slate-200" href="#latest">
            Archiv ansehen
          </Link>
        </div>
      </section>

      {featured ? (
        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Featured</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Heute im Fokus</h2>
            </div>
          </div>
          <ArticleCard article={featured} featured />
        </section>
      ) : null}

      <section className="mt-12" id="latest">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Archiv</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Weitere Artikel</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}
