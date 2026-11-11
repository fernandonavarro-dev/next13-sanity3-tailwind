import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'platform for social media',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder', title: 'Display order', type: 'number',
      description: 'Lower numbers appear first.',
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({ name: 'hidden', title: 'Hide from header', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'title', subtitle: 'url' } },
});
