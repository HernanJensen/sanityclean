// ./schemas/pageType.ts

import {defineArrayMember, defineField, defineType} from 'sanity' 

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
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
      name: 'pageBuilder',
      type: 'array',
      title: 'Page template',
      
      of: [
        
        defineArrayMember({
          name: 'pageTemp',
          type: 'pageTemp',
          title: 'PageBuilder',
        }),
        defineArrayMember({
          name: 'homeTemp',
          type: 'homeTemp',
          title: 'Home',
        }),
        defineArrayMember({
          name: 'aboutTemp',
          type: 'aboutTemp',
          title: 'About',
        }),
        // defineArrayMember({
        //   name: 'hero',
        //   type: 'hero',
        // }),
        // defineArrayMember({
        //   name: 'textWithIllustration',
        //   type: 'textWithIllustration',
        // }),
        // defineArrayMember({
        //   name: 'gallery',
        //   type: 'gallery',
        // }),
        // defineArrayMember({
        //   name: 'form',
        //   type: 'form',
        // }),
        // defineArrayMember({
        //   name: 'video',
        //   type: 'video',
        // }),

      ],
      validation: Rule => Rule.required().max(1).error('Solo puede seleccionar un template por página'),
      
    }),
   
  ],
})