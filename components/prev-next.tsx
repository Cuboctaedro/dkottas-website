import { ArrowLeftIcon } from '@/icons/arrow-left-icon'
import { ArrowRightIcon } from '@/icons/arrow-right-icon'
import { ArrowUpIcon } from '@/icons/arrow-up-icon'
import Link from 'next/link'

interface PrevNextProps {
  prev: string | null
  next: string | null
  type: 'post' | 'project'
}

export const PrevNext = ({ prev, next, type }: PrevNextProps) => {
  return (
    <nav className="px-3 w-full">
      <ul className="flex flex-row justify-end text-gray-400 gap-2">
        {next !== null && (
          <li className="">
            <Link
              href={type === 'project' ? `/work/${next}` : `/blog/${next}`}
              className="hover:text-gray-800 transition-colors"
            >
              <ArrowLeftIcon />
              <span className="sr-only">{`More recent ${
                type === 'post' ? 'posts' : 'projects'
              }`}</span>
            </Link>
          </li>
        )}
        <li className="">
          <Link
            href={type === 'project' ? '/work' : '/blog'}
            className="hover:text-gray-800 transition-colors"
          >
            <ArrowUpIcon />
            <span className="sr-only">{`Go to ${
              type === 'project' ? 'Projects page' : 'Blog'
            }`}</span>
          </Link>
        </li>
        {prev !== null && (
          <li className="">
            <Link
              href={type === 'project' ? `/work/${prev}` : `/blog/${prev}`}
              className="hover:text-gray-800 transition-colors"
            >
              <ArrowRightIcon />
              <span className="sr-only">{`Older ${type === 'post' ? 'posts' : 'projects'}`}</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
