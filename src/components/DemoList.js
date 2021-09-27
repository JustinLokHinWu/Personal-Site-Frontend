import { List } from 'antd'
import 'antd/dist/antd.css';
import DemoListItem from './DemoListItem';
import { DemoInfo } from './DemoInfo'

const DemoList = () => {
    console.log(DemoInfo)
    const demos = DemoInfo
    console.log(demos)
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
                    demoPath={item.page_path}
                    links={item.links}
                >
                    Ding Dong
                </DemoListItem>
            )}
        >

            {/* <DemoListItem
                title='ACTGAN Demo'
                description=''
                demoPath='/demos/actgan'
                sourcePath='https://github.com/JustinLokHinWu/ACTGAN'
            /> */}
        </List>
    )
}

export default DemoList
