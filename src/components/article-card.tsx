import Link from "next/link";
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { Article } from "@/types/article";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link className="block" href={`/articles/${article.slug}`}>
      <Card
        className={[
          "group overflow-hidden border border-slate-200/70 bg-white/75 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.04]",
          featured ? "min-h-[360px]" : "min-h-[300px]",
        ].join(" ")}
        shadow="sm"
      >
        <CardHeader className="flex items-start justify-between gap-4 px-6 pb-0 pt-6 md:px-7 md:pt-7">
          <div className="min-w-0 space-y-4">
            <Chip className="border border-primary/15 bg-primary/10 px-1 text-primary dark:border-primary/20 dark:bg-primary/10" radius="full" size="sm" variant="flat">
              {article.topic}
            </Chip>
            <div className="space-y-3">
              <p className="text-sm text-slate-500 dark:text-slate-400">{article.date}</p>
              <h2
                className={featured
                  ? "max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 line-clamp-3 dark:text-white md:text-[2rem]"
                  : "text-xl font-semibold leading-snug tracking-tight text-slate-950 line-clamp-3 dark:text-white"}
              >
                {article.title}
              </h2>
            </div>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </CardHeader>
        <CardBody className="justify-between gap-6 px-6 py-6 md:px-7 md:py-7">
          <p
            className={featured
              ? "max-w-3xl text-[15px] leading-7 text-slate-600 line-clamp-3 dark:text-slate-300"
              : "text-sm leading-7 text-slate-600 line-clamp-3 dark:text-slate-300"}
          >
            {article.teaser}
          </p>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2.5">
              {article.tags.map((tag) => (
                <Chip
                  key={tag}
                  className="border border-slate-200 bg-white/80 px-1 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                  radius="full"
                  size="sm"
                  variant="bordered"
                >
                  {tag}
                </Chip>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Clock3 className="h-4 w-4" />
              <span>{article.readingTime}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
