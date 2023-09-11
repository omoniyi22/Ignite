import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { myTheme } from './theme';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import StudioNavbar from './app/components/StudioNavbar';
import Logo from './app/components/Logo';

export default defineConfig({
  basePath: '/studio',
  name: 'ScienceIgniteStudio',
  title: 'ScienceIgnite Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },

  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  theme: myTheme,
});