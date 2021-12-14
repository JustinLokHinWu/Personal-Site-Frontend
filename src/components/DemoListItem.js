import { Avatar, List } from 'antd'
import 'antd/dist/antd.css';

import IconButton from './IconButton';

const DemoListItem = ({ key, title, description, content, links }) => {
    return (
        <List.Item
            key={key}
            actions={
                links.map(entry => 
                    <IconButton
                        icon={entry.icon}
                        text={entry.text}
                        link={entry.link}
                    />
                )
            }
        >
            <List.Item.Meta
                title={title}
                description={description}
            />
            {content}
        </List.Item>
    )
}

export default DemoListItem
