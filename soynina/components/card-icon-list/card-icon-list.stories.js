import React from 'react';

import cardIconList from './card-icon-list.twig';
import cardIconGreenData from './card-icon-green.yml';
import cardIconTurquoiseData from './card-icon-turquoise.yml';
import impactListData from './impact-list.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Card-Image',
};

export const cardIconBgGreen = () => (
  <div dangerouslySetInnerHTML={{ __html: cardIconList(cardIconGreenData) }} />
);
export const cardIconBgTurquoise = () => (
  <div
    dangerouslySetInnerHTML={{ __html: cardIconList(cardIconTurquoiseData) }}
  />
);
export const cardIconColor = () => (
  <div dangerouslySetInnerHTML={{ __html: cardIconList(impactListData) }} />
);
