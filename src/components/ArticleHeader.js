import React from 'react'
import DescriptionsItem from 'antd/lib/descriptions/Item'
import { useNavigate } from 'react-router-dom'
import { PageHeader, Descriptions, Button } from 'antd'

const ArticleHeader = ({ info }) => {
  const navigate = useNavigate()

  return (
    <PageHeader
      className='site-page-header'
      title={info.title}
      onBack={() => navigate('/')}
    >
      <Descriptions column={1} size='small'>
        <DescriptionsItem>
          {info.description}
        </DescriptionsItem>
        <DescriptionsItem> 
        {
          info.links.filter(entry => !('isArticleLink' in entry)).map(entry => 
            <Button
              type='link'
              href={entry.link}>
                <entry.icon />{entry.text}
            </Button>
          )
        }
        </DescriptionsItem>
      </Descriptions>
    </PageHeader>
  )
}

export default ArticleHeader