import PropTypes from 'prop-types';
import React from 'react';
import { Button, Tooltip } from 'antd';

function IconButton({
  icon, text, link, tooltip, onClick, size,
}) {
  return (
    <Tooltip title={tooltip} trigger={tooltip ? 'click' : 'hover'}>
      <Button
        type="link"
        onClick={onClick}
        href={link}
        size={size}
      >
        {React.createElement(icon)}
        {text}
      </Button>
    </Tooltip>
  );
}

IconButton.defaultProps = {
  link: null,
  onClick: () => {},
  size: 'middle',
  text: null,
  tooltip: null,
};

IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  text: PropTypes.string,
  tooltip: PropTypes.string,
};

export default IconButton;
