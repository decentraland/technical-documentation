export default function formatPaths(url: string) {
    const normalizedUrl = url.toLowerCase()
    const finalPath =
      process.env.GATSBY_ENV === 'prod'
        ? `https://cdn.decentraland.org/@dcl/docs-site/${process.env.GATSBY_VERSION}/${normalizedUrl}`
        : `/${normalizedUrl}`
    return finalPath
  }