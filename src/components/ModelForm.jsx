import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Select, Button, Form } from 'antd';
import SeedInput from './SeedInput';
import SelectEpoch from './SelectEpoch';
import SelectClass from './SelectClass';

function ModelForm({
  epochs,
  classes,
  fetchImage,
  isRequesting,
  datasets,
  isDatasetReady,
  selectedDataset,
  setSelectedDataset,
  fetchingDatasetLists,
  fetchingClassAndEpochs,
}) {
  const [selectedEpoch, setSelectedEpoch] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [seed, setSeed] = useState(null);

  const generateRandomSeed = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  const handleSubmit = () => {
    // If the seed is not set, generate a random one. The backend can
    // handle a missing seed, but doing it this way means we can have the
    // seed in the frontend without fetching it from the server
    const imageSeed = (seed == null) ? generateRandomSeed() : seed;

    fetchImage(selectedDataset, selectedEpoch, selectedClass, imageSeed);
  };

  useEffect(() => {
    setSelectedEpoch(epochs[0]);
  }, [epochs]);

  useEffect(() => {
    setSelectedClass(classes.length ? 0 : null);
  }, [classes]);

  return (
    <Form
      onFinish={handleSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ padding: 16 }}
    >
      <Form.Item
        label="Dataset"
        name="dataset"
        rules={[{ required: true, message: 'Please select a dataset' }]}
      >
        <Select
          placeholder="Select dataset"
          options={datasets.map((dataset) => (
            { value: dataset }
          ))}
          onChange={(dataset) => { setSelectedDataset(dataset); }}
                    // disabled={!isDatasetReady}
          loading={fetchingDatasetLists}
        />
      </Form.Item>
      <Form.Item
        label="Epoch"
        name="epoch"
      >
        <SelectEpoch
          epochs={epochs}
          selectedEpoch={selectedEpoch}
          setSelectedEpoch={setSelectedEpoch}
          isDatasetReady={isDatasetReady}
          fetchingClassAndEpochs={fetchingClassAndEpochs}
          datasetSelected={selectedDataset !== undefined}
        />
      </Form.Item>

      <Form.Item
        label="Class"
        name="class"
      >
        <SelectClass
          classes={classes}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          isDatasetReady={isDatasetReady}
          fetchingClassAndEpochs={fetchingClassAndEpochs}
          datasetSelected={selectedDataset !== undefined}
        />
      </Form.Item>

      <Form.Item label="Seed" name="seed">
        <SeedInput
          seed={seed}
          setSeed={setSeed}
        />
      </Form.Item>

      <Form.Item name="submit" wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            whiteSpace: 'normal',
            height: 'auto',
            marginBottom: '10px',
          }}
          loading={isRequesting}
          disabled={!isDatasetReady
                        || fetchingClassAndEpochs
                        || selectedClass == null
                        || selectedEpoch == null}
        >
          Generate Image
        </Button>
      </Form.Item>
    </Form>
  );
}

ModelForm.defaultProps = {
  selectedDataset: null,
};

ModelForm.propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
  datasets: PropTypes.arrayOf(PropTypes.string).isRequired,
  epochs: PropTypes.arrayOf(PropTypes.number).isRequired,
  fetchImage: PropTypes.func.isRequired,
  fetchingClassAndEpochs: PropTypes.bool.isRequired,
  fetchingDatasetLists: PropTypes.bool.isRequired,
  isDatasetReady: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  selectedDataset: PropTypes.string,
  setSelectedDataset: PropTypes.func.isRequired,
};

export default ModelForm;
