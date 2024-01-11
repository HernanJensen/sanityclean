import {defineType, defineField} from 'sanity'


export const linkType = defineType({
  name: 'linkCustom',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "external",
      type: "url",
      title: "URL",
      hidden: ({ parent, value }) => !value && !!parent?.internal,
    }),
    defineField({
      name: "internal",
      type: "reference",
      to: [{ type: "page" }, { type: "post" }, { type: "home" }, { type: "about" },],
      hidden: ({ parent, value }) => !value && !!parent?.external,
    }),
  ],

})