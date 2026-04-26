import { remark } from "remark";
import html from "remark-html";

const processor = remark().use(html);

export async function markdownToHtml(markdown: string) {
  const result = await processor.process(markdown);
  return result.toString();
}

export function markdownToHtmlSync(markdown: string) {
  const result = processor.processSync(markdown);
  return result.toString();
}

export default markdownToHtml;
