interface HeadingOneProps {
  level: 1 | 2
  children: React.ReactNode
}

export const HeadingOne = ({ level, children }: HeadingOneProps) => {
  if (level === 1) {
    return (
      <h1 className="text-3xl border-t-red-400 border-t border-solid pt-2 leading-tight font-light font-serif">
        {children}
      </h1>
    )
  }
  return (
    <h2 className="text-3xl border-t-red-400 border-t border-solid pt-2 leading-tight font-light font-serif">
      {children}
    </h2>
  )
}
