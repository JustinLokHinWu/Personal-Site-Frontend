import React from 'react';
import { Divider, Image, Typography } from 'antd';
import ArticleHeader from '../ArticleHeader';
import site_architecture from '../../assets/images/site-architecture.png';
import ImageFigure from '../ImageFigure';

const { Title, Paragraph } = Typography;

function PersonalSiteArticle({ info }) {
  return (
    <div>
      <ArticleHeader
        info={info}
      />
      <Title level={5}>Frontend</Title>
      <Paragraph>
        The website's frontend is a React application that uses
        {' '}
        <a href="https://ant.design/">Ant Design</a>
        {' '}
        for UI components,
        {' '}
        <a href="https://axios-http.com/">Axios</a>
        {' '}
        for backend request promise handling,
        {' '}
        <a href="https://reactrouter.com/">React Router</a>
        {' '}
        for page routing, and
        {' '}
        <a href="https://reactcommunity.org/react-transition-group/">React Transition Group</a>
        {' '}
        for page transition animations. It is hosted on
        {' '}
        <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>
        , which provides features such as easy continuous integration and deployment from GitHub, test and production environments, and
        {' '}
        <a href="https://aws.amazon.com/cloudwatch/">CloudWatch</a>
        {' '}
        integration for monitoring logs and traffic metrics.
      </Paragraph>
      <ImageFigure image={site_architecture} caption="Site architecture, including the backend architecture used to serve the ACTGAN demo" />
      <Title level={5}>Backend</Title>
      <Paragraph>
        The backend services, responsible for handling requests called by the project demos, are hosted on AWS. These REST APIs are accessible through an
        {' '}
        <a href="https://aws.amazon.com/api-gateway/">AWS API Gateway</a>
        , which routes traffic to the correct backend service, performs caching, and enforces request and response rules. Furthermore, it provides a common interface for calling backend services that can differ in architecture.
      </Paragraph>
      <Paragraph>
        For the ACTGAN model demo, I use
        {' '}
        <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>
        , a platform for hosting serverless applications. Unlike traditional dedicated servers, serverless architectures only provision required resources on demand. Since I expect light, sparse traffic to these endpoints, this is suitable for my use case. A disadvantage of serverless models is that the API functions experience a "cold start" when called after a period of inactivity, since the required compute resources need time to be allocated. In testing, the resulting delay in my APIs is within reasonable bounds, so no measures are needed to keep the functions "warm." The function handlers for these APIs are written in Python for easy integration with the trained PyTorch models needed to serve the demo's generate API. To access the machine learning model files stored on
        {' '}
        <a href="https://aws.amazon.com/s3/">S3</a>
        , I use
        {' '}
        <a href="https://aws.amazon.com/sdk-for-python/">Boto3</a>
        . For the simpler request handlers used to fetch information from S3, such as "get-datasets" and "get-epochs," a default Python runtime provided by AWS is used. The generate function, which requires several non-standard libraries such as PyTorch, is deployed as a
        {' '}
        <a href="https://www.docker.com/">Docker</a>
        {' '}
        container hosted on
        {' '}
        <a href="https://aws.amazon.com/ecr/">ECR</a>
        .
      </Paragraph>
      <Paragraph>
        To define the resources and architecture needed for the backend, I use a serverless-specific extension of
        {' '}
        <a href="https://aws.amazon.com/cloudformation/">CloudFormation</a>
        {' '}
        called
        {' '}
        <a href="https://aws.amazon.com/serverless/sam/">Serverless Application Model (SAM)</a>
        . It allows me to define resources such as the API Gateway, Lambda functions, and IAM roles through code in a configuration file. This approach is advantageous over manually configuring resources through the AWS console, since it facilitates replicable creation and deployment of server resources, automatically provides development and production environments, and enables easy testing.
      </Paragraph>

    </div>
  );
}

export default PersonalSiteArticle;
