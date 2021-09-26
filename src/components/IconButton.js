import React from 'react';
import { Button } from 'antd'
import 'antd/dist/antd.css';

const IconButton = ({ icon, text, link }) => {
    return (
        <Button
            type='link'
            href={link}>
            {React.createElement(icon)}
            {text}
        </Button>
    )
}

export default IconButton
