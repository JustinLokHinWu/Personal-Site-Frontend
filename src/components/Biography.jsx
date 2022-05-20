import React from 'react';
import {
  Avatar, Row, Col, Space, Typography,
} from 'antd';
import ProfilePicture from '../assets/images/profile.jpg';
import Socials from './Socials';

const { Title, Paragraph } = Typography;

function Biography() {
  return (
    <Row align="bottom" justify="center" gutter={16}>
      <Col xs={24} sm={8}>
        <Avatar
          src={ProfilePicture}
          size={{
            xs: 160, sm: 160, md: 160, lg: 192, xl: 192, xxl: 192,
          }}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '25px',
            marginBottom: '25px',
          }}
          shape="circle"
        />
      </Col>
      <Col xs={24} sm={16}>
        <Space
          direction="vertical"
          size="small"
          style={{ width: '100%' }}
        >
          <Title level={2}>Hi, I&apos;m Justin</Title>
          <Paragraph style={{ textAlign: 'justify' }}>
            I am a software developer currently living in Toronto, Canada. I studied Computer
            Science
            at the University of Toronto St. George, graduating with an Honours Bachelor&apos;s of
            Science. I am passionate in machine learning, data science, and web architecture.
          </Paragraph>
          <Socials useText={false} />
        </Space>
      </Col>
    </Row>
  );
}

export default Biography;
