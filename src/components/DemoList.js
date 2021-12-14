import 'antd/dist/antd.css';
import { List } from 'antd'
import DemoListItem from './DemoListItem';
import { DemoInfo } from './DemoInfo'

const DemoList = () => {
    const demos = DemoInfo
    return (
        // TODO: migrate descriptions, etc. to web service
        <List
            itemLayout="vertical"
            size="large"
            dataSource={demos}
            renderItem={(item) => (
                <DemoListItem
                    title={item.title}
                    description={item.description}
                    content={item.content}
                    demoPath={item.page_path}
                    links={item.links}
                />
            )}
        />
    )
}

export default DemoList
