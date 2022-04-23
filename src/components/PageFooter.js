import React from 'react'
import { Divider, Space, Typography } from 'antd'
import Socials from './Socials'

const { Title, Paragraph } = Typography

const PageFooter = () => {
    return (
        <Space direction='vertical'> 
            <div>
                <Title level={3} id='contacts'>Contact Me @</Title>
                <Socials />
            </div>
            <Divider />
            &#xA9; 2022 Justin Wu
        </Space>
    )
}

export default PageFooter