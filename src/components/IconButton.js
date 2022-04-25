import React from 'react';
import { Button, Tooltip } from 'antd'

const IconButton = ({ icon, text, link, tooltip, onClick, isInternalLink, size }) => {
    return (
        <Tooltip title={tooltip} trigger={ tooltip ? 'click' : 'hover' } >
            <Button
                type='link'
                onClick={onClick}
                href={link}
                size={size ? size : 'middle'}
            >
                {React.createElement(icon)}
                {text ? text : null}
            </Button>
        </Tooltip>
    )
}

export default IconButton
