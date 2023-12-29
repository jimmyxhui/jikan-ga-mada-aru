import '@glint/environment-ember-loose';

import type EmbroiderCssModulesRegistry from 'embroider-css-modules/template-registry';
import { HelperLike } from '@glint/template';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmbroiderCssModulesRegistry {
    'page-title': HelperLike<{
      Args: { Positional: [title: string] };
      Return: void;
    }>;
  }
}
