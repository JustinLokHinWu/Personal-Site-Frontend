import { GithubFilled, CodeOutlined, ReadOutlined } from '@ant-design/icons';
import actganImage from '../assets/images/ACTGAN.png';
import siteImage from '../assets/images/site.jpg';

export const ActganInfo = {
  key: 'actgan',
  title: 'ACTGAN',
  description: 'Multiclass-conditioned novel image generation',
  content: 'ACTGAN is a machine learning model that learns to generates completely novel images of a variety of classes, given a user-given class input.',
  page_path: '/demos/actgan',
  links: [
    {
      key: 'actgan-button-demo', text: 'Demo', link: '/demos/actgan', icon: CodeOutlined, isArticleLink: true, isInternalLink: true,
    },
    {
      key: 'actgan-button-model-link', text: 'Model', link: 'https://github.com/JustinLokHinWu/ACTGAN', icon: GithubFilled, isInternalLink: false,
    },
    {
      key: 'actgan-button-service-link', text: 'Service', link: 'https://github.com/JustinLokHinWu/ACTGAN-Service', icon: GithubFilled, isInternalLink: false,
    },
  ],
  image: actganImage,
  image_alt: 'ACTGAN',
};

export const PersonalSiteInfo = {
  key: 'personalsite',
  title: 'Personal Site',
  description: 'React frontend interfacing with AWS backend',
  content: 'This personal website consists of a React frontend, using Ant Design for UI components and Axios for making requests to backend APIs. The backend is hosted on AWS, using API Gateway and Lambda to serve REST APIs.',
  links: [
    {
      key: 'personal-button-more', text: 'Read More', link: '/articles/personal-site', icon: ReadOutlined, isArticleLink: true, isInternalLink: true,
    },
    {
      key: 'personal-button-source', text: 'Source Code', link: 'https://github.com/JustinLokHinWu/personal-site-frontend', icon: GithubFilled, isInternalLink: false,
    },
  ],
  image: siteImage,
  image_alt: 'Personal website',
};

export const ArticleInfo = [
  ActganInfo,
  PersonalSiteInfo,
];
