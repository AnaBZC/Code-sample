/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import { AspectRatio, Box, Heading } from 'theme-ui';
import Img from 'next/image';

export default function SuccessStoryItem({ title, body, image }) {
  // Styles.
  // Containers
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    pt: 'px-48',
    pb: 'px-64',
  };

  // other styles
  const headingStyle = {
    color: 'black',
    mb: 'px-32',
    padding: (theme) => [`0 ${theme.space['px-16']}`, null, null, null, 0],
  };

  const bodyStyles = {
    mt: image ? 'px-32' : '0',
    color: 'gray-dark',
    padding: (theme) => [`0 ${theme.space['px-16']}`, null, null, null, 0],
  };

  const imageStyles = {
    maxWidth: '740px',
    marginLeft: ['px-16', 0],
    '& img': {
      display: 'block',
      width: 'auto !important',
      minWidth: 'auto !important',
      right: 'auto !important',
    },
  };

  const wrapperStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr min(100ch, 100%) 1fr',
    '& > *': {
      gridColumn: '2',
    },
  };

  return (
    <div sx={wrapperStyles}>
      <Box backgroundColor="white" sx={containerStyles}>
        <Heading sx={headingStyle} variant="styles.h1">
          {title}
        </Heading>
        {image && (
          <AspectRatio ratio={3.5} sx={imageStyles}>
            <Img
              layout="fill"
              objectFit="contain"
              src={image.imageURL}
              alt={image.alt}
            />
          </AspectRatio>
        )}
        <div sx={bodyStyles}>{body}</div>
      </Box>
    </div>
  );
}

SuccessStoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  image: PropTypes.object,
};

SuccessStoryItem.defaultProps = {
  image: '',
};
