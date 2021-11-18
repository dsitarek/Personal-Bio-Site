import React from 'react';
import PropTypes from 'prop-types';

export default function LanguageList({ lang }) {
  console.log(lang);
  return (
    <ul>
      <li>{lang[0]}&#40;{lang[2]}%&#41;</li>
    </ul>
  );
}

LanguageList.propTypes = {
  lang: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
