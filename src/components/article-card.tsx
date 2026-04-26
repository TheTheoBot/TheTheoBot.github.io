import Link from "next/link";
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { Article } from "@/types/article";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link className="block" href={`/articles/${article.slug}`}>
      <Card
        className={[
          "group min-h-[260px] border border-slate-200/70 bg-white/75 backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/50 dark:border-white/10 dark:bg-white/[0.04]",
          featured ? "min-h-[320px]" : "",
        ].join(" ")}
        shadow="sm"
      >
        <CardHeader className="flex items-start justify-between gap-4 pb-0">
          <div className="space-y-3">
            <Chip className="border border-primary/15 bg-primary/10 text-primary dark:border-primary/20 dark:bg-primary/10" radius="full" size="sm" variant="flat">
              {article.topic}
            </Chip>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{article.date}</p>
              <h2 className={featured ? "mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white" : "mt-2 text-xl font-semibold tracking-tight text-slate-950 dark:text-white"}>
                {article.title}
              </h2>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </CardHeader>
        <CardBody className="justify-between gap-5">
          <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{article.teaser}</p>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Chip key={tag} className="border border-slate-200 bg-white/80 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300" radius="full" size="sm" variant="bordered">
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
