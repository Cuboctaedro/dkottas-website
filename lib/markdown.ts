import markdownit from 'markdown-it'
import mila from 'markdown-it-link-attributes'
import sanitizeHtml from 'sanitize-html'

const md = markdownit({ html: true })

md.use(mila, {
  matcher(href: string) {
    return href.startsWith('https:')
  },
  attrs: {
    target: '_blank',
    rel: 'noopener',
  },
})

export const markdownToHtml = async (markdown: string) => {
  const html = await md.render(markdown)
  return html
}

export const markdownToText = async (markdown: string) => {
  const html = await md.render(markdown)
  const text = sanitizeHtml(html, {
    allowedTags: [],
    allowedAttributes: {},
  })
  return text
}
