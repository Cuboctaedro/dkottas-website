import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

export const markdownToHtml = async (markdown: string) => {
  const html = await marked.parse(markdown)
  return html
}

export const markdownToText = async (markdown: string) => {
  const html = await marked.parse(markdown)
  const text = sanitizeHtml(html, {
    allowedTags: [],
    allowedAttributes: {},
  })
  return text
}
