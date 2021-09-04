import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card__item  animate__animated animate__fadeInUp">
      <img src={url} alt={title} className="card__item-img" />
      <p className="card__item-title">{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GifGridItem;
