import DemoList from "./DemoList"
import Biography from "./Biography"
import { Typography, Divider } from "antd"
import ExperienceList from "./ExperienceList"
import PageSection from "./PageSection"
const { Title } = Typography

const Home = () => {
    return (
        <div>
            <PageSection id='biography'>
                <Biography />
                </PageSection>
            <Divider />
            <PageSection id='demos'>
                <Title level={3} style={{'textAlign': 'center'}}>Demos</Title>
                <DemoList />
            </PageSection>
            <Divider />
            <PageSection id='experience'>
                <Title level={3} style={{'textAlign': 'center'}}>Experience</Title>
                <ExperienceList />
            </PageSection>
        </div>
    )
}

export default Home
