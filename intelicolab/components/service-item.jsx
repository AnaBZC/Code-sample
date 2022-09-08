/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import { AspectRatio, Box, Heading } from 'theme-ui';
import Img from 'next/image';
import Link from '../01-atoms/link';
import HeaderPattern from '../../../img/headerPattern.png';
import ServiceCharacteristicsPattern from '../../../img/serviceCharacteristics.png';
import Banner from './banner';
import ServiceCharacteristics from './service-characteristics';
import ServiceUsedTechnology from './service-used-technology';

export default function ServiceItem({
  title,
  body,
  icon,
  ctas,
  image,
  valueProposal,
  serviceCharacteristics,
  serviceConsumers,
  usedTechnology,
  contactMessage,
}) {
  // Styles.

  // Containers
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  };

  const containerHeaderStyle = {
    display: 'flex',
    flexDirection: ['column', 'row'],
    alignItems: ['start', 'center'],
    pb: ['px-16', 'px-40'],
    pr: ['px-16', null],
    pl: ['px-16', null],
  };

  const contentStyles = {
    display: 'flex',
    flexDirection: ['column', 'row'],
    mt: ['px-16', 'px-48'],
    pb: ['px-48', 'px-48'],
    pr: ['px-16', null],
    pl: ['px-16', null],
  };

  const contentBodyStyle = {
    mr: 'px-24',
    width: ['100%', null, null, '70%'],
  };

  // other styles
  const headingStyle = {
    color: 'white',
  };

  const bodyStyles = {
    color: 'gray-dark',
    marginTop: ['px-24', '0'],
  };

  const LinkStyles = {
    marginRight: 'px-24',
    mb: 'px-16',
    variant: 'buttons.white',
    textAling: 'center',
    ':nth-of-type(2)': {
      variant: 'buttons.yellow',
    },
  };

  const imageContainerStyles = {
    minWidth: '40%',
    marginTop: ['px-32', 0],
  };

  const iconStyles = {
    marginRight: 'px-16',
  };

  const renderedCtas =
    ctas &&
    ctas.map((cta) => (
      <Link href={cta.url} key={cta.id} sx={LinkStyles}>
        {cta.title}
      </Link>
    ));

  const wrapperStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr min(140ch, 100%) 1fr',
    '& > *': {
      gridColumn: '2',
    },
  };

  const colorStyles = {
    ...wrapperStyles,
    backgroundColor: 'black-intelicolab',
    backgroundImage: `url(${HeaderPattern.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
  };

  // Service Consumers
  const listStyle = {
    listStylePosition: 'inside',
    color: 'yellow',
    '& p': {
      display: 'inline',
      color: 'white',
    },
  };

  const renderServiceConsumers = serviceConsumers?.characteristics.map(
    (text, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li sx={listStyle} key={index}>
        <p>{text}</p>
      </li>
    ),
  );

  const serviceConsumersContentStyle = {
    backgroundColor: 'black-intelicolab',
    py: ['px-40', 'px-56'],
    backgroundImage: ['none', `url(${ServiceCharacteristicsPattern.src})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: ['100% 150%', '100% 131.5%'],
    backgroundSize: ['116% 143%', '100%'],
    ...wrapperStyles,
  };

  const serviceConsumersStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: ['column', 'row'],
    px: ['px-16', 0],
  };

  const serviceConsumerHeadingsStyle = {
    color: 'white',
    marginBottom: 'px-16',
  };

  const serviceConsumersContactStyle = {
    maxWidth: ['100%', '50%'],
    color: 'white',
  };

  const ctasContainerStyle = {
    marginTop: 'px-24',
  };

  const imageStyle = {
    maxWidth: '500px',
    maxHeight: '500px',
    marginRight: 'auto',
    marginLeft: 'auto',
  };

  return (
    <Box backgroundColor="white" sx={containerStyles}>
      <div sx={colorStyles} id="header">
        <div sx={containerHeaderStyle}>
          <div sx={iconStyles}>{icon}</div>
          <Heading sx={headingStyle} variant="styles.h1">
            {title}
          </Heading>
        </div>
      </div>
      {valueProposal && (
        <Banner
          title={valueProposal.title}
          description={valueProposal.description}
          image={valueProposal.image}
        />
      )}
      <div sx={wrapperStyles}>
        <div sx={contentStyles}>
          <div sx={contentBodyStyle}>
            <div sx={bodyStyles}>{body}</div>
          </div>
          {image && (
            <div sx={imageContainerStyles}>
              <AspectRatio ratio={1.5} sx={imageStyle}>
                <Img
                  layout="fill"
                  objectFit="contain"
                  src={image.imageURL}
                  sizes="355px"
                  alt={image.alt}
                />
              </AspectRatio>
            </div>
          )}
        </div>
      </div>
      {serviceCharacteristics && (
        <ServiceCharacteristics
          title={serviceCharacteristics.title}
          characteristics={serviceCharacteristics.characteristics}
        />
      )}
      {usedTechnology && (
        <ServiceUsedTechnology
          title={usedTechnology.title}
          informationColumn1={usedTechnology.informationColumn1}
          informationColumn2={usedTechnology.informationColumn2}
        />
      )}
      <div sx={serviceConsumersContentStyle}>
        <div sx={serviceConsumersStyle}>
          {serviceConsumers && (
            <div sx={{ width: ['100%', '50%'], marginBottom: 'px-24' }}>
              <Heading sx={serviceConsumerHeadingsStyle}>
                {serviceConsumers.title}
              </Heading>
              {renderServiceConsumers}
            </div>
          )}
          <div sx={serviceConsumersContactStyle}>
            {contactMessage}
            <div sx={ctasContainerStyle}>{renderedCtas}</div>
          </div>
        </div>
      </div>
    </Box>
  );
}

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
  icon: PropTypes.element.isRequired,
  image: PropTypes.object,
  ctas: PropTypes.arrayOf(PropTypes.object),
  valueProposal: PropTypes.object,
  serviceCharacteristics: PropTypes.object,
  serviceConsumers: PropTypes.object,
  usedTechnology: PropTypes.object,
  contactMessage: PropTypes.object.isRequired,
};

ServiceItem.defaultProps = {
  image: null,
  ctas: null,
  valueProposal: null,
  serviceCharacteristics: null,
  serviceConsumers: null,
  usedTechnology: null,
};
