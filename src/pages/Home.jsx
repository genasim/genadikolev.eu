import React from 'react';
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Home() {
  const { data } = useEndpoint('home');

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
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
