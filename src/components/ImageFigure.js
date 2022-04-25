import React from 'react'
import { Image, Typography } from 'antd'

const { Text } = Typography

const ImageFigure = ({ image, caption }) => {
  return (
    <div style={{ padding: '20px' }}>
        <Image src={image} />
      
        <div style={{ textAlign: 'center' }}>
            <Text type='secondary'>{caption}</Text>
        </div>
    </div>
  )
}

export default ImageFigure