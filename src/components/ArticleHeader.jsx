import React from 'react';
import PropTypes from 'prop-types';
import DescriptionsItem from 'antd/lib/descriptions/Item';
import { useNavigate } from 'react-router-dom';
import { PageHeader, Descriptions, Button } from 'antd';

function ArticleHeader({ info }) {
  const navigate = useNavigate();

  return (
    <PageHeader
      className="site-page-header"
      title={info.title}
      onBack={() => navigate('/')}
    >
      <Descriptions column={1} size="small">
        <DescriptionsItem>
          {info.description}
        </DescriptionsItem>
        <DescriptionsItem>
          {
          info.links.filter((entry) => !('isArticleLink' in entry)).map((entry) => (
            <Button
              type="link"
              key={entry.key}
              href={entry.link}
            >
              <entry.icon />
              {entry.text}
            </Button>
          ))
        }
        </DescriptionsItem>
      </Descriptions>
    </PageHeader>
  );
}

ArticleHeader.propTypes = {
  info: PropTypes.shape({
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      isArticleLink: PropTypes.bool,
    })).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleHeader;
