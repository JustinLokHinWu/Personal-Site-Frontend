import React from 'react';
import { Typography, Divider } from 'antd';
import DemoList from './DemoList';
// import Biography from './Biography';
import ExperienceList from './ExperienceList';
import PageSection from './PageSection';
import PageContent from './PageContent';
import HeroImage from './HeroImage';

const { Title } = Typography;

function Home() {
  return (
    <div>
      {/* <PageSection id="biography">
        <Biography />
      </PageSection> */}
      <HeroImage />
      <PageContent>
        <PageSection id="demos">
          <Title level={3} style={{ textAlign: 'center' }}>Demos</Title>
          <DemoList />
        </PageSection>
        <Divider />
        <PageSection id="experience">
          <Title level={3} style={{ textAlign: 'center' }}>Experience</Title>
          <ExperienceList />
        </PageSection>
      </PageContent>
    </div>
  );
}

export default Home;
