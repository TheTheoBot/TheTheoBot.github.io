import { Chip } from "@heroui/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pb-16 pt-6 md:px-8">
      <header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/60 px-4 py-3 shadow-sm backdrop-blur dark:bg-white/[0.03]">
        <Link className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-black/5 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white" href="/">
          <ArrowLeft className="h-4 w-4" />
          Zur Übersicht
        </Link>
        <ThemeToggle />
      </header>

      <article className="rounded-[2rem] border border-white/10 bg-white/75 p-8 shadow-xl shadow-slate-950/5 backdrop-blur dark:bg-white/[0.04] md:p-10">
        <div className="flex flex-wrap gap-2">
          <Chip className="border border-primary/15 bg-primary/10 text-primary" radius="full" variant="flat">
            {article.topic}
          </Chip>
          {article.tags.map((tag) => (
            <Chip key={tag} className="border border-slate-200 bg-white/80 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300" radius="full" size="sm" variant="bordered">
              {tag}
            </Chip>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">{article.date} · {article.readingTime}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl">{article.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{article.teaser}</p>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:text-primary prose-strong:text-slate-950 dark:prose-invert dark:prose-strong:text-white" dangerouslySetInnerHTML={{ __html: content }} />

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Quellen</h2>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a className="inline-flex items-center gap-2 font-medium text-primary hover:underline" href={source.url} rel="noreferrer" target="_blank">
                    {source.title}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p>{source.trust}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Weiterlesen</h2>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {article.furtherReading.map((source) => (
                <li key={source.url}>
                  <a className="inline-flex items-center gap-2 font-medium text-primary hover:underline" href={source.url} rel="noreferrer" target="_blank">
                    {source.title}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <p>{source.trust}</p>
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
