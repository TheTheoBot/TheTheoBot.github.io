import Link from "next/link";
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { Article } from "@/types/article";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const visibleTags = article.tags.slice(0, featured ? 4 : 3);
  const hiddenTags = article.tags.length - visibleTags.length;

  return (
    <Link className="block" href={`/articles/${article.slug}`}>
      <Card
        className={[
          "group overflow-hidden border border-slate-200/70 bg-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.04] dark:hover:shadow-black/10",
          featured ? "md:min-h-[360px]" : "md:min-h-[280px]",
        ].join(" ")}
        shadow="sm"
      >
        <CardHeader className="px-5 pb-0 pt-5 sm:px-6 sm:pt-6 md:px-7 md:pt-7">
          <div className="flex min-w-0 items-start justify-between gap-3">
            <div className="min-w-0 space-y-3 sm:space-y-4">
              <Chip
                className="min-h-8 border border-primary/15 bg-primary/10 px-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-primary dark:border-primary/20 dark:bg-primary/10"
                radius="full"
                size="sm"
                variant="flat"
              >
                {article.topic}
              </Chip>
              <div className="space-y-2.5 sm:space-y-3">
                <p className="text-sm text-slate-500 dark:text-slate-400">{article.date}</p>
                <h2
                  className={featured
                    ? "max-w-3xl text-2xl font-semibold leading-[1.12] tracking-[-0.03em] text-slate-950 line-clamp-3 dark:text-white sm:text-[2rem] md:text-[2.35rem]"
                    : "text-xl font-semibold leading-[1.2] tracking-[-0.025em] text-slate-950 line-clamp-2 dark:text-white sm:text-2xl"}
                >
                  {article.title}
                </h2>
              </div>
            </div>
            <ArrowUpRight className="mt-1 hidden h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
          </div>
        </CardHeader>

        <CardBody className="gap-6 px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7">
          <p
            className={featured
              ? "max-w-3xl text-[15px] leading-7 text-slate-600 line-clamp-3 dark:text-slate-300 sm:text-base"
              : "text-sm leading-7 text-slate-600 line-clamp-3 dark:text-slate-300"}
          >
            {article.teaser}
          </p>

          <div className="mt-auto flex flex-col gap-4">
            <div className="flex flex-wrap gap-2.5">
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

            <div className="flex min-h-6 items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Clock3 className="h-4 w-4 shrink-0" />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
