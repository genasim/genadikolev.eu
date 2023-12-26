import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from 'styled-components';
import FallbackSpinner from '../components/FallbackSpinner';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import useEndpoint from '../components/useEndpoint';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [showMore, setShowMore] = useState(false);

  const { data } = useEndpoint('projects');

  const numberOfItems = showMore && data ? data.length : 6;
  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.slice(0, numberOfItems).map((project) => (
                  <Fade key={project.title}>
                    <ProjectCard project={project} />
                  </Fade>
                ))}
              </Row>

              {!showMore
                && (
                <Button
                  style={styles.showMoreStyle}
                  variant={theme.bsSecondaryVariant}
                  onClick={() => setShowMore(true)}
                >
                  show more
                </Button>
                )}
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
