import React from 'react';
import { List } from 'antd';
import { useNavigate } from 'react-router-dom';

import IconButton from './IconButton';

function DemoListItem({
  itemKey, title, description, content, links, image, imageAlt,
}) {
  const navigate = useNavigate();
  return (
    <List.Item
      key={itemKey}
      actions={
                links.map((entry) => (
                  <IconButton
                    icon={entry.icon}
                    text={entry.text}
                    onClick={() => (entry.isInternalLink ? navigate(entry.link) : null)}
                    link={entry.isInternalLink ? null : entry.link}
                  />
                ))
            }
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
        description={description}
      />
      {content}
    </List.Item>
  );
}

export default DemoListItem;
