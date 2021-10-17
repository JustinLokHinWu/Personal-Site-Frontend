import DemoList from "./DemoList"
import Biography from "./Biography"

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
            <section id='demos'>
                <h1 style={{ textAlign: 'center' }}>Demos</h1>
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
