import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import FallbackSpinner from '../components/FallbackSpinner';
import ProjectCard from '../components/ProjectCard';
import useEndpoint from '../components/useEndpoint';
import useTheme from '../components/useTheme';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = () => {
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);

  const data = useEndpoint('projects');
  if (!data) return <FallbackSpinner />;

  const numberOfItems = showMore ? data.length : 6;
  return (
    <div className="section-content-container">
      <Container style={styles.containerStyle}>
        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
          {data.slice(0, numberOfItems).map((project) => (
            <Fade key={project.title}>
              <ProjectCard project={project} />
            </Fade>
          ))}
        </Row>

        {!showMore && (
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
  );
};

export default Projects;
