import axios, { AxiosError, AxiosRequestConfig } from 'axios'

export async function getAnime(): Promise<any> {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://animechan.vercel.app/api/random',
  }

  try {
    const res = await axios(config)
    return res.data
  } catch (e: any) {
    if (e instanceof AxiosError) {
      throw {
        error: 'Failed to get an anime',
        message: e.message,
        url: e.config?.url,
      }
    }
    throw e
  }
}
