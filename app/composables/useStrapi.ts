export const useStrapi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.strapiUrl as string

  const find = (endpoint: string, query: Record<string, any> = {}) => {
    return $fetch(`${baseURL}/api/${endpoint}`, { query })
  }

  return { find }
}

export const useStrapiMedia = (url?: string) => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  const config = useRuntimeConfig()
  return `${config.public.strapiUrl}${url}`
}