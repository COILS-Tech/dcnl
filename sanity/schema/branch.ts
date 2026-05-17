import { defineField, defineType } from 'sanity'

export const branch = defineType({
  name: 'branch',
  title: 'Branch',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Branch Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
      description: 'Auto-generated from name. Determines the page URL (e.g. "amsterdam" → /amsterdam)',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short phrase shown under the branch name on the hero',
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      description: 'A short introduction used on the homepage and branch cards',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
      description: 'Headline for the main branch information section',
    }),
    defineField({
      name: 'aboutBody',
      title: 'About Branch',
      type: 'text',
      rows: 5,
      description: 'Main branch description. Keep the tone aligned with Dominion City: leadership, discipleship, transformation, and community impact.',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first on the website',
    }),
    defineField({
      name: 'featuredOnHome',
      title: 'Feature on Homepage',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'From Google Maps → Share → Embed a map → copy the src URL from the iframe',
    }),
    defineField({
      name: 'serviceTimes',
      title: 'Service Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'serviceType',
              title: 'Service Type',
              type: 'string',
              description: 'e.g. "Sunday Service", "Bible Study", "Prayer Meeting"',
            },
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'time', title: 'Time', type: 'string', description: 'e.g. "10:00 AM"' },
          ],
          preview: {
            select: { title: 'serviceType', subtitle: 'day' },
          },
        },
      ],
    }),
    defineField({
      name: 'importantDetails',
      title: 'Important Details',
      type: 'array',
      description: 'Practical details for visitors, such as language, children, transport, contact, parking, or first-time guest notes',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'actionLabel',
              title: 'Action Label',
              type: 'string',
              description: 'Optional link text, e.g. "Open maps"',
            },
            {
              name: 'actionUrl',
              title: 'Action URL',
              type: 'url',
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'ministryFocus',
      title: 'Ministry Focus',
      type: 'array',
      description: 'Short blocks that explain how this branch raises leaders and serves the city',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),
    defineField({
      name: 'leaders',
      title: 'Leadership Team',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'leader' }] }],
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'branchEvent' }] }],
    }),
    defineField({
      name: 'sermons',
      title: 'Sermons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sermon' }] }],
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      description: 'Without the @ symbol — e.g. dominioncity_amsterdam',
    }),
    defineField({
      name: 'instagramHighlights',
      title: 'Top Instagram Highlights',
      type: 'array',
      description: 'Add the highest-performing Instagram photos and videos. The website sorts these by views, then comments.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'instagramUrl',
              title: 'Instagram Post URL',
              type: 'url',
              validation: (rule) => rule.required(),
            },
            {
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video / Reel', value: 'video' },
                ],
                layout: 'radio',
              },
              initialValue: 'image',
              validation: (rule) => rule.required(),
            },
            {
              name: 'thumbnail',
              title: 'Thumbnail',
              type: 'image',
              options: { hotspot: true },
              description: 'Upload a still from the post or reel so the carousel has a reliable preview',
            },
            {
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              description: 'Optional hosted video URL if you want to play the video directly',
            },
            {
              name: 'postedAt',
              title: 'Posted At',
              type: 'datetime',
            },
            {
              name: 'viewCount',
              title: 'Views',
              type: 'number',
              validation: (rule) => rule.min(0),
            },
            {
              name: 'commentCount',
              title: 'Comments',
              type: 'number',
              validation: (rule) => rule.min(0),
            },
            {
              name: 'caption',
              title: 'Short Caption',
              type: 'text',
              rows: 3,
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'instagramUrl',
              media: 'thumbnail',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'whatsappLink',
      title: 'WhatsApp Group Link',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'tagline', media: 'heroImage' },
  },
})
