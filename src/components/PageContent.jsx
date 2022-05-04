import PropTypes from 'prop-types';
import React from 'react';
import { Col } from 'antd';

function PageContent({ children }) {
  return (
    <Col
      xs={24}
      sm={24}
      md={20}
      lg={18}
      xl={16}
      style={{ padding: '30px 5%', minHeight: 380, margin: 'auto' }}
    >
      {children}
    </Col>
  );
}

PageContent.defaultProps = {
  children: null,
};

PageContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default PageContent;
