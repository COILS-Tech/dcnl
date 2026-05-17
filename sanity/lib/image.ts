import imageUrlBuilder from '@sanity/image-url'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  if (!builder) return { url: () => '' } as unknown as ImageUrlBuilder
  return builder.image(source)
}
