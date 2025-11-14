export const trimText = (text: string, length: number = 150) => {
  const trimmed = text.slice(0, length)
  const space = trimmed.lastIndexOf(' ')
  return trimmed.slice(0, space)
}
