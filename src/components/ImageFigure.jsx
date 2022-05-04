import PropTypes from 'prop-types';
import React from 'react';
import { Image, Typography } from 'antd';

const { Text } = Typography;

function ImageFigure({ image, caption, width }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Image src={image} width={width} />

      <div>
        <Text type="secondary">{caption}</Text>
      </div>
    </div>
  );
}

ImageFigure.defaultProps = {
  caption: null,
  width: '100%',
};

ImageFigure.propTypes = {
  caption: PropTypes.string,
  image: PropTypes.elementType.isRequired,
  width: PropTypes.string,
};

export default ImageFigure;
