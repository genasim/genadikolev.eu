import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import FallbackSpinner from '../components/FallbackSpinner';
import Header from '../components/Header';
import useEndpoint from '../components/useEndpoint';

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

function Skills(props) {
  const { header } = props;

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  const { data } = useEndpoint('skills');

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              {renderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div key={item.title} style={{ display: 'inline-block' }}>
                      <img
                        style={styles.iconStyle}
                        src={item.icon}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
