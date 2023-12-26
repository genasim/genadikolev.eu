import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import Typewriter from 'typewriter-effect';
import FallbackSpinner from '../components/FallbackSpinner';
import Social from '../components/Social';
import useEndpoint from '../components/useEndpoint';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function Home() {
  const { data } = useEndpoint('home');

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        <h1 style={styles.nameStyle}>{data?.name}</h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <Social />
      </div>

      <div className="section-content-container">
        <Container>
          <Row>
            <Col style={styles.introTextContainer}>
              {parseIntro(data.about)}
            </Col>
            <Col style={styles.introImageContainer}>
              <img src={data?.imageSource} alt="profile" />
            </Col>
          </Row>
        </Container>
      </div>
    </Fade>

  ) : <FallbackSpinner />;
}

export default Home;
