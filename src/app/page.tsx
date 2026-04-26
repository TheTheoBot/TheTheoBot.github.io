import { Chip, Divider } from "@heroui/react";
import { ArrowRight, BookMarked, BrainCircuit, Sparkles } from "lucide-react";
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
          <p className="text-sm text-slate-700 dark:text-slate-300">Tägliche Cross-Disciplinary Artikel als statischer GitHub-Pages-Blog</p>
        </div>
        <ThemeToggle />
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/70 p-8 shadow-xl shadow-slate-950/5 backdrop-blur dark:bg-white/[0.04] md:p-10">
          <Chip className="border border-secondary/20 bg-secondary/10 text-secondary" radius="full" variant="flat">
            Inspiriert von Yubal + gebaut mit HeroUI
          </Chip>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-6xl">
            Ein ruhiger Ort für tägliches Lernen über die Ränder des eigenen Fachgebiets hinaus.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Jeden Morgen landet hier derselbe Lernartikel, der auch per Telegram kommt: auf Deutsch, mit seriösen Quellen, nützlichem Transfer und genug Tiefe, um das Gehirn sanft aus dem Projektkeller zu holen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5" href={featured ? `/articles/${featured.slug}` : "/"}>
              Aktuellen Artikel lesen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:text-slate-200" href="#latest">
              Archiv ansehen
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-medium text-slate-900 dark:text-white">Themenmix mit System</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Psychologie, Systeme, Geschichte, Forschung, Technik — ohne wilde Themensprünge ins Absurde.</p>
            </div>
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <BookMarked className="h-5 w-5 text-secondary" />
              <h2 className="mt-3 font-medium text-slate-900 dark:text-white">Markdown als Quelle</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Jeder Artikel liegt als `.md` Datei im Repo und kann transparent versioniert, geprüft und erweitert werden.</p>
            </div>
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-medium text-slate-900 dark:text-white">Hell / Dunkel</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Weil man Wissen morgens, nachts und im Tunnel gleichermaßen lesen können sollte.</p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-slate-100 shadow-xl shadow-slate-950/20 dark:bg-[#050816]">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Publishing Flow</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">Wie der Blog befüllt wird</h2>
          <ol className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
            <li><span className="font-medium text-white">1.</span> Der Daily Job erstellt morgens einen Lernartikel auf Deutsch.</li>
            <li><span className="font-medium text-white">2.</span> Der Artikel wird als Markdown-Datei mit Frontmatter ins Repo geschrieben.</li>
            <li><span className="font-medium text-white">3.</span> GitHub Pages baut die statische Seite neu und veröffentlicht sie automatisch.</li>
          </ol>
          <Divider className="my-6 bg-white/10" />
          <p className="text-sm leading-7 text-slate-300">Das Setup bleibt absichtlich schlicht: GitHub als Versionierung, Markdown als Source of Truth, Next.js als Renderer. Sehr wenig Magie, was ausnahmsweise angenehm ist.</p>
        </aside>
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
