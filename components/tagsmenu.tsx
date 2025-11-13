'use client'

import { tags } from '@/lib/tags'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const TagsMenu = () => {
  const pathname = usePathname()

  const tagSlug = pathname.split('/').length > 2 ? pathname.split('/')[2] : 'work'

  return (
    <nav className="tagcloud">
      <ul>
        <li className="pb-1">
          <Link
            className={`hover:text-red-700 transition-colors ${tagSlug === 'work' ? 'italic' : ''}`}
            href="<?= $projects->url() ?>"
          >
            All projects
          </Link>
        </li>
        {tags.map((tag) => (
          <li key={tag.slug} className="pb-1">
            <Link
              className={`hover:text-red-700 transition-colors ${
                tagSlug === 'work' ? '' : 'italic'
              }`}
              href={`/work/tags/${tag.slug}`}
            >
              {tag.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
