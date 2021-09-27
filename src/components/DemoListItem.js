import { CodeOutlined } from '@ant-design/icons';
import { List } from 'antd'
import 'antd/dist/antd.css';

import IconButton from './IconButton';

const DemoListItem = ({ title, description, demoPath, links }) => {
    return (
        <List.Item
            actions={[
                <IconButton
                    icon={CodeOutlined}
                    text={'Demo'}
                    link={demoPath}
                />].concat(
                    links.map(entry => 
                        <IconButton
                            icon={entry.icon}
                            text={entry.text}
                            link={entry.link}
                        />
                    )
                )
            }
        >
            <List.Item.Meta
                    title={title}
                    description={description}
                />
        </List.Item>
    )
}

export default DemoListItem
