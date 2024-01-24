// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'textWithIllustration',
      title: 'Text with Illustration',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'gallery',
      title: 'Gallery',
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
    defineField({
      name: 'title', 
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      initialValue: '/',
      hidden: true,
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'field_hero',
      type: 'hero',
      title: 'Hero',
      fieldset: 'hero'
    }),
    defineField({
      name: 'field_textWithIllustration',
      type: 'textWithIllustration',
      title: 'Text with Illustration',
      fieldset: 'textWithIllustration'
    }),
    defineField({
      name: 'field_gallery',
      type: 'gallery',
      title: 'Gallery',
      fieldset: 'gallery'
    }),
    defineField({
      name: 'field_form',
      type: 'form',
      title: 'Form',
      fieldset: 'form'
    }),

    defineField({
      name: 'SEO',
      type: 'SEO_fields',
      fieldset: 'seo',
    }),
  ],
})