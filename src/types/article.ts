export type ArticleSource = {
  title: string;
  url: string;
  trust: string;
};

export type ArticleFrontmatter = {
  title: string;
  date: string;
  teaser: string;
  topic: string;
  readingTime: string;
  tags: string[];
  sources: ArticleSource[];
  furtherReading: ArticleSource[];
};

export type Article = ArticleFrontmatter & {
  slug: string;
  content: string;
};
