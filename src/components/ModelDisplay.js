import { Image, List, Card } from 'antd'
import "antd/dist/antd.css";

const ModelDisplay = ({images}) => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 4,
                xxl: 5
              }}
            dataSource={images}
            renderItem={(item, index) => (
                <List.Item>
                    <Card style={index===0 ? { borderColor:'grey'} :{ }}>
                        <Image
                            width={'96px'}
                            src={item.path} />
                        <p>
                            Class: {item.class}<br/>
                            Epoch: {item.epoch}<br/>
                            Seed: {item.seed ? item.seed : 'Random'}
                            </p>
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default ModelDisplay
