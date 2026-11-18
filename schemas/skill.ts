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
      description: 'Lower numbers appear first within the group. Empty items use the default order.',
      type: 'number', validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'category', title: 'Stack group', type: 'string',
      description: 'Choose where this skill appears. Existing skills use sensible defaults until assigned.',
      options: { list: [
        { title: 'GIS & mapping', value: 'gis' },
        { title: 'Frontend', value: 'frontend' },
        { title: 'Supporting tools', value: 'tools' },
      ], layout: 'radio' },
    }),
    defineField({ name: 'hidden', title: 'Hide from portfolio', type: 'boolean', initialValue: false }),
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
