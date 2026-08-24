import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import type { StructureResolver } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

const structure: StructureResolver = (S) =>
  S.list()
    .title('Dominion City NL CMS')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('branch').title('Branches'),
      S.documentTypeListItem('leader').title('Leadership Team'),
      S.documentTypeListItem('branchEvent').title('Events'),
      S.documentTypeListItem('sermon').title('Sermons'),
    ])

export default defineConfig({
  name: 'default',
  title: 'Dominion City NL',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'd5txu8px',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
