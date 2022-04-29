import PropTypes from 'prop-types';
import React from 'react';
import { Image, Typography } from 'antd';

const { Text } = Typography;

function ImageFigure({ image, caption }) {
  return (
    <div style={{ padding: '20px' }}>
      <Image src={image} />

      <div style={{ textAlign: 'center' }}>
        <Text type="secondary">{caption}</Text>
      </div>
    </div>
  );
}

ImageFigure.defaultProps = {
  caption: null,
};

ImageFigure.propTypes = {
  caption: PropTypes.string,
  image: PropTypes.elementType.isRequired,
};

export default ImageFigure;
