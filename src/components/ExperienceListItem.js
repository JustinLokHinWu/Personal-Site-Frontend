import React from 'react'
import { List } from 'antd'

const ExperienceListItem = ({ itemKey, title, description, content, image, image_alt }) => {
    return (
        <List.Item
            key={itemKey}
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
