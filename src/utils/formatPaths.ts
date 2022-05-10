export default function formatPaths(url: string) {
  console.log({ envs: process.env }, process.env.GATSBY_ENV, process.env.GATSBY_PUBLIC_URL)
  const normalizedUrl = url.toLowerCase()
  const finalPath =
    process.env.GATSBY_ENV === 'prod'
      ? `${process.env.GATSBY_PUBLIC_URL}/${normalizedUrl}`
      : `/${normalizedUrl}`
  return finalPath
}