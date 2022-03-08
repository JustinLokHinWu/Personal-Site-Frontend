import { Avatar, Divider, Space, Typography } from 'antd'
import Socials from './Socials'

const { Title, Paragraph } = Typography


const Biography = () => {
    return (
        <Space
            direction='vertical'   
            align='center'
            size='small'
        >
            <Avatar
                size={{ xs: 128, sm: 160, md: 192, lg: 192, xl: 224, xxl: 256 }}
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '25px', marginBottom: '10px' }}
            />
            <Title level={2}>Hi, I'm Justin</Title>
            <Paragraph style={{'textAlign': 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nulla, tincidunt sed faucibus eget, dignissim eu ligula. Vivamus congue erat egestas tempor vestibulum. Duis pharetra felis lacinia imperdiet viverra. Fusce egestas, mauris a cursus suscipit, turpis mi imperdiet lectus, et fermentum ipsum massa in elit. Nulla neque massa, pellentesque ut urna eget, hendrerit mollis diam. Cras lobortis quam vel posuere tempor. Fusce semper cursus dolor, et varius tortor commodo sit amet. Nam sit amet orci ac turpis imperdiet consequat. Duis eget neque eu libero ultrices posuere. Sed vestibulum dui risus, non vulputate diam pretium ut. Proin vel lectus ex. Mauris lobortis nunc non libero dictum, eu pretium est consectetur. Quisque dapibus mi sit amet pharetra volutpat.
            </Paragraph>
            <Socials />
            <Divider />
        </Space>
    )
}

export default Biography
