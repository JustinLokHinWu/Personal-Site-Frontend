import { List } from 'antd'
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';

import IconButton from './IconButton';

const DemoListItem = ({ itemKey, title, description, content, links, image, image_alt }) => {
    const navigate = useNavigate()
    return (
        <List.Item
            key={itemKey}
            actions={
                links.map(entry => 
                    <IconButton
                        icon={entry.icon}
                        text={entry.text}
                        onClick={() => entry.isInternalLink ? navigate(entry.link) : null}
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
