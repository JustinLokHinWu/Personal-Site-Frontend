import { GithubFilled, CodeOutlined } from '@ant-design/icons';
import { List } from 'antd'
import 'antd/dist/antd.css';

import IconButton from './IconButton';

const DemoListItem = ({ title, description, demoPath, sourcePath }) => {
    return (
        <List.Item
            actions={[
                <IconButton
                    icon={CodeOutlined}
                    text={'Demo'}
                    link={demoPath}
                />,
                <IconButton
                    icon={GithubFilled}
                    text={'Source Code'}
                    link={sourcePath}
                />
        ]}
        >
            <List.Item.Meta
                    title={title}
                    description={description}
                />
        </List.Item>
    )
}

export default DemoListItem
