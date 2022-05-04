import React from 'react';
import Biography from './Biography';
import PageContent from './PageContent';
import PageSection from './PageSection';

function HeroImage() {
  return (
    <div className="hero">
      <PageContent>
        <PageSection id="biography">
          <Biography />
        </PageSection>
      </PageContent>
    </div>
  );
}

export default HeroImage;
