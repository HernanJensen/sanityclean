// imageGallery.js

import {defineField, defineType} from 'sanity'

export const imageGalleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      title: 'Imagenes',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          title: 'Imagen',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
})