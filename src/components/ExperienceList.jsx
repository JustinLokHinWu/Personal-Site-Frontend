import React from 'react';
import { List } from 'antd';
import ExperienceListItem from './ExperienceListItem';
import imageUoft from '../assets/images/uoft.png';
import imageCaseware from '../assets/images/caseware.png';
import ExpandableText from './ExpandableText';

function ExperienceList() {
  const entries = [
    {
      key: 'uoftbachelor',
      title: 'University of Toronto St. George',
      description: 'September 2016 - June 2021',
      location: 'Toronto, ON',
      content: 'Honours Bachelor of Science with High Distinction. Computer Science Specialist with a focus in artificial intelligence. CGPA: 3.66',
      image: imageUoft,
      imageAlt: 'uoft',
    },
    {
      key: 'caseware',
      title: 'CaseWare International',
      description: 'May 2019 - August 2020',
      location: 'Toronto, ON',
      content: 'At CaseWare, I worked on a variety of projects. I modernized a legacy IIS C++ server, overhauling the logging system to boost performance during high-throughput, multithreaded tasks, collaborating with security experts to fix potential exploits, and introducing new standards for testing. I also researched, designed, and implemented a data processing pipeline for machine learning in Python. This pipeline ensures all user data used for machine learning is properly sanitized of personally identifiable information up to a high standard of k-anonymity. Lastly, I developed the Angular frontend of a web application that graphs financial data pulled from a microservice.',
      image: imageCaseware,
      imageAlt: 'caseware',
    },
  ];

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={entries}
      renderItem={(entry) => (
        <ExperienceListItem
          itemKey={entry.key}
          title={entry.title}
          description={entry.description}
          location={entry.location}
          content={<ExpandableText content={entry.content} maxChars={300} />}
          image={entry.image}
          imageAlt={entry.imageAlt}
        />
      )}
    />
  );
}

export default ExperienceList;
