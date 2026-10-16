import type { BranchEvent, BranchSummary } from '@/types'

export const AMSTERDAM_TRANSITION = {
  meetingName: 'Rejoice Amsterdam',
  date: '2026-11-01T10:00:00+01:00',
  effectiveFrom: '2026-11-01T00:00:00+01:00',
  dateLabel: 'Sunday, 1 November 2026',
  timeLabel: '10:00 AM CET',
  venue: 'Convention Center Novotel',
  street: 'Europaboulevard 10',
  city: '1083 AD Amsterdam',
  email: 'dominioncityamsterdam@gmail.com',
  ministers: ['Pst. Chris', 'Pst. Norbert', 'Min. Mercy', 'Min. JayKings'],
  flyer: {
    src: '/events/rejoice-amsterdam-2026.jpg',
    width: 1350,
    height: 1688,
    alt: 'Rejoice Amsterdam special meeting flyer: 1 November 2026 at 10 AM, Convention Center Novotel, with Pst. Chris, Pst. Norbert, Min. Mercy and Min. JayKings.',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Convention+Center+Novotel%2C+Europaboulevard+10%2C+1083+AD+Amsterdam',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Convention%20Center%20Novotel%2C%20Europaboulevard%2010%2C%201083%20AD%20Amsterdam&output=embed',
} as const

export const AMSTERDAM_TRANSITION_EVENT: BranchEvent = {
  _id: 'amsterdam-new-venue-2026-11-01',
  title: 'Rejoice Amsterdam — Special Meeting',
  date: AMSTERDAM_TRANSITION.date,
  description:
    'Celebrate a new chapter with Dominion City Amsterdam at Rejoice Amsterdam, our first service at the new venue. With Pst. Chris, Pst. Norbert, Min. Mercy and Min. JayKings. Join us to gather, worship, grow, and do life together. Everyone is welcome.',
  localImage: AMSTERDAM_TRANSITION.flyer,
  location: `${AMSTERDAM_TRANSITION.venue}, ${AMSTERDAM_TRANSITION.street}, ${AMSTERDAM_TRANSITION.city}`,
}

export function isAmsterdamTransitionEvent(event: BranchEvent): boolean {
  return event._id === AMSTERDAM_TRANSITION_EVENT._id || (
    Date.parse(event.date) === Date.parse(AMSTERDAM_TRANSITION.date) &&
    /rejoice\s+amsterdam|our first service at the new venue/i.test(event.title)
  )
}

// Keep the transition visible even when Sanity still contains the previous venue.
export function withAmsterdamTransition<T extends BranchSummary>(
  branch: T,
  now = new Date()
): T {
  if (branch.slug.current !== 'amsterdam') return branch

  const hasMoved = now.getTime() >= Date.parse(AMSTERDAM_TRANSITION.effectiveFrom)
  const previousDetails = (branch.importantDetails ?? [])
    .filter((detail) => detail._key !== 'amsterdam-new-venue')
    .map((detail) =>
      /Hoogoorddreef/i.test(detail.value)
        ? { ...detail, label: 'Venue before 1 November 2026' }
        : detail
    )

  return {
    ...branch,
    importantDetails: [
      {
        _key: 'amsterdam-new-venue',
        label: 'New venue · from 1 November 2026',
        value: AMSTERDAM_TRANSITION.venue,
        description: `${AMSTERDAM_TRANSITION.street}, ${AMSTERDAM_TRANSITION.city}`,
        actionLabel: 'Get directions',
        actionUrl: AMSTERDAM_TRANSITION.mapsUrl,
      },
      ...previousDetails,
    ],
    ...(hasMoved
      ? {
          address: `${AMSTERDAM_TRANSITION.venue}\n${AMSTERDAM_TRANSITION.street}\n${AMSTERDAM_TRANSITION.city}`,
          mapEmbedUrl: AMSTERDAM_TRANSITION.mapEmbedUrl,
        }
      : {}),
  }
}
