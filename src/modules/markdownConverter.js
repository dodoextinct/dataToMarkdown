import ejs from "ejs";
import { marked } from "marked";

export function convertToMarkdown(template, data) {
  const compiledTemplate = ejs.render(template.content, { data });
  return marked(compiledTemplate);
}
