// ./schemas/pageType.ts

import {defineType, defineArrayMember} from 'sanity'

export const pageTemp = defineType({
  name: 'pageTemp',
  type: 'object',
  title: 'Page',
  fields: [
    
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
  
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),

      ],
    },
   
  ],
})