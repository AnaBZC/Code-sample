/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import { AspectRatio, Container, Grid } from 'theme-ui';
import Image from 'next/image';
import Link from '../01-atoms/link';
import CardInternship from '../02-molecules/card-internship';
import HTMLContent from '../../wysiwyg/html-content';
import { gradients } from '../../../theme';

export default function Company({
  title,
  logo,
  image,
  description,
  location,
  employees,
  divisions,
  internships,
}) {
  const containerStyles = {
    pb: 'px-48',
    width: '100%',
    maxWidth: [null, null, null, null, '70%'],
  };

  const descriptionStyles = {
    variant: 'text.body',
    pt: ['px-24', null, null, 0],
    pb: ['px-24', null, null, 'px-40'],
    '& p': {
      margin: 0,
    },
  };

  const titleStyles = {
    fontSize: ['px-22', null, null, 'px-30'],
    color: 'blue',
    mt: 0,
    marginBottom: 0,
  };

  const mediaContainer = {
    maxWidth: '56.25rem',
    mb: ['px-16', null, null, 'px-32'],
    position: 'relative',
  };

  const subtitleStyles = {
    variant: 'styles.h4',
    color: 'blue',
    mb: 'px-8',
  };

  const gridStyles = {
    backgroundColor: 'light-gray',
    borderRadius: 'px-20',
    gridGap: 'px-16',
    px: 'px-32',
    pt: ['px-24', 'px-32'],
    pb: ['px-24', 'px-32'],
  };

  const listOfInternshipStyles = {
    listStyle: 'none',
    '&:not(:last-child)': {
      borderBottom: '1px solid',
      borderBottomColor: 'pink',
    },
    '& div': {
      pt: 0,
      borderTop: 'none',
      borderBottom: 'none !important',
    },
  };

  const internshipTitleStyle = {
    background: (theme) => gradients.pinkOrangeGradient(theme),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: 'px-8',
    marginTop: 0,
  };

  const linkStyles = {
    mr: 'auto',
  };

  const locationStyle = {
    display: 'flex',
  };

  const locationChildrenStyle = {
    '&::before': {
      content: '" , "',
    },
  };

  const logoStyles = {
    display: 'block',
    flexShrink: 0,
    flexGrow: 0,
    width: ['5rem'],
    height: ['4.5rem'],
    position: 'relative',
    mr: 'px-16',
  };

  const headingInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    mb: 'px-32',
  };

  // Rendered
  const renderedTitle = title && <h1 sx={titleStyles}>{title}</h1>;

  const renderLogo = logo && (
    <div sx={logoStyles}>
      <Image
        src={decodeURI(logo.fileURL)}
        alt={logo.alt}
        objectFit="contain"
        layout="fill"
        sizes="130px"
      />
    </div>
  );

  const renderedHeadingInfo = (
    <div sx={headingInfoStyle}>
      {renderLogo}
      {renderedTitle}
    </div>
  );

  const renderedDescription = description && (
    <div sx={descriptionStyles}>
      <h4 sx={subtitleStyles}>Descripción de la empresa</h4>
      <HTMLContent content={description} />
    </div>
  );

  const renderedImage = image && (
    <div sx={mediaContainer}>
      <AspectRatio ratio={16 / 7}>
        <Image
          layout="fill"
          alt={image.alt}
          objectFit="cover"
          objectPosition="left"
          sizes="(min-width: 920px) 900px, 100vw"
          src={decodeURI(image.fileURL)}
        />
      </AspectRatio>
    </div>
  );

  const renderedLocation = location && location.length > 0 && (
    <div sx={descriptionStyles}>
      <h4 sx={subtitleStyles}>Ubicación geográfica en Costa Rica</h4>
      <div sx={locationStyle}>
        {location[0].label}
        <div sx={locationChildrenStyle}>{location[1].label}</div>
      </div>
    </div>
  );

  const renderedEmployees = employees && employees.length > 0 && (
    <div sx={descriptionStyles}>
      <h4 sx={subtitleStyles}>Rango de empleados en Costa Rica</h4>
      {employees[0].label}
    </div>
  );

  const renderedDivisions = divisions && (
    <div sx={descriptionStyles}>
      <h4 sx={subtitleStyles}>Divisiones</h4>
      <HTMLContent content={divisions} />
    </div>
  );

  const renderedListOfInternship = internships ? (
    <Grid sx={gridStyles} as="ul" columns={[1, 1]}>
      <h3 sx={internshipTitleStyle}>PASANTÍAS ABIERTAS</h3>
      {internships.map((data) => (
        <li key={data.id} sx={listOfInternshipStyles}>
          <CardInternship
            company={{ name: title }}
            title={data.title}
            description={data.summary}
            duration={data.durationTotal}
            location={data.location}
            url={data.url}
          />
        </li>
      ))}
    </Grid>
  ) : (
    <div sx={gridStyles}>
      <h3 sx={internshipTitleStyle}>PASANTÍAS ABIERTAS</h3>
      <p sx={{ marginBottom: '0' }}>
        Esta empresa no tiene pasantías abiertas actualmente. <br />
        Puedes ver otras opciones disponibles en nuestra sección de Pasantías.
      </p>
      <Link href={'/pasantias'} sx={linkStyles} variant={'link-only'}>
        Ir a todas las pasantías
      </Link>
    </div>
  );

  return (
    <Container>
      <div sx={containerStyles}>
        {renderedHeadingInfo}
        {renderedImage}
        {renderedDescription}
        {renderedLocation}
        {renderedEmployees}
        {renderedDivisions}
        {renderedListOfInternship}
      </div>
    </Container>
  );
}

Company.propTypes = {
  image: PropTypes.shape({
    imageURL: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
    }),
  ),
  divisions: PropTypes.string,
  internships: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      summary: PropTypes.string,
      duration: PropTypes.string,
      location: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          label: PropTypes.string.isRequired,
        }),
      ),
      url: PropTypes.string,
    }),
  ),
};

Company.defaultProps = {
  image: null,
  logo: null,
  employees: null,
  divisions: null,
  internships: null,
};
