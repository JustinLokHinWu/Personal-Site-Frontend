import React from 'react'
import { List } from 'antd'

const ExperienceListItem = ({ key, title, description, content, image, image_alt }) => {
    return (
        <List.Item
            key={key}
            extra={
                <img
                    src={image}
                    alt={image_alt}
                    width={100}
                />
            }
        >
            <List.Item.Meta
                title={title}
                description={description}
            />
            {content}
        </List.Item>
    )
}

export default ExperienceListItem
