'use client';

import { NextStudio } from 'next-sanity/studio';

import config from '../../../../sanity.config';

export default function StudioPage() {
  // Support the same page as `import {Studio} from `sanity`, `config`
  // `is required`
  return <NextStudio config={config} />;
}