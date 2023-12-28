import PropTypes from 'prop-types';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import useTheme from './useTheme';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social({ socials }) {
  const theme = useTheme();

  return (
    <div className="social">
      {socials.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      ))}
    </div>
  );
}

export default Social;

Social.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      network: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
