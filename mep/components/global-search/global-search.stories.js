import globalSearchTwig from './global-search.twig';

import globalSearchData from './global-search.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Global Search',
  component: document,
};

export const gloablSearchDefault = () =>
  globalSearchTwig({ ...globalSearchData });
