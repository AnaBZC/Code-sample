/** @jsxImportSource theme-ui */
import { Box, Flex, Heading } from 'theme-ui';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from '../01-atoms/link';
import Arrow from '../../../img/icons/news-arrow.svg';
import CommunityPattern from '../../../img/communityPattern.png';

export default function IconList({ title, icons, link }) {
  // Styles.

  const wrapperStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr min(140ch, 100%) 1fr',
    '& > *': {
      gridColumn: '2',
    },
  };

  const boxStyles = {
    textAlign: 'start',
    backgroundColor: 'black-intelicolab',
    backgroundImage: `url(${CommunityPattern.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['200% 100%', '100% 130%'],
    py: 'px-72',
    px: ['px-16', 'px-16'],
    ...wrapperStyles,
  };

  const containerStyles = {
    clipPath: [
      'polygon(0 0, 100% 3%, 100% 100%, 0% 100%)',
      'polygon(0 0, 100% 13%, 100% 100%, 0% 100%)',
    ],
  };

  const titleStyles = {
    color: 'yellow',
    marginBottom: 'px-16',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    '& > svg': {
      marginLeft: 'px-12',
      transition: 'margin .1s linear',
      fill: 'white',
      stroke: 'white',
    },
    '&:hover': {
      textDecoration: 'underline',
      '& > svg': {
        marginLeft: 'px-16',
      },
    },
  };

  const iconListStyles = {
    variant: 'layout.listReset',
    flexWrap: 'wrap',
    justifyContent: ['center', 'start'],
    marginTop: 'px-40',
  };

  const listItemStyles = {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: ['100%', null, null, null, '25%'],
    px: [0, 0, null, 'px-12'],
    ':nth-of-type(1, 5, 9)': {
      pl: 0,
    },
    ':nth-of-type(4)': {
      pr: 0,
    },
  };

  const iconContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    fontSize: 'px-14',
    fontWeight: 'bold',
    textDecoration: 'none',
    px: ['px-16', null, 'px-24'],
    py: ['px-8', null, 'px-24'],
  };

  const iconStyles = {
    width: '100%',
    position: 'relative',
    height: '8.25rem',
    borderRadius: '20px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: (theme) => [`0 auto 0`, `0 auto ${theme.space['px-16']}`],
  };

  const prueba = {
    margin: 'auto',
  };

  const renderedIcons = icons.map((item) => {
    const height = item.icon.height > 80 ? 80 : item.icon.height;
    const width =
      item.icon.height > 80
        ? (item.icon.width / item.icon.height) * 80
        : item.icon.width;
    const linkContent = (
      <>
        <div sx={iconStyles}>
          <Image
            sx={prueba}
            src={item.icon.imageURL}
            width={width}
            height={height}
            alt={item.icon.alt}
            layout="fixed"
          />
        </div>
        <p>{item.title}</p>
      </>
    );
    return (
      <li key={item.id} sx={listItemStyles}>
        {item.linkURL ? (
          <Link href={item.linkURL} sx={{ iconContainerStyles }}>
            {linkContent}
          </Link>
        ) : (
          <div sx={iconContainerStyles}>{linkContent}</div>
        )}
      </li>
    );
  });

  return (
    <div sx={containerStyles}>
      <Box py="px-32" sx={boxStyles}>
        <Heading variant="styles.h1" sx={titleStyles}>
          {title}
        </Heading>
        {link && (
          <Link href={link.linkURL} sx={linkStyle}>
            {link.linkTitle} <Arrow />
          </Link>
        )}
        <Flex as="ul" sx={iconListStyles}>
          {renderedIcons}
        </Flex>
      </Box>
    </div>
  );
}

IconList.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.object,
};

IconList.defaultProps = {
  link: undefined,
};
