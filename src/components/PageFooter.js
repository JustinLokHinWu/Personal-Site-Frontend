import React from 'react'
import { Typography } from 'antd'
import Socials from './Socials'

const { Title, Paragraph } = Typography

const PageFooter = () => {
  return (
    <div>
        <Title level={3}>Contact Me</Title>
        <Socials />
        &#xA9; 2022 Justin Wu
    </div>
  )
}

export default PageFooter