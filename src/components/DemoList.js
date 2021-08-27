import { List } from 'antd'
import 'antd/dist/antd.css';

const DemoList = () => {
    return (
        // TODO: migrate descriptions, etc. to web service
        <List
            itemLayout="vertical"
            size="large"
        >
            <List.Item>
                <List.Item.Meta
                    title='Personal Website'
                    description='Test'
                />
            </List.Item>
            <List.Item>
                <List.Item.Meta
                    title='ACTGAN'
                    description='Test'
                />
            </List.Item>
        </List>
    )
}

export default DemoList
