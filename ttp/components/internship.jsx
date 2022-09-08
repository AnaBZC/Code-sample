/** @jsxImportSource theme-ui */
import PropTypes from 'prop-types';
import { Container, Flex, Grid } from 'theme-ui';
import HTMLContent from '../../wysiwyg/html-content';
import Testimonial from '../02-molecules/testimonial';
import CardCompany from '../02-molecules/card-company';
import TimeIcon from '../../../img/icons/time-icon.svg';
import UbicationIcon from '../../../img/icons/ubication-icon.svg';
import SpecialityIcon from '../../../img/icons/speciality-icon.svg';
import CareerIcon from '../../../img/icons/career-icon.svg';
import CareerPercentageIcon from '../../../img/icons/career-year-icon.svg';
import LanguageIcon from '../../../img/icons/language-icon.svg';
import AlertIcon from '../../../img/icons/alert-icon.svg';
import Link from '../01-atoms/link';

export default function Internship({
  title,
  description,
  url,
  durationTotal,
  location,
  areas,
  language,
  career,
  careerPercentage,
  callEndDate,
  requirements,
  otherDetail,
  spacesAvailable,
  interestedInterns,
  invitedInterns,
  testimonial,
  company,
}) {
  // Styles
  const contentStyles = {
    display: 'flex',
    flexDirection: ['column', null, null, 'column', 'row'],
    paddingBottom: 'px-40',
  };

  const internshipContentStyles = {
    pb: 'px-16',
    mr: [0, null, null, null, 'px-24'],
    mb: ['px-24', 0],
    flex: '1 1 auto',
  };

  const companyContentStyles = {
    maxWidth: '21.875rem',
  };

  const descriptionStyles = {
    variant: 'text.body',
    pt: ['px-24', null, null, 0],
    pb: ['px-24', null, null, 'px-24'],
  };

  const titleStyles = {
    fontSize: ['px-22', null, null, 'px-30'],
    color: 'blue',
    mt: 0,
    marginBottom: 'px-24',
  };

  const spacesAvailablesStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'light-blue-light',
    borderRadius: 'px-20',
    marginBottom: [0, 'px-24'],
    maxWidth: ['100%', '60%'],
    py: 'px-2',
  };

  const spaceAvailableIcon = {
    marginRight: 'px-12',
    flexShrink: 0,
  };

  const spaceAvailableTextWrapperStyles = {
    display: 'flex',
    flexDirection: ['column', 'row'],
  };

  const spaceAvailableText = {
    marginRight: 'px-12',
    my: 0,
    fontSize: 'px-14',
    fontWeight: 'bold',
  };

  const informationStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 'px-16',
    fontWeight: 'bold',
    color: 'text',
    marginBottom: 'px-16',
  };

  const detailsStyle = {
    borderTop: '1px solid',
    borderTopColor: 'light-blue',
    borderBottom: '1px solid',
    borderBottomColor: 'light-blue',
    paddingBottom: 'px-24',
  };

  const detailsTitleStyle = {
    variant: 'styles.h4',
    color: 'blue',
    mt: 'px-24',
    mb: 'px-8',
  };

  const linkStyle = {
    marginBottom: 'px-32',
    '& > svg': {
      fill: 'white',
      marginLeft: 'px-12',
    },
  };

  const timerStyle = {
    color: 'blue',
    marginTop: 'px-32',
  };

  const listAreasStyle = {
    listStyle: 'none',
    m: 'px-2',
    marginRight: 'px-8',
    '&:not(:last-child)': {
      '&::after': {
        content: '" / "',
      },
    },
  };

  const gridTestimonialStyle = {
    my: 'px-32',
    padding: 0,
  };

  const gridInfoStyle = {
    backgroundColor: 'light-blue-light',
    borderRadius: 'px-20',
    p: 'px-24',
  };

  const listTestimonialStyle = {
    listStyle: 'none',
    marginTop: 'px-24',
    '& div': {
      backgroundColor: 'light-gray',
    },
  };

  // Functionality
  const remainingDays = (callEndDate) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const difference = Math.abs(Date.now() - new Date(callEndDate));

    return Math.ceil(difference / oneDay);
  };

  // Rendered
  const renderedRemainingDays = callEndDate && (
    <div>
      <p sx={timerStyle}>
        ¡Quedan {remainingDays(callEndDate)} días para aplicar!
      </p>
    </div>
  );

  const renderedTitle = title && <h1 sx={titleStyles}>{title}</h1>;

  const renderedSpacesAvaibles = spacesAvailable && (
    <div sx={spacesAvailablesStyle}>
      <AlertIcon sx={spaceAvailableIcon} />
      <div sx={spaceAvailableTextWrapperStyles}>
        <p sx={spaceAvailableText}>
          {interestedInterns + invitedInterns} pasantes interesados
        </p>
        <p sx={spaceAvailableText}>{spacesAvailable} cupos disponibles</p>
      </div>
    </div>
  );

  const renderedDescription = description && (
    <div sx={descriptionStyles}>
      <h4 sx={detailsTitleStyle}>Descripción</h4>
      <HTMLContent content={description} />
    </div>
  );

  const renderedDuration = durationTotal && (
    <div sx={informationStyle}>
      <TimeIcon sx={{ marginRight: 'px-12' }} />
      <p sx={{ marginRight: 'px-4' }}> Duración: </p>
      <p>{durationTotal}</p>
    </div>
  );

  const renderedLocation = location && location.length > 0 && (
    <div sx={informationStyle}>
      <UbicationIcon sx={{ marginRight: 'px-12' }} />
      <p sx={{ marginRight: 'px-4' }}> Ubicación: </p>
      {location[0].label}
    </div>
  );

  const renderedAreas = areas && (
    <div sx={informationStyle}>
      <SpecialityIcon sx={{ marginRight: 'px-12' }} />
      <p sx={{ marginRight: 'px-4' }}> Especialidad: </p>
      {areas.map((areas) => {
        return (
          <li key={areas.id} sx={listAreasStyle}>
            {areas.label}
          </li>
        );
      })}
    </div>
  );

  const renderedCareer = career.length != 0 && (
    <div sx={informationStyle}>
      <CareerIcon sx={{ marginRight: 'px-12' }} />
      <p sx={{ marginRight: 'px-4' }}> Carrera que debería estar cursando:</p>
      {career.map((career) => {
        return (
          <p key={career.id} sx={listAreasStyle}>
            {career.label}
          </p>
        );
      })}
    </div>
  );

  const renderedLanguage = language && (
    <div sx={informationStyle}>
      <LanguageIcon sx={{ marginRight: 'px-12' }} />
      <p sx={{ marginRight: 'px-4' }}> Idiomas requeridos: </p>
      <Flex as="ul" sx={{ p: 0 }}>
        {language.map((language) => {
          return (
            <li key={language.id} sx={listAreasStyle}>
              {language.label}
            </li>
          );
        })}
      </Flex>
    </div>
  );

  const renderedCareerPercentage = careerPercentage && (
    <div sx={informationStyle}>
      <CareerPercentageIcon sx={{ marginRight: 'px-12' }} />
      <p sx={{ width: '80%' }}>
        Porcentaje de avance en la carrera requerido para aplicar a la pasantía:{' '}
        {careerPercentage}
      </p>
    </div>
  );

  const renderedRequirements = requirements && (
    <div sx={detailsStyle}>
      <h4 sx={detailsTitleStyle}>Requisitos</h4>
      <HTMLContent content={requirements} />
    </div>
  );

  const renderedOtherDetail = otherDetail && (
    <div sx={detailsStyle}>
      <h4 sx={detailsTitleStyle}>Otros detalles</h4>
      <HTMLContent content={otherDetail} />
    </div>
  );

  const urlBackend = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
  const renderedURL = url && (
    <Link variant="primary" href={urlBackend} sx={linkStyle}>
      Aplicar a pasantías
    </Link>
  );

  const renderedTestimonial = testimonial && (
    <Grid as="ul" sx={gridTestimonialStyle} columns={[1, 1]}>
      {testimonial.map((data, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <li sx={listTestimonialStyle} key={key}>
          <Testimonial
            imageURL={data.image ? data.image.fileURL : ''}
            description={data.testimonial}
          />
        </li>
      ))}
    </Grid>
  );

  const renderedCompany = company && (
    <CardCompany
      title={company.nameCompany}
      description={company.description}
      image={company.logo}
      url={company.url}
    />
  );

  const renderedInfo = (
    <Grid as="ul" sx={gridInfoStyle} columns={[null, null, null, 1, 2]}>
      {renderedDuration}
      {renderedLanguage}
      {renderedLocation}
      {renderedCareer}
      {renderedAreas}
      {renderedCareerPercentage}
    </Grid>
  );

  return (
    <Container sx={contentStyles}>
      <div sx={internshipContentStyles}>
        {renderedTitle}
        {renderedSpacesAvaibles}
        {renderedRemainingDays}
        {renderedURL}
        {renderedInfo}
        {renderedDescription}
        {renderedRequirements}
        {renderedOtherDetail}
        {renderedTestimonial}
        {renderedURL}
      </div>
      <div sx={companyContentStyles}>{renderedCompany}</div>
    </Container>
  );
}

Internship.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  duration: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  location: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  callEndDate: PropTypes.string.isRequired,
  requirements: PropTypes.string,
  spacesAvailable: PropTypes.string,
  interestedInterns: PropTypes.number,
  invitedInterns: PropTypes.number,
  testimonial: PropTypes.arrayOf(
    PropTypes.shape({
      testimonial: PropTypes.string.isRequired,
      image: PropTypes.shape({
        fileURL: PropTypes.string.isRequired,
      }),
    }),
  ),
  company: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    logo: PropTypes.object.isRequired,
    description: PropTypes.string,
  }),
};

Internship.defaultProps = {
  requirements: null,
  spacesAvailable: null,
  testimonial: null,
};
