// ./schemas/pageType.ts

import {defineType} from 'sanity'

export const aboutTemp = defineType({
  name: 'aboutTemp',
  type: 'object',
  title: 'About',
  fields: [
    {
      name: 'hero',
      type: 'hero',
    },
    {
      name: 'video',
      type: 'video',
      title: 'Video',
    },
    {
      name: 'textWithIllustration',
      type: 'textWithIllustration',
      title: 'Text with Illustration',
    },
    {
      name: 'gallery',
      type: 'gallery',
    },
    {
      name: 'form',
      type: 'form',
    },
  ],
})