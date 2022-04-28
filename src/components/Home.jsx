import React from 'react';
import { Typography, Divider } from 'antd';
import DemoList from './DemoList';
import Biography from './Biography';
import ExperienceList from './ExperienceList';
import PageSection from './PageSection';

const { Title } = Typography;

function Home() {
  return (
    <div>
      <PageSection id="biography">
        <Biography />
      </PageSection>
      <Divider />
      <PageSection id="demos">
        <Title level={3} style={{ textAlign: 'center' }}>Demos</Title>
        <DemoList />
      </PageSection>
      <Divider />
      <PageSection id="experience">
        <Title level={3} style={{ textAlign: 'center' }}>Experience</Title>
        <ExperienceList />
      </PageSection>
    </div>
  );
}

export default Home;
