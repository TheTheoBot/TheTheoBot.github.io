import { ArrowRight, Rss } from "lucide-react";
import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { getAllArticles } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();
  const featured = articles[0];
  const latest = articles.slice(1);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-4 sm:px-6 sm:pt-6 lg:px-8">
      <header className="mb-8 flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:mb-10 sm:px-5">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Theo Learning Journal
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 sm:text-[13px]">
            Tägliche Lernnotizen mit Transferwert.
          </p>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-[1.75rem] border border-white/10 bg-white/75 px-5 py-8 shadow-xl shadow-slate-950/5 backdrop-blur dark:bg-white/[0.04] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="max-w-4xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary/80 dark:text-primary/90 sm:text-sm">
            Lesen, lernen, klarer denken
          </p>
          <h1 className="mt-4 max-w-4xl text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 dark:text-white sm:mt-5 sm:text-5xl md:text-6xl">
            Ein ruhiger Ort für tägliches Lernen über die Ränder des eigenen Fachgebiets hinaus.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            Hier sammeln sich Artikel über Ideen, Systeme und Beobachtungen, die helfen können, klarer zu denken, besser zu entscheiden und mit etwas mehr Neugier auf die Welt zu schauen.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            href={featured ? `/articles/${featured.slug}` : "/"}
          >
            Aktuellen Artikel lesen
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:text-slate-200"
            href="#latest"
          >
            Archiv ansehen
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300/90 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:text-slate-200"
            href="/feed.xml"
          >
            <Rss className="h-4 w-4" />
            RSS abonnieren
          </Link>
        </div>
      </section>

      {featured ? (
        <section className="mt-10 sm:mt-12">
          <div className="mb-5 sm:mb-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 sm:text-xs">
              Featured
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white sm:text-[2rem]">
              Heute im Fokus
            </h2>
          </div>
          <ArticleCard article={featured} featured />
        </section>
      ) : null}

      <section className="mt-10 sm:mt-12" id="latest">
        <div className="mb-5 sm:mb-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 sm:text-xs">
            Archiv
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white sm:text-[2rem]">
            Weitere Artikel
          </h2>
        </div>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}
