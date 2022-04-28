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

export default SelectEpoch;
