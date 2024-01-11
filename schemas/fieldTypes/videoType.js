// ./schemas/videoType.js

import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      type: 'string',
      title: 'Video URL',
    }),
    defineField({
      name: 'videoFile',
      type: 'file',
      title: 'Video',
    }),
  ],
})