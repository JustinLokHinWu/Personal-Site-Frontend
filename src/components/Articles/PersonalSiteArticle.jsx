import React from 'react';
import { Typography } from 'antd';
import ArticleHeader from '../ArticleHeader';
import { PersonalSiteInfo } from '../ArticleInfo';
import siteArchitecture from '../../assets/images/site-architecture.png';
import ImageFigure from '../ImageFigure';

const { Title, Paragraph } = Typography;

function PersonalSiteArticle() {
  return (
    <div>
      <ArticleHeader
        info={PersonalSiteInfo}
      />
      <Title level={5}>Frontend</Title>
      <Paragraph>
        The website&apos;s frontend is a
        {' '}
        <a href="https://reactjs.org/">React</a>
        {' '}
        application that uses
        {' '}
        <a href="https://ant.design/">Ant Design</a>
        {' '}
        for UI components,
        {' '}
        <a href="https://axios-http.com/">Axios</a>
        {' '}
        for managing backend HTTP request promises,
        {' '}
        <a href="https://reactrouter.com/">React Router</a>
        {' '}
        for client-side page routing,
        {' '}
        <a href="https://jestjs.io/">Jest</a>
        {' '}
        and
        {' '}
        <a href="https://airbnb.io/projects/enzyme/">Enzyme</a>
        {' '}
        for unit testing, and
        {' '}
        <a href="https://www.framer.com/motion/">Framer Motion</a>
        {' '}
        for page transitions and animations.
      </Paragraph>
      <Paragraph>
        I chose to host the site on
        {' '}
        <a href="https://aws.amazon.com/amplify/">AWS Amplify</a>
        , since it provides several convenient services that facilitate continuous integration and
        deployment.

        Pull requests on the project&apos;s Github repository&apos;s trigger
        {' '}
        <a href="https://github.com/features/actions">Actions</a>
        {' '}
        that run unit tests and deploy the project on a test environment hosted on Amplify.
        Then, when the pull request is merged, Amplify automatically deploys the project to
        production. I also leverage Amplify&apos;s integration with
        {' '}
        <a href="https://aws.amazon.com/cloudwatch/">CloudWatch</a>
        {' '}
        to monitor logs and track traffic metrics.
      </Paragraph>
      <ImageFigure
        image={siteArchitecture}
        caption="Site architecture, including the backend architecture used to serve the ACTGAN demo"
        width="75%"
      />
      <Title level={5}>Backend</Title>
      <Paragraph>
        The backend services, which are called by the project demos, are also hosted on AWS.
        The served REST APIs are accessible through an
        {' '}
        <a href="https://aws.amazon.com/api-gateway/">AWS API Gateway</a>
        , which routes traffic to the correct backend service, performs caching, and enforces
        request and response rules. Furthermore, it provides a common interface for calling backend
        services that can differ in architecture.
      </Paragraph>
      <Paragraph>
        I built the ACTGAN machine learning demo application on top of
        {' '}
        <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>
        , a platform for hosting serverless applications. Unlike the dedicated servers used
        traditionally, serverless architectures only provision required resources on demand.
        Since I expect light, intermittent traffic to these endpoints, a serverless architecture is
        suitable.
      </Paragraph>
      <Paragraph>
        The Lambda function handlers for these
        APIs are written in Python for easy integration with the trained PyTorch models needed to
        serve the demo&apos;s generate API. These machine learning model files are stored on
        {' '}
        <a href="https://aws.amazon.com/s3/">Amazon S3</a>
        , which are then retrieved by the application using a
        {' '}
        <a href="https://aws.amazon.com/sdk-for-python/">Boto3</a>
        {' '}
        client. The generate API uses these models to produces an image output from the request
        parameters. Since this process requires several non-standard libraries such as
        PyTorch, this particular Lambda function handler is deployed as a
        {' '}
        <a href="https://www.docker.com/">Docker</a>
        {' '}
        container stored on
        {' '}
        <a href="https://aws.amazon.com/ecr/">Amazon ECR</a>
        .
      </Paragraph>
      <Paragraph>
        To define the resources and architecture needed for the backend, I use a serverless-specific
        extension of
        {' '}
        <a href="https://aws.amazon.com/cloudformation/">CloudFormation</a>
        {' '}
        called
        {' '}
        <a href="https://aws.amazon.com/serverless/sam/">Serverless Application Model (SAM)</a>
        . I define resources such as the API Gateway, Lambda functions, and IAM roles
        through code in a SAM configuration file. This approach is advantageous to manually
        configuring resources in the AWS console, since it facilitates the replicable creation of
        server resources, the separate configuration of development and production environments,
        and testing through the SAM CLI.
      </Paragraph>
    </div>
  );
}

export default PersonalSiteArticle;
