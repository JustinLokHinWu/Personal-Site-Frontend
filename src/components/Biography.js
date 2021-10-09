import { Avatar, Divider } from 'antd'
import Socials from './Socials'


const Biography = () => {
    return (
        <div>
            <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
            <h1>Justin Wu</h1>
            <Divider />
            <p style={{'textAlign': 'justify'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nulla, tincidunt sed faucibus eget, dignissim eu ligula. Vivamus congue erat egestas tempor vestibulum. Duis pharetra felis lacinia imperdiet viverra. Fusce egestas, mauris a cursus suscipit, turpis mi imperdiet lectus, et fermentum ipsum massa in elit. Nulla neque massa, pellentesque ut urna eget, hendrerit mollis diam. Cras lobortis quam vel posuere tempor. Fusce semper cursus dolor, et varius tortor commodo sit amet. Nam sit amet orci ac turpis imperdiet consequat. Duis eget neque eu libero ultrices posuere. Sed vestibulum dui risus, non vulputate diam pretium ut. Proin vel lectus ex. Mauris lobortis nunc non libero dictum, eu pretium est consectetur. Quisque dapibus mi sit amet pharetra volutpat.
            </p>
            <Divider />
            <Socials />
        </div>
    )
}

export default Biography
