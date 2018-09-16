import React from 'react';
import PropType from 'prop-types';

export default function Home({ message }) {
  return (
    <div>
      {message}
    </div>
  );
}

Home.propTypes = {
  message: PropType.string,
};

Home.defaultProps = {
  message: 'default message',
};
