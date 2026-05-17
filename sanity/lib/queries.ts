import { groq } from 'next-sanity'

export const allBranchesQuery = groq`
  *[_type == "branch"] | order(coalesce(displayOrder, 999) asc, name asc) {
    _id,
    name,
    slug,
    tagline,
    summary,
    heroImage,
    address,
    serviceTimes[0...2],
    importantDetails[0...2],
    instagramHandle,
    displayOrder,
    featuredOnHome
  }
`

export const allBranchSlugsQuery = groq`
  *[_type == "branch"] { "slug": slug.current }
`

export const branchBySlugQuery = groq`
  *[_type == "branch" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    tagline,
    summary,
    aboutTitle,
    aboutBody,
    heroImage,
    address,
    mapEmbedUrl,
    serviceTimes,
    importantDetails,
    ministryFocus,
    instagramHandle,
    instagramHighlights[] {
      _key,
      title,
      instagramUrl,
      mediaType,
      thumbnail,
      videoUrl,
      postedAt,
      viewCount,
      commentCount,
      caption
    },
    whatsappLink,
    leaders[]-> {
      _id, name, role, bio, photo, order
    } | order(order asc),
    events[]-> {
      _id, title, date, endDate, description, image, location, registrationUrl
    } | order(date desc),
    sermons[]-> {
      _id, title, date, speaker, youtubeUrl, description, series
    } | order(date desc)
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle, tagline, contactEmail, footerText, socialLinks
  }
`
