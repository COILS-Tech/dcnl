export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface ServiceTime {
  _key: string
  serviceType: string
  day: string
  time: string
}

export interface ImportantDetail {
  _key?: string
  label: string
  value: string
  description?: string
  actionLabel?: string
  actionUrl?: string
}

export interface MinistryFocus {
  _key?: string
  title: string
  description: string
}

export interface InstagramHighlight {
  _key?: string
  title: string
  instagramUrl: string
  mediaType: 'image' | 'video'
  thumbnail?: SanityImage
  videoUrl?: string
  postedAt?: string
  viewCount?: number
  commentCount?: number
  caption?: string
}

export interface Leader {
  _id: string
  name: string
  role?: string
  bio?: string
  photo?: SanityImage
  order?: number
}

export interface BranchEvent {
  _id: string
  title: string
  date: string
  endDate?: string
  description?: string
  image?: SanityImage
  localImage?: {
    src: string
    width: number
    height: number
    alt: string
  }
  location?: string
  registrationUrl?: string
}

export interface Sermon {
  _id: string
  title: string
  date: string
  speaker?: string
  youtubeUrl?: string
  description?: string
  series?: string
}

export interface Branch {
  _id: string
  name: string
  slug: { current: string }
  tagline?: string
  summary?: string
  aboutTitle?: string
  aboutBody?: string
  heroImage?: SanityImage
  address?: string
  mapEmbedUrl?: string
  serviceTimes?: ServiceTime[]
  importantDetails?: ImportantDetail[]
  ministryFocus?: MinistryFocus[]
  leaders?: Leader[]
  events?: BranchEvent[]
  sermons?: Sermon[]
  instagramHandle?: string
  instagramHighlights?: InstagramHighlight[]
  whatsappLink?: string
}

export interface BranchSummary {
  _id: string
  name: string
  slug: { current: string }
  tagline?: string
  summary?: string
  heroImage?: SanityImage
  address?: string
  serviceTimes?: ServiceTime[]
  importantDetails?: ImportantDetail[]
  instagramHandle?: string
  displayOrder?: number
  featuredOnHome?: boolean
}

export interface SiteSettings {
  siteTitle?: string
  tagline?: string
  contactEmail?: string
  footerText?: string
  socialLinks?: {
    instagram?: string
    youtube?: string
    facebook?: string
  }
}
