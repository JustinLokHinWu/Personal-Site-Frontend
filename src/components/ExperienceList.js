import React from 'react'
import { List } from 'antd'
import ExperienceListItem from './ExperienceListItem'
import image_uoft from '../assets/images/uoft.png'
import image_caseware from '../assets/images/caseware.png'

const ExperienceList = () => {
    const entries = [
        {
            key: 'uoftbachelor',
            title: 'University of Toronto St. George',
            description: 'September 2016 - June 2021',
            content: 'Honours Bachelor of Science with High Distinction. Computer Science Specialist with a focus in artificial intelligence',
            image: image_uoft,
            image_alt: 'uoft'
        },
        {
            key: 'caseware',
            title: 'CaseWare International',
            description: 'May 2019 - August 2020',
            content: 'Backends, frontends, machine learning pipelines',
            image: image_caseware,
            image_alt: 'caseware'
        }
    ]
    
    return (
        <List
            itemLayout="vertical"
            size="large"
            dataSource={entries}
            renderItem={(entry) => (
                <ExperienceListItem
                    key={entry.key}
                    title={entry.title}
                    description={entry.description}
                    content={entry.content}
                    image={entry.image}
                    image_alt={entry.image_alt}
                />
            )}
        />    
    )
}

export default ExperienceList
