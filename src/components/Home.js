import DemoList from "./DemoList"
import Biography from "./Biography"
import { Typography, Divider } from "antd"
const { Title } = Typography

const Home = () => {
    return (
        // <div>
        //     <Biography />
        //     <DemoList />
        // </div>
        <div>
            <section id='biography'>
                <Biography/>
            </section>
            <Divider />
            <section id='demos'>
                <Title level={3} style={{'textAlign': 'center'}}>Demos</Title>
                <DemoList />
            </section>
            
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
