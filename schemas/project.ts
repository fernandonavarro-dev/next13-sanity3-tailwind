import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug', title: 'Case-study slug', type: 'slug',
      description: 'Use the slug from the starter case study to replace its repo copy without creating a duplicate card.',
      options: { source: 'title' },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      description: 'Lower numbers appear first. Empty items follow ordered items.',
      type: 'number',
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'hidden',
      title: 'Hide from portfolio',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'featured', title: 'Featured project', type: 'boolean', initialValue: false }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: ['Professional', 'Product', 'GIS', 'Experiment'] },
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
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({ name: 'role', title: 'My role', type: 'string' }),
    defineField({ name: 'techLabels', title: 'Technology labels', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'bullets', title: 'What I built', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'businessImpact', title: 'Public impact statement', type: 'text', rows: 2,
      description: 'Describe your contribution without assigning program-wide results to one feature or person.',
    }),
    defineField({
      name: 'metric', title: 'Program metric', type: 'object',
      description: 'Optional. Keep realized results distinct from forecasts, and state the source, period, scope, and attribution in context.',
      fields: [
        defineField({ name: 'value', title: 'Value', type: 'string' }),
        defineField({ name: 'label', title: 'What it measures', type: 'string' }),
        defineField({ name: 'status', title: 'Reported result or forecast', type: 'string' }),
        defineField({ name: 'context', title: 'Source, period, scope, and attribution', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'gallery', title: 'Screenshots', type: 'array',
      of: [{ type: 'object', fields: [
        defineField({ name: 'image', title: 'Sanity image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'url', title: 'Existing static image URL', type: 'string', description: 'For starter screenshots already in /case-studies/.' }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
      ] }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'Live project URL',
      type: 'url',
    }),
    defineField({ name: 'repositoryUrl', title: 'Repository URL', type: 'url' }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
});
