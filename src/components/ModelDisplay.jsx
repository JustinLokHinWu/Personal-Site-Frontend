import React from 'react';
import { Image, List, Popover } from 'antd';

function ModelDisplay({ images }) {
  return (
    <List
      grid={{
        gutter: 8,
      }}
      dataSource={images}
      renderItem={(item) => (
        <List.Item>
          <Popover
            content={(
              <div>
                <p>
                  Class:
                  {' '}
                  {item.class}
                  <br />
                  Epoch:
                  {' '}
                  {item.epoch}
                  <br />
                  Seed:
                  {' '}
                  {item.seed ? item.seed : 'Random'}
                </p>
              </div>
                          )}
          >
            <Image
              width="32px"
              src={item.path}
            />
          </Popover>
        </List.Item>
      )}
    />
  );
}

export default ModelDisplay;
