/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import { Heading, Box, Flex } from 'theme-ui';
import Image from 'next/image';
import ServicePattern from '../../../img/servicePattern.png';
import { gradients } from '../../../theme';

export default function Banner({ title, description, image }) {
  // Style
  const wrapperStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr min(140ch, 100%) 1fr',
    minHeight: '300px',
    '& > *': {
      gridColumn: '2',
    },
  };

  const parentWrapper = {
    display: 'block',
    position: 'relative',
  };

  const containerStyle = {
    backgroundImage: `url(${ServicePattern.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ['left', '-103% 95%'],
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };

  const imageStyles = {
    display: 'block',
    flex: ['0 0 230px', '0 0 0'],
    width: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: ['200px', 'auto'],
    position: ['relative', 'absolute'],
    '& > div': {
      height: '100%',
      width: ['100%', '60%'],
      marginLeft: 'auto !important',
    },
    img: {
      variant: 'styles.img',
      height: '100%',
      width: '100%',
      maxHeight: '223px',
      objectFit: 'cover',
    },
  };
  const contentStyle = {
    background: [
      (theme) => gradients.grayTransparentGradient(theme),
      (theme) => gradients.darkgrayTransparentGradient(theme),
    ],
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  };

  const bannerContentStyles = {
    flexDirection: 'column',
    width: ['100%', '43%'],
    marginTop: ['-1px', 0],
    pb: ['px-16', null, null, 'px-24'],
    pt: ['px-32', null, null, 'px-40'],
    pl: ['px-16', null, null, 'px-16'],
    pr: ['px-16', null, null, 0],
    position: 'relative',
    background: ['#21252D', 'transparent'],
    zIndex: 3,
  };

  const bannerTitleStyles = {
    color: 'white',
    fontWeight: 'normal',
    fontSize: ['30px', null, null, 'px-30'],
    mb: 'px-12',
    mt: 0,
    zIndex: 1,
  };

  const bannerTextStyles = {
    color: 'white',
    mb: ['px-8', null, null, 'px-12'],
    mt: 0,
    zIndex: 1,
    p: {
      mt: 0,
    },
  };

  const renderedImage = image && (
    <Box sx={imageStyles}>
      <Image
        src={image.imageURL}
        layout="fill"
        objectFit="cover"
        alt={image.alt}
      />
      <div sx={contentStyle} />
    </Box>
  );

  const blockStyle = {
    position: 'relative',
    backgroundColor: '#21252D',
    ...wrapperStyles,
  };

  return (
    <div sx={parentWrapper}>
      <div sx={blockStyle}>
        {renderedImage}
        <Flex sx={bannerContentStyles}>
          <div>
            <Heading as="h2" sx={bannerTitleStyles}>
              {title}
            </Heading>
            {description && <div sx={bannerTextStyles}>{description}</div>}
          </div>
        </Flex>
      </div>
      <div sx={containerStyle} />
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
};

Banner.defaultProps = {
  description: null,
};
