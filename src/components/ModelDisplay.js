import { Image, List, Card } from 'antd'
import "antd/dist/antd.css";

const ModelDisplay = ({images}) => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
              }}
            dataSource={images}
            renderItem={(item) => (
                <List.Item>
                    <Card>
                        <Image
                            width={128}
                            src={item.path} />
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default ModelDisplay
