import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'antd';

function SeedInput({ seed, setSeed }) {
  const onChange = (e) => {
    const { value } = e.target;
    const reg = /^[0-9]*$/;
    if (value === null || value === '') {
      setSeed(null);
    } else if (reg.test(value) && +value < Number.MAX_SAFE_INTEGER) {
      setSeed(value);
    }
  };

  return (
    <Input
      name="SeedInputForm"
      placeholder="Random"
      value={seed}
      onChange={onChange}
    />
  );
}

SeedInput.defaultProps = {
  seed: null,
};

SeedInput.propTypes = {
  seed: PropTypes.number,
  setSeed: PropTypes.func.isRequired,
};

export default SeedInput;
