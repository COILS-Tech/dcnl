import { defineField, defineType } from 'sanity'

export const branchEvent = defineType({
  name: 'branchEvent',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date & Time',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date & Time',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration / More Info URL',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'image' },
  },
  orderings: [
    { title: 'Date (newest first)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
    { title: 'Date (upcoming first)', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
  ],
})
