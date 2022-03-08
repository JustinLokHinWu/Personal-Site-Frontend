import { Divider } from 'antd'
import React from 'react'
import ArticleHeader from '../ArticleHeader'
import ModelDemo from '../ModelDemo'

const ActganArticle = ({ info, backendURL }) => {
  return (
    <div>
        <ArticleHeader info={info} />
        <Divider />
        <ModelDemo
            info={info}
            backendURL={backendURL} />
    </div>
  )
}

export default ActganArticle