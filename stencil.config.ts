import { Config } from '@stencil/core';
import { vueOutputTarget as vue } from '@stencil/vue-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'dn-audio-player',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    vue({
      componentCorePackage: 'dn-audio-player', // i.e.: stencil-library
      proxiesFile: './dist/vue/index.ts',
    }),
    react({
      componentCorePackage: 'dn-audio-player',
      proxiesFile: './dist/react/index.ts',
    }),
  ],
};
