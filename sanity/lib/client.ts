import { createClient } from 'next-sanity'
import type { QueryParams } from 'sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'd5txu8px'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  : null

export async function sanityFetch<T>(
  query: string,
  params?: QueryParams
): Promise<T | null> {
  if (!client) return null
  try {
    return params
      ? await client.fetch<T>(query, params)
      : await client.fetch<T>(query)
  } catch {
    return null
  }
}
