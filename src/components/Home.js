import { Row, Col } from 'antd'

import DemoList from "./DemoList"
import Biography from "./Biography"

const Home = () => {
    return (
        // <div>
        //     <Biography />
        //     <DemoList />
        // </div>
        <div>
            <Biography />
            <DemoList />
        </div>
        // <Row>
        //     <Col xs={24} md={8}>
        //         <Biography />
        //     </Col>
        //     <Col xs={24} md={16}>
        //         <DemoList />
        //     </Col>
        // </Row>
    )
}

export default Home
