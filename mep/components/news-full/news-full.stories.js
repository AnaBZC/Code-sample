import newsFullTwig from './news-full.twig';

import newsFullData from './news-full.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/News Full',
};

export const newsFull = () => newsFullTwig(newsFullData);
