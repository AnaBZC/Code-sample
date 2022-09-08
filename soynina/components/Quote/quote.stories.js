import React from 'react';

import quote from './quote.twig';
import QuoteData from './block-quote.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Quote' };

export const basicQuote = () => (
  <div dangerouslySetInnerHTML={{ __html: quote(QuoteData) }} />
);
