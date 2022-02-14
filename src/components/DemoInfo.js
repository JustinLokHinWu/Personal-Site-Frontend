import { GithubFilled, CodeOutlined } from '@ant-design/icons';

export const ActganInfo = {
    key: "actgan",
    title: "ACTGAN",
    description: "Multiclass-conditioned novel image generation",
    content: "ACTGAN belongs to a class of machine learning models called GANs (generative adversarial networks) that learn to generate completely novel data (i.e. images) that resemble the training data. ACTGAN is a multiclass-conditioned GAN, meaning it can generate completely different classes (ex. images of dogs, cats, etc.) depending on a class input. It extends on AC-GAN (Auxillary Classifier Generative Adversarial Network), using a transformer-based architecture for the \"discriminator\" network. ACTGAN was designed and implemented with a partner as a final project for a machine learning course. ",
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
    content: "This site consists of a React frontend communicating with microservices deployed behind a Kong API gateway. All microservices are dockerized and deployed on AWS.",
    links: [
        {'text': 'Source Code', 'link': 'https://github.com/JustinLokHinWu/Personal-Website', 'icon': GithubFilled}
    ]
}

export const DemoInfo = [
    ActganInfo,
    PersonalSiteInfo
]
