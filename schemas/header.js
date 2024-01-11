import {defineType, defineField} from 'sanity'

export default defineType({

  name: 'header',
  title: 'Header',
  type: 'document',
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: 'links',
      type: 'object',
      title: 'Links',
      fields: [
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
            defineField({
              name: "link",
              title: "Link",
              type: "linkCustom",
            }),
          ],
          options: {
            layout: 'list',
          },
        },
      ],
    }),
  ]
});
