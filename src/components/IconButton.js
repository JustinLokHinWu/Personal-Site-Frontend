import React from 'react';
import { Button, Tooltip } from 'antd'
import 'antd/dist/antd.css';

const IconButton = ({ icon, text, link, tooltip, onClick, isInternalLink }) => {
    return (
        <Tooltip title={tooltip} trigger={ tooltip ? 'click' : 'hover' } >
            <Button
                type='link'
                onClick={onClick}
                href={link}
            >
                {React.createElement(icon)}
                {text ? text : null}
            </Button>
        </Tooltip>
    )
}

export default IconButton
