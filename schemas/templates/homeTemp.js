// ./schemas/pageType.ts

import {defineType} from 'sanity'

export const homeTemp = defineType({
  name: 'homeTemp',
  type: 'object',
  title: 'Home',
  fields: [
    {
      name: 'hero',
      type: 'hero',
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