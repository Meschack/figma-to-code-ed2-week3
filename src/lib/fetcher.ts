import { CustomError } from './custom-error'

interface FetcherResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Headers
}

class Fetcher {
  static async get<T = any>(url: string, options?: RequestInit): Promise<FetcherResponse<T>> {
    try {
      const response = await fetch(url, { ...options })

      if (!response.ok) {
        throw new CustomError(`Erreur HTTP! statut: ${response.status}`, response.status)
      }

      const data = (await response.json()) as T

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      }
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }

      throw new CustomError(`Erreur lors de la requête: ${(error as Error).message}`, 500)
    }
  }
}

export { Fetcher as fetcher }
