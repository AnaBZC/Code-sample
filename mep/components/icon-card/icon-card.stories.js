import iconCardTwig from './icon-card.twig';

import iconCardData from './icon-card.yml';
import iconCardCenterData from './icon-card-center.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Icon Card',
};

export const iconCard = () => iconCardTwig(iconCardData);

export const cardIconCenter = () =>
  iconCardTwig({ ...iconCardData, ...iconCardCenterData });
