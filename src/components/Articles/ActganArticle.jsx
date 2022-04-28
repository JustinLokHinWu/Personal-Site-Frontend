import React from 'react';
import { Divider, Typography } from 'antd';
import ArticleHeader from '../ArticleHeader';
import ModelDemo from '../ModelDemo';

const { Paragraph } = Typography;

function ActganArticle({ info, backendURL }) {
  return (
    <div>
      <ArticleHeader info={info} />
      <Paragraph>ACTGAN belongs to a class of machine learning models called GANs (generative adversarial networks) that learn to generate completely novel data (i.e. images) that resemble the training data. ACTGAN is a multiclass-conditioned GAN, meaning it can generate completely different classes (ex. images of dogs, cats, etc.) depending on a class input. It extends on AC-GAN (Auxillary Classifier Generative Adversarial Network)by using a transformer-based architecture for the "discriminator" network. ACTGAN was designed and implemented with a partner as a final project for a machine learning course.</Paragraph>
      <Paragraph>Several models trained on a variety of datasets are available for demo. The user can generate images by specifying the dataset of the model, the epoch (early epochs are from the beginning of training, while later epochs are from the end of training), the class of image, and an optional seed. </Paragraph>
      <Divider />
      <ModelDemo
        info={info}
        backendURL={backendURL}
      />
    </div>
  );
}

export default ActganArticle;
