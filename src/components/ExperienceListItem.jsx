import React from 'react';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';

function ExperienceListItem({
  itemKey, title, description, location, content, image, image_alt,
}) {
  return (
    <List.Item
      key={itemKey}
      extra={(
        <img
          src={image}
          alt={image_alt}
          width={100}
        />
              )}
    >
      <List.Item.Meta
        title={title}
        description={(
          <Space direction="vertical">
            <div>
              <CalendarOutlined />
              {' '}
              {description}
            </div>
            <div>
              <EnvironmentOutlined />
              {' '}
              {location}
            </div>
          </Space>
                  )}
      />
      {content}
    </List.Item>
  );
}

export default ExperienceListItem;
