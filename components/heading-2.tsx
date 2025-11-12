interface HeadingTwoProps {
  level: 2 | 3
  children: React.ReactNode
}

export const HeadingTwo = ({ level, children }: HeadingTwoProps) => {
  if (level === 3) {
    return <h3 className="text-base font-bold">{children}</h3>
  }
  return <h2 className="text-base font-bold">{children}</h2>
}
