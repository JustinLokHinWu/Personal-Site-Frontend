import React from 'react';
import {
  Avatar, Space, Typography,
} from 'antd';
import ProfilePicture from '../assets/images/profile.jpg';
import Socials from './Socials';

const { Title, Paragraph } = Typography;

function Biography() {
  return (
    <Space
      direction="vertical"
      align="center"
      size="small"
      style={{ width: '100%' }}
    >
      <Avatar
        src={ProfilePicture}
        size={{
          xs: 128, sm: 160, md: 192, lg: 192, xl: 224, xxl: 256,
        }}
        style={{
          display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px', marginBottom: '10px',
        }}
      />
      <Title level={2}>Hi, I&apos;m Justin</Title>
      <Paragraph style={{ textAlign: 'justify' }}>
        I am a software developer currently living in Toronto, Canada. I studied Computer
        Science
        at the University of Toronto St. George, graduating with an Honours Bachelor&apos;s of
        Science. I am passionate in machine learning, data science, and system design.
      </Paragraph>
      <Socials useText={false} />
    </Space>
  );
}

export default Biography;
