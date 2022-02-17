import { Avatar, List } from 'antd'
import 'antd/dist/antd.css';

import IconButton from './IconButton';

const DemoListItem = ({ key, title, description, content, links, image, image_alt }) => {
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
            extra={
                <img
                    src={image}
                    alt={image_alt}
                    width={100}
                />
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
