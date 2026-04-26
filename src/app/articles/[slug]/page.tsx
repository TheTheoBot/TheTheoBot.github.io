import { Chip } from "@heroui/react";
import { ArrowLeft, BookOpenText, CalendarDays, ExternalLink, Tags } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const content = await markdownToHtml(article.content);
  const visibleTags = article.tags.slice(0, 4);
  const hiddenTags = article.tags.length - visibleTags.length;

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-6 lg:px-8">
      <header className="mb-8 flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] sm:mb-10 sm:px-5">
        <Link
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-black/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
          href="/"
        >
          <ArrowLeft className="h-4 w-4" />
          Zur Übersicht
        </Link>
        <ThemeToggle />
      </header>

      <article className="rounded-[1.75rem] border border-white/10 bg-white/80 px-5 py-6 shadow-xl shadow-slate-950/5 backdrop-blur dark:bg-white/[0.04] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <Chip
              className="min-h-8 border border-primary/15 bg-primary/10 px-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-primary dark:border-primary/20 dark:bg-primary/10"
              radius="full"
              size="sm"
              variant="flat"
            >
              {article.topic}
            </Chip>
            {visibleTags.map((tag) => (
              <Chip
                key={tag}
                className="min-h-8 border border-slate-200 bg-white px-1.5 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                radius="full"
                size="sm"
                variant="bordered"
              >
                {tag}
              </Chip>
            ))}
            {hiddenTags > 0 ? (
              <Chip
                className="min-h-8 border border-slate-200/80 bg-slate-50 px-1.5 text-slate-500 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400"
                radius="full"
                size="sm"
                variant="bordered"
              >
                +{hiddenTags}
              </Chip>
            ) : null}
          </div>

          <h1 className="mt-5 max-w-4xl text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            {article.teaser}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <CalendarDays className="h-4 w-4" />
                Datum
              </div>
              <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">{article.date}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <BookOpenText className="h-4 w-4" />
                Lesedauer
              </div>
              <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">{article.readingTime}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <Tags className="h-4 w-4" />
                Fokus
              </div>
              <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">{article.topic}</p>
            </div>
          </div>

          <section className="mt-8 rounded-[1.5rem] border border-primary/15 bg-primary/[0.07] px-5 py-5 dark:border-primary/15 dark:bg-primary/[0.08] sm:px-6 sm:py-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary/80 dark:text-primary/90">
              Im Überblick
            </p>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-700 dark:text-slate-200 sm:text-base sm:leading-8">
              Dieser Artikel ordnet ein Konzept ein, erklärt den zugrunde liegenden Mechanismus und übersetzt die Idee in konkrete Relevanz für Entscheidungen, Priorisierung und tägliche Wissensarbeit.
            </p>
          </section>
        </div>

        <div className="mx-auto mt-10 h-px max-w-4xl bg-gradient-to-r from-transparent via-slate-300/80 to-transparent dark:via-white/10" />

        <div
          className="article-content mx-auto mt-10 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <section className="mx-auto mt-14 max-w-5xl grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/85 p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
            <div className="flex items-center gap-2">
              <Chip className="border border-primary/15 bg-primary/10 text-primary" radius="full" size="sm" variant="flat">
                Quellen
              </Chip>
              <p className="text-sm text-slate-500 dark:text-slate-400">Belastbare Referenzen zum Thema</p>
            </div>
            <ul className="mt-5 space-y-4">
              {article.sources.map((source) => (
                <li
                  key={source.url}
                  className="rounded-2xl border border-slate-200/70 bg-white px-4 py-4 dark:border-white/10 dark:bg-white/[0.02]"
                >
                  <a
                    className="inline-flex items-start gap-2 text-sm font-semibold leading-6 text-primary hover:underline"
                    href={source.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{source.title}</span>
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" />
                  </a>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{source.trust}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200/70 bg-white/85 p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
            <div className="flex items-center gap-2">
              <Chip className="border border-secondary/15 bg-secondary/10 text-secondary" radius="full" size="sm" variant="flat">
                Weiterlesen
              </Chip>
              <p className="text-sm text-slate-500 dark:text-slate-400">Gute nächste Einstiege</p>
            </div>
            <ul className="mt-5 space-y-4">
              {article.furtherReading.map((source) => (
                <li
                  key={source.url}
                  className="rounded-2xl border border-slate-200/70 bg-white px-4 py-4 dark:border-white/10 dark:bg-white/[0.02]"
                >
                  <a
                    className="inline-flex items-start gap-2 text-sm font-semibold leading-6 text-primary hover:underline"
                    href={source.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{source.title}</span>
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" />
                  </a>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{source.trust}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return {
    title: `${article.title} | Theo Learning Journal`,
    description: article.teaser,
  };
}
