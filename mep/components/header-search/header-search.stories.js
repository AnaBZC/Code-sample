import header from './header-search.twig';

import headerSearchData from './header-search.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Header Search',
};

export const headerSearch = () => header(headerSearchData);
