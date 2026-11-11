import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder', title: 'Display order',
      description: 'Lower numbers appear first. Empty items follow ordered items.',
      type: 'number', validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({ name: 'hidden', title: 'Hide from portfolio', type: 'boolean', initialValue: false }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.integer().min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'imageUrl',
      title: 'Legacy image URL',
      description: 'Only used until a Sanity image is uploaded.',
      type: 'string',
    }),
  ],
  preview: { select: { title: 'title', media: 'image' } },
});
