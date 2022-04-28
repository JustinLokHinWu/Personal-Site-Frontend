import PropTypes from 'prop-types';
import React from 'react';
import { Select } from 'antd';

function SelectEpoch({
  epochs, selectedEpoch, setSelectedEpoch, isDatasetReady, fetchingClassAndEpochs, datasetSelected,
}) {
  return (
    <Select
      placeholder="Select epoch"
      options={epochs.map((epoch) => (
        { value: epoch }
      ))}
      onChange={(epoch) => { setSelectedEpoch(epoch); }}
      disabled={!isDatasetReady || !datasetSelected || fetchingClassAndEpochs}
      value={datasetSelected ? selectedEpoch : null}
      loading={fetchingClassAndEpochs}
    />
  );
}

SelectEpoch.defaultProps = {
  selectedEpoch: null,
};

SelectEpoch.propTypes = {
  datasetSelected: PropTypes.bool.isRequired,
  epochs: PropTypes.arrayOf(PropTypes.number).isRequired,
  fetchingClassAndEpochs: PropTypes.bool.isRequired,
  isDatasetReady: PropTypes.bool.isRequired,
  selectedEpoch: PropTypes.number,
  setSelectedEpoch: PropTypes.func.isRequired,
};

export default SelectEpoch;
