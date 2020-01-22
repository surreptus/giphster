import { API_URL, PAGE_SIZE } from 'support/constants'

const BASE_PARAMS = new URLSearchParams()

BASE_PARAMS.append('api_key', `${process.env.REACT_APP_API_KEY}`)
BASE_PARAMS.append('limit', `${PAGE_SIZE}`)

/**
 * fetches either the trending or search endpoint for giphy based on whether
 * we have a query key in the options
 */

interface Options {
  offset: number;
  query?: string;
}

export const read = async (options: Options) => {
  const params = new URLSearchParams(BASE_PARAMS)
  params.append('offset', `${options.offset}`)
  params.append('q', `${options.query || ''}`)

  const path = options.query
    ? `gifs/search`
    : `gifs/trending`

  try {
    const response = await fetch(`${API_URL}${path}?${params}`)

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    const json = await response.json()

    return json
  } catch (error) {
    throw new Error('failed')
  }
}
