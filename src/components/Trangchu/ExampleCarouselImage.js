
import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            // alt={alt}
            style={{ width: '100%', height: 'auto' }}
        />
    );
};

ExampleCarouselImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
