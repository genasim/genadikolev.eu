import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import FallbackSpinner from '../components/FallbackSpinner';
import Header from '../components/Header';
import useEndpoint from '../components/useEndpoint';
import '../css/education.css';

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');

  const { data } = useEndpoint('education');

  useEffect(() => {
    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('50vw');
    }
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div style={{ width }} className="section-content-container">
            <Container>
              <Chrono
                hideControls
                allowDynamicUpdate
                useReadMore={false}
                items={data}
                cardHeight={250}
                mode={mode}
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  titleColor: theme.chronoTheme.titleColor,
                }}
              >
                <div className="chrono-icons">
                  {data.map((education) => (education.icon ? (
                    <img
                      key={education.icon.src}
                      src={education.icon.src}
                      alt={education.icon.alt}
                    />
                  ) : null))}
                </div>
              </Chrono>
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
