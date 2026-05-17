import { defineField, defineType } from 'sanity'

export const sermon = defineType({
  name: 'sermon',
  title: 'Sermon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sermon Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Sermon Series',
      type: 'string',
      description: 'Optional — group sermons into a series',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Full YouTube video URL (e.g. https://www.youtube.com/watch?v=xxx)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'speaker' },
  },
  orderings: [
    { title: 'Date (newest first)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
})
