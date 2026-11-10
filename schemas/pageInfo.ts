import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'pageInfo',
  title: 'Profile and homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roleOne',
      title: 'Primary role',
      type: 'string',
    }),
    defineField({
      name: 'roleTwo',
      title: 'Secondary role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'heroImageUrl',
      title: 'Legacy hero image URL',
      description: 'Only used until a Sanity hero image is uploaded.',
      type: 'string',
    }),
    defineField({
      name: 'heroLines',
      title: 'Rotating hero lines',
      description: 'Optional. Leave empty to keep the current introductory lines.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'backgroundInformation',
      title: 'About text',
      type: 'text',
    }),
    defineField({
      name: 'profilePic',
      title: 'About image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({
      name: 'profilePicUrl',
      title: 'Legacy about image URL',
      description: 'Only used until a Sanity about image is uploaded.',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Public phone number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Public email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'address',
      title: 'Public location (not a street address)',
      description: 'For example: San Francisco Bay Area. This is shown publicly.',
      type: 'string',
    }),
    defineField({
      name: 'contactIntro',
      title: 'Contact introduction',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'resume',
      title: 'Resume PDF',
      description: 'Upload a new PDF here to update the download link.',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'seoDescription',
      title: 'Search description',
      description: 'Short description for search and link previews.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'social' } }],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'roleOne', media: 'heroImage' } },
});
