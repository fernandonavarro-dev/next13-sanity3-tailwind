import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'FNDEV_Content_Studio',
  title: 'FNDEV Content Studio',
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Portfolio content')
          .items([
            S.listItem()
              .title('Profile and homepage')
              .child(
                S.document()
                  .schemaType('pageInfo')
                  .documentId('59a99e47-dccf-4ee2-a0ab-02c7636d9a29'),
              ),
            S.divider(),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('experience').title('Experience'),
            S.documentTypeListItem('skill').title('Skills'),
            S.documentTypeListItem('social').title('Social links'),
          ]),
    }),
    visionTool(),
  ],

  document: {
    // The profile is edited through the fixed entry above, not duplicated.
    newDocumentOptions: (previous) =>
      previous.filter((template) => template.templateId !== 'pageInfo'),
  },

  schema: {
    types: schemaTypes,
  },
});
