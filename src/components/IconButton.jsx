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
        size={size || 'middle'}
      >
        {React.createElement(icon)}
        {text || null}
      </Button>
    </Tooltip>
  );
}

export default IconButton;
