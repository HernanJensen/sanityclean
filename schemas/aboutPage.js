// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'hero',
      type: 'hero',
    }),
    defineField({
      name: 'video',
      type: 'video',
    }),
    defineField({
      name: 'textWithIllustration',
      type: 'textWithIllustration',
      title: 'Text with Illustration',
    }),
    
    defineField({
      name: 'form',
      type: 'form',
    }),
  ],
})