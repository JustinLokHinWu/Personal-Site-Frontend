import PropTypes from 'prop-types';
import React from 'react';
import { Select } from 'antd';

function SelectClass({
  classes, selectedClass, setSelectedClass, isDatasetReady, fetchingClassAndEpochs, datasetSelected,
}) {
  return (
    <Select
      placeholder="Select class"
      options={classes.map((classLabel, index) => (
        { label: classLabel, value: index }
      ))}
      onChange={(classId) => { setSelectedClass(classId); }}
      disabled={!isDatasetReady || !datasetSelected || fetchingClassAndEpochs}
      value={datasetSelected ? selectedClass : null}
      loading={fetchingClassAndEpochs}
    />
  );
}

SelectClass.defaultProps = {
  selectedClass: null,
};

SelectClass.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
  datasetSelected: PropTypes.bool.isRequired,
  fetchingClassAndEpochs: PropTypes.bool.isRequired,
  isDatasetReady: PropTypes.bool.isRequired,
  selectedClass: PropTypes.number,
  setSelectedClass: PropTypes.func.isRequired,
};

export default SelectClass;
