import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { Typography, Button } from 'antd';

const { Paragraph } = Typography;

function ExpandableText({ content, maxChars }) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = content.length > maxChars;

  return (
    <Paragraph>
      {
        `${canExpand && !expanded
          ? `${content.substring(0, content.substring(0, maxChars).lastIndexOf(' '))}...`
          : content} `
      }
      {
        canExpand
          && (
            <Button
              type="link"
              className="inline-button"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              { expanded ? 'Show less' : 'Show more' }
            </Button>
          )
      }
    </Paragraph>
  );
}

ExpandableText.defaultProps = {
  maxChars: 200,
};

ExpandableText.propTypes = {
  content: PropTypes.string.isRequired,
  maxChars: PropTypes.number,
};

export default ExpandableText;
