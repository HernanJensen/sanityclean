import {defineType, defineField} from 'sanity'

export default defineType({

  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({ 
      name: 'title',
      title: 'Site title',
      type: 'string',
    }),
    defineField({ 
      name: 'description',
      title: 'Site description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
  ]
});