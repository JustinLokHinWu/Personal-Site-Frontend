import React from 'react'
import { Button, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom';


const { Title, Paragraph } = Typography


const MissingPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Space direction='vertical' size='large'>
                <div>
                    <Title>Page not found</Title>
                    <Paragraph>Something went wrong...</Paragraph>
                </div>
                <Button type='primary' onClick={() => navigate('/')}>Return home</Button>
            </Space>
        </div>
    )
}

export default MissingPage