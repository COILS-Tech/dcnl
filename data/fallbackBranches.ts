import type { Branch } from '@/types'

export const FALLBACK_BRANCHES: Branch[] = [
  {
    _id: 'amsterdam',
    name: 'Amsterdam',
    slug: { current: 'amsterdam' },
    tagline: 'Raising leaders that transform society in Amsterdam',
    summary:
      'A multicultural Dominion City community helping people discover purpose, grow through the Word, and serve Amsterdam with Kingdom influence.',
    aboutTitle: 'A church family for purpose, the Word, and transformation',
    aboutBody:
      'Dominion City Amsterdam exists to disciple people into maturity, strengthen families, and equip believers to carry Kingdom values into everyday life. We gather for worship, teaching, prayer, and practical community so people can be discovered, developed, and deployed into their God-given assignment.',
    serviceTimes: [
      {
        _key: 'amsterdam-sunday',
        serviceType: 'Sunday Service',
        day: 'Sunday',
        time: '10:00 AM',
      },
      {
        _key: 'amsterdam-prayer',
        serviceType: 'Prayer & Discipleship',
        day: 'Midweek',
        time: 'Shared in branch updates',
      },
    ],
    importantDetails: [
      {
        _key: 'amsterdam-address',
        label: 'Meeting Address',
        value: 'Hoogoorddreef 1, Bijlmer',
        description: 'Amsterdam, Netherlands, 1101 BA',
      },
      {
        _key: 'amsterdam-contact',
        label: 'Contact',
        value: 'dominioncityamsterdam@gmail.com',
        description: 'Reach out for service times, directions, or connection.',
      },
      {
        _key: 'amsterdam-language',
        label: 'Language',
        value: 'English-led, multicultural community',
        description:
          'Services are structured to welcome internationals, students, families, and professionals in Amsterdam.',
      },
      {
        _key: 'amsterdam-updates',
        label: 'Weekly Updates',
        value: 'Follow Instagram or join WhatsApp',
        description:
          'Use the branch social channels for the latest service venue, time, and ministry updates.',
      },
      {
        _key: 'amsterdam-first-visit',
        label: 'First Visit',
        value: 'Come ready for worship, the Word, and community',
        description:
          'New guests are welcome to meet the team after service and get connected to the branch family.',
      },
    ],
    ministryFocus: [
      {
        _key: 'amsterdam-discipleship',
        title: 'Discipleship',
        description:
          'Teaching, prayer, and mentoring that help believers grow into maturity and live with conviction.',
      },
      {
        _key: 'amsterdam-community',
        title: 'Community',
        description:
          'A home for people from different nations to build godly relationships and serve one another.',
      },
      {
        _key: 'amsterdam-impact',
        title: 'City Impact',
        description:
          'Equipping leaders to represent Christ with excellence in family, work, education, and society.',
      },
    ],
    instagramHandle: 'dominioncity_amsterdam',
    instagramHighlights: [],
    address: 'Hoogoorddreef 1\nBijlmer, Amsterdam\nNetherlands, 1101 BA',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.0361667158445!2d4.9446785!3d52.3141257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a3c7e1a8c47%3A0x7d8c8c8c8c8c8c8c!2sHoogoorddreef%201%2C%201101%20BA%20Amsterdam!5e0!3m2!1sen!2snl!4v1234567890',
  },
  {
    _id: 'rotterdam',
    name: 'Rotterdam',
    slug: { current: 'rotterdam' },
    tagline: 'Raising leaders that transform society',
    summary:
      'Dominion City Rotterdam is a growing family of believers committed to worship, discipleship, prayer, and practical impact across the city.',
    aboutTitle: 'A growing Kingdom community in Rotterdam',
    aboutBody:
      'Dominion City Rotterdam gathers people around the Word of God, prayer, and authentic community. The branch is shaped by the Dominion City mandate to raise leaders who transform society, helping people discover their gifts, develop spiritual depth, and serve Rotterdam with faith and excellence.',
    serviceTimes: [
      {
        _key: 'rotterdam-sunday',
        serviceType: 'Sunday Service',
        day: 'Sunday',
        time: '12:00 PM',
      },
      {
        _key: 'rotterdam-prayer',
        serviceType: 'Prayer & Discipleship',
        day: 'Midweek',
        time: 'Shared in branch updates',
      },
    ],
    importantDetails: [
      {
        _key: 'rotterdam-address',
        label: 'Meeting Address',
        value: 'Suite 5 (Upstairs), Dotterbloemstraat 25, 3053 JV Rotterdam, The Netherlands',
      },
      {
        _key: 'rotterdam-contact',
        label: 'Contact',
        value: 'dominioncityrotterdam@gmail.com',
        description: 'Reach out for service times, directions, or connection.',
      },
      {
        _key: 'rotterdam-language',
        label: 'Language',
        value: 'English-led, multicultural community',
        description:
          'A welcoming space for residents, internationals, families, students, and professionals.',
      },
      {
        _key: 'rotterdam-updates',
        label: 'Weekly Updates',
        value: 'Follow Instagram or join WhatsApp',
        description:
          'Use the branch social channels for current service venue, time, and special event details.',
      },
      {
        _key: 'rotterdam-first-visit',
        label: 'First Visit',
        value: 'Expect worship, teaching, prayer, and connection',
        description:
          'Guests are welcome to connect with the branch team after service and find a next step.',
      },
    ],
    ministryFocus: [
      {
        _key: 'rotterdam-word',
        title: 'The Word',
        description:
          'Clear biblical teaching that builds faith, character, purpose, and practical wisdom.',
      },
      {
        _key: 'rotterdam-prayer',
        title: 'Prayer',
        description:
          'A branch culture that depends on prayer for personal growth, families, and city influence.',
      },
      {
        _key: 'rotterdam-leadership',
        title: 'Leadership',
        description:
          'Training people to lead faithfully in church, work, education, business, and community life.',
      },
    ],
    address: 'Suite 5 (Upstairs)\nDotterbloemstraat 25\n3053 JV Rotterdam\nThe Netherlands',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Dotterbloemstraat%2025%2C%203053%20JV%20Rotterdam%2C%20The%20Netherlands&output=embed',
    instagramHandle: 'dominioncity_rotterdam',
    instagramHighlights: [],
  },
]

export const FALLBACK_BRANCH_MAP = FALLBACK_BRANCHES.reduce<Record<string, Branch>>(
  (branches, branch) => {
    branches[branch.slug.current] = branch
    return branches
  },
  {}
)
