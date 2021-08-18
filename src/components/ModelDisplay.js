import { Image, List, Card, Popover } from 'antd'
import "antd/dist/antd.css";

const ModelDisplay = ({images}) => {
    return (
        <List
            grid={{
                gutter: 8,
                // xs: 1,
                // sm: 2,
                // md: 3,
                // lg: 3,
                // xl: 4,
                // xxl: 5
              }}
            dataSource={images}
            renderItem={(item, index) => (
                <List.Item>
                    <Card style={index===0 ? { borderColor:'grey'} :{ }}>
                        <Popover
                            content={
                                <div>
                                    <p>
                                        Class: {item.class}<br/>
                                        Epoch: {item.epoch}<br/>
                                        Seed: {item.seed ? item.seed : 'Random'}
                                    </p>
                                </div>
                            }
                        >
                            <Image
                                width={'100%'}
                                src={item.path} />
                        </Popover>
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default ModelDisplay
