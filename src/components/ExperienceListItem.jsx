import PropTypes from 'prop-types';
import React from 'react';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';

function ExperienceListItem({
  itemKey, title, description, location, content, image, imageAlt,
}) {
  return (
    <List.Item
      key={itemKey}
      extra={(
        <img
          src={image}
          alt={imageAlt}
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

ExperienceListItem.defaultProps = {
  location: '',
};

ExperienceListItem.propTypes = {
  content: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
  location: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ExperienceListItem;
