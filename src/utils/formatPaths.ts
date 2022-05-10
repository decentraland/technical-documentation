export default function formatPaths(url: string) {
  const normalizedUrl = url.toLowerCase()
  const finalPath =
    process.env.GATSBY_ENV === 'prod'
      ? `${process.env.GATSBY_PUBLIC_URL}/${normalizedUrl}`
      : `/${normalizedUrl}`
  return finalPath
}