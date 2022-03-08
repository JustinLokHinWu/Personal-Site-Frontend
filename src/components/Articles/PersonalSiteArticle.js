import { Divider } from 'antd'
import React from 'react'
import ArticleHeader from '../ArticleHeader'

const PersonalSiteArticle = ({ info }) => {
  return (
    <div>
      <ArticleHeader
        info={info}
      />
      <Divider />
    </div>
  )
}

export default PersonalSiteArticle