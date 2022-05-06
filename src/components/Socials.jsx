import PropTypes from 'prop-types';
import React from 'react';
import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import { Row } from 'antd';
import IconButton from './IconButton';

function Socials({ useText }) {
  return (
    <Row>
      <IconButton
        icon={LinkedinFilled}
        text={useText ? 'LinkedIn' : null}
        link="https://www.linkedin.com/in/justin-wu-7a197a172/"
        size="large"
      />
      <IconButton
        icon={MailFilled}
        text={useText ? 'Email' : null}
        tooltip="Copied to clipboard"
        onClick={() => {
          navigator.clipboard.writeText('JustinLHWu@gmail.com');
        }}
        size="large"
      />
      <IconButton
        icon={GithubFilled}
        text={useText ? 'GitHub' : null}
        link="https://github.com/JustinLokHinWu"
        size="large"
      />
    </Row>
  );
}
Socials.defaultProps = {
  useText: true,
};

Socials.propTypes = {
  useText: PropTypes.bool,
};

export default Socials;
