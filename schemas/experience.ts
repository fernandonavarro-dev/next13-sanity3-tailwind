import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job title',
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
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'companyImageUrl',
      title: 'Legacy company image URL',
      description: 'Only used until a Sanity image is uploaded.',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company', type: 'string',
    }),
    defineField({
      name: 'dateStarted',
      title: 'Start date',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'End date',
      type: 'date',
    }),
    defineField({
      name: 'presentlyEmployed',
      title: 'Currently employed here',
      type: 'boolean',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publicPoints', title: 'Public portfolio bullets', type: 'array',
      description: 'Optional replacement for legacy Points. Use verified, attributed outcomes; distinguish forecasts from realized results.',
      of: [{ type: 'string' }],
    }),
  ],
  preview: { select: { title: 'jobTitle', subtitle: 'company', media: 'companyImage' } },
});
