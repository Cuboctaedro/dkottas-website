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
    <nav className="gutter w-full">
      <ul className="flex flex-row justify-end  lowercase">
        {prev !== null && (
          <li className="">
            <Link
              href={type === 'project' ? `/work/${prev}` : `/blog/${prev}`}
              title="Go to previous"
            >
              <ArrowLeftIcon />
              <span>Previous</span>
            </Link>
          </li>
        )}
        <li className="pl-6">
          <Link
            href={type === 'project' ? '/work' : '/blog'}
            title={`Go to ${type === 'project' ? 'Work page' : 'Blog'}`}
          >
            <ArrowUpIcon />
            <span>{`${type === 'project' ? 'Work' : 'Blog'}`}</span>
          </Link>
        </li>
        {next !== null && (
          <li className="">
            <Link href={type === 'project' ? `/work/${next}` : `/blog/${next}`} title="Go to next">
              <ArrowRightIcon />
              <span>Next</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
