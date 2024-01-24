// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  type: 'document',
  title: 'About',
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'video',
      title: 'Video',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'textWithIllustration',
      title: 'Text with Illustration',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'form',
      title: 'Form',
      options: {collapsible: true, collapsed: true},
    },

    {
      name: 'seo',
      title: 'SEO & Social sharing',
      options: {collapsible: true, collapsed: true},
    },
  ],
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
      title: 'Hero',
      fieldset: 'hero'
    }),
    defineField({
      name: 'video',
      type: 'video',
      title: 'Video',
      fieldset: 'video'
    }),
    defineField({
      name: 'textWithIllustration',
      type: 'textWithIllustration',
      title: 'Text with Illustration',
      fieldset: 'textWithIllustration'
    }),
    
    defineField({
      name: 'form',
      type: 'form',
      title: 'Form',
      fieldset: 'form'
    }),

    defineField({
      name: 'SEO',
      type: 'SEO_fields',
      fieldset: 'seo'
    }),
  ],
})