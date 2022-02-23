import DemoList from "./DemoList"
import Biography from "./Biography"
import { Typography, Divider } from "antd"
import ExperienceList from "./ExperienceList"
const { Title } = Typography

const Home = () => {
    return (
        <div>
            <section id='biography'>
                <Biography/>
            </section>
            <Divider />
            <section id='demos'>
                <Title level={3} style={{'textAlign': 'center'}}>Demos</Title>
                <DemoList />
            </section>
            <Divider />
            <section id='experience'>
                <Title level={3} style={{'textAlign': 'center'}}>Experience</Title>
                <ExperienceList />
            </section>
        </div>
    )
}

export default Home
