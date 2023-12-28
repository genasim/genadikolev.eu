import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import FallbackSpinner from '../components/FallbackSpinner';
import Social from '../components/Social';
import useEndpoint from '../components/useEndpoint';

const WholescreenImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

const Name = styled.h1`
  font-size: 5em;
`;

const InlineChild = styled.h2`
  display: inline-block;
`;

const IntroTextContainer = styled(Col)`
  margin: 10px;
  flex-direction: column;
  white-space: pre-wrap;
  text-align: left;
  font-size: 1.2em;
  font-weight: 500;

  @media (max-width: '576px') {
    text-align: center;
  }
`;

const IntroImageContainer = styled(Col)`
  margin: 10px;
  justify-content: center;
  align-items: center;
  display: flex;

  & img {
    width: 30rem;
    height: auto;
  }
`;

const styles = {
  mainContainer: {
    position: 'absolute',
    top: '0rem',
    width: '100vw',
    height: '95vh',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Home() {
  const { data } = useEndpoint('home');

  if (!data) return <FallbackSpinner />;

  return (
    <Fade>
      <WholescreenImage src={data.backgroundPic} alt="Background image" />
      <div style={styles.mainContainer}>
        <Name>{data.name}</Name>
        <div>
          <InlineChild>I&apos;m&nbsp;</InlineChild>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data.roles,
            }}
          />
        </div>
        <Social />
      </div>

      <div className="section-content-container">
        <Container>
          <Row className="d-flex align-items-center mb-5">
            <IntroImageContainer>
              <img src={data.profilePic} alt="profile" />
            </IntroImageContainer>
            <IntroTextContainer>
              <ReactMarkdown children={data.about} />
            </IntroTextContainer>
          </Row>
        </Container>
      </div>
    </Fade>
  );
}

export default Home;
