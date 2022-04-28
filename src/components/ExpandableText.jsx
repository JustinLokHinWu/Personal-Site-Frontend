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
                <a onClick={() => {
                  setExpanded(!expanded);
                }}
                >
                  { expanded ? 'Show less' : 'Show more' }
                </a>
                )
            }

    </Paragraph>
  );
}

export default ExpandableText;
