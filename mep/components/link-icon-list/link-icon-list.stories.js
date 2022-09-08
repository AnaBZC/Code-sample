import iconsList from './link-icon-list.twig';
import icons from './icon-item.twig';

import iconsListData from './link-icon-list.yml';
import iconsListBlueData from './link-icon-list-blue.yml';
import iconsData from './icon-item.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Icons List' };

export const icon = () => icons(iconsData);

export const iconList = () => iconsList(iconsListData);

export const iconListBlue = () =>
  iconsList({ ...iconsListData, ...iconsListBlueData });
