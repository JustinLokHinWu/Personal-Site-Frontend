import React from 'react'
import DescriptionsItem from 'antd/lib/descriptions/Item'
import { useHistory } from 'react-router'
import { PageHeader, Descriptions, Button } from 'antd'

const ArticleHeader = ({ info }) => {
  const history = useHistory()

  return (
    <PageHeader
      className='site-page-header'
      title={info.title}
      onBack={() => history.goBack()}
    >
      <Descriptions column={1} size='small'>
        <DescriptionsItem>
          {info.description}
        </DescriptionsItem>
        <DescriptionsItem> 
        {
          info.links.map(entry => 
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