import { Avatar, Divider, Space, Typography } from 'antd'
import Socials from './Socials'
import ProfilePicture from '../assets/images/profile.jpeg'

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
                src={ProfilePicture}
                size={{ xs: 128, sm: 160, md: 192, lg: 192, xl: 224, xxl: 256 }}
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px', marginBottom: '10px' }}
            />
            <Title level={2}>Hi, I'm Justin</Title>
            <Paragraph style={{'textAlign': 'justify'}}>
                I am a computer science graduate from the University of Toronto St. George. I am passionate in machine learning and web architecture. 
            </Paragraph>
        </Space>
    )
}

export default Biography
