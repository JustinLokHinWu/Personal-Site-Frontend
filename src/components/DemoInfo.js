import { GithubFilled, CodeOutlined } from '@ant-design/icons';

export const ActganInfo = {
    key: "actgan",
    title: "ACTGAN",
    description: "Multiclass-conditioned novel image generation",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nulla, tincidunt sed faucibus eget, dignissim eu ligula. Vivamus congue erat egestas tempor vestibulum. Duis pharetra felis lacinia imperdiet viverra. Fusce egestas, mauris a cursus suscipit, turpis mi imperdiet lectus, et fermentum ipsum massa in elit.",
    page_path: "/demos/actgan",
    links: [
        {'text': 'Demo', 'link': '/demos/actgan', 'icon': CodeOutlined},
        {'text': 'Model', 'link': 'https://github.com/JustinLokHinWu/ACTGAN', 'icon': GithubFilled},
        {'text': 'Service', 'link': 'https://github.com/JustinLokHinWu/ACTGAN-Service', 'icon': GithubFilled},
    ]
}

export const PersonalSiteInfo = {
    key: "personalsite",
    title: "Personal Site",
    description: "Description",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex nulla, tincidunt sed faucibus eget, dignissim eu ligula. Vivamus congue erat egestas tempor vestibulum. Duis pharetra felis lacinia imperdiet viverra. Fusce egestas, mauris a cursus suscipit, turpis mi imperdiet lectus, et fermentum ipsum massa in elit.",
    links: [
        {'text': 'Source Code', 'link': 'https://github.com/JustinLokHinWu/Personal-Website', 'icon': GithubFilled}
    ]
}

export const DemoInfo = [
    ActganInfo,
    PersonalSiteInfo
]
