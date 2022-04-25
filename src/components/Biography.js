import { Avatar, Divider, Space, Typography } from 'antd'
import Socials from './Socials'

const { Title, Paragraph } = Typography


const Biography = () => {
    return (
        <Space
            direction='vertical'   
            align='center'
            size='small'
            style={{width: '100%'}}
        >
            <Avatar
                size={{ xs: 128, sm: 160, md: 192, lg: 192, xl: 224, xxl: 256 }}
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px', marginBottom: '10px' }}
            />
            <Title level={2}>Hi, I'm Justin</Title>
            <Paragraph style={{'textAlign': 'justify'}}>
                Computer science graduate at the University of Toronto St. George. Passionate in machine learning, 
            </Paragraph>
        </Space>
    )
}

export default Biography
