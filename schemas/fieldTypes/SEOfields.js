
import {defineField, defineType} from 'sanity'


export const SEOfields = defineType({
  name: 'SEO_fields',
  type: 'object',
  title: 'SEO & Social sharing',
  
  fields: [
    defineField({
      name: 'title',
      title: 'Title for SEO & social sharing',
      type: 'string',
      description: 'Make it as enticing as posible to convert users in social feeds and Google searches. Ideally between 15 and 60 characters.', 
      validation: Rule => [
        Rule.required().min(3).max(60).error('Should be between 15 and 60 characters'),
      ]
    }),
    defineField({
      name: 'description',
      title: 'Short paragraph for SEO & social sharing (meta description)',
      type: 'text',
      rows: 2,
      description: 'Optional but highly encouraged as it´ll help you convert more visitors from Google & social media. Ideally between 50 and 160 characters.',
      validation: Rule => [
        Rule.min(30).warning('A description of at least 30 characters is recommended'),
        Rule.max(160).error('Should be between 30 and 160 characters'),
      ]
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Social sharing image',
      options: {hotspot: true},
      description: 'Optional but highly encouraged for increasing conversion rates for links to this page shared in social media.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Descriptive label for screen readers & SEO',
          description: 'Optional but highly encouraged to make the content more accessible.',
        },
      ],
    }),
  ],
})