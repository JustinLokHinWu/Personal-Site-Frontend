import React from 'react';
import { List } from 'antd';
import DemoListItem from './DemoListItem';
import { ArticleInfo } from './ArticleInfo';

function DemoList() {
  const demos = ArticleInfo;
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={demos}
      renderItem={(item) => (
        <DemoListItem
          key={item.key}
          title={item.title}
          description={item.description}
          content={item.content}
          demoPath={item.page_path}
          links={item.links}
          image={item.image}
          image_alt={item.image_alt}
        />
      )}
    />
  );
}

export default DemoList;
