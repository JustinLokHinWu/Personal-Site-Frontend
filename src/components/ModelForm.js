import { useState, useEffect } from 'react'
import { Select, Button, Form } from 'antd'
import SeedInput from './SeedInput';
import SelectEpoch from './SelectEpoch';
import SelectClass from './SelectClass';

const ModelForm = ({
    epochs,
    classes,
    fetchImage,
    isRequesting,
    datasets,
    isDatasetReady,
    selectedDataset,
    setSelectedDataset,
    fetchingDatasetLists,
    fetchingClassAndEpochs
}) => {
    
    const [selectedEpoch, setSelectedEpoch] = useState(null)
    const [selectedClass, setSelectedClass] = useState(null)
    const [seed, setSeed] = useState(null)

    const generateRandomSeed = () => {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    }

    const handleSubmit = () => {
        // If the seed is not set, generate a random one. The backend can
        // handle a missing seed, but doing it this way means we can have the
        // seed in the frontend without fetching it from the server
        const image_seed = (seed==null) ? generateRandomSeed() : seed
        
        fetchImage(selectedDataset, selectedEpoch, selectedClass, image_seed) 
    }

    useEffect(() => {
        setSelectedEpoch(epochs[0])
    }, [epochs])

    useEffect(() => {
        setSelectedClass(0)
    }, [classes])

    return (
        <Form
            onFinish={handleSubmit}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ padding: 16 }}>
            <Form.Item
                label='Dataset'
                name='dataset'
                rules={[{required: true, message: 'Please select a dataset'}]}
            >
                <Select
                    placeholder="Select dataset"
                    options={datasets.map((dataset) => (
                        {'value': dataset}
                    ))}
                    onChange={(dataset) => {setSelectedDataset(dataset)}}
                    // disabled={!isDatasetReady}
                    loading={fetchingDatasetLists}
                />
            </Form.Item>
            <Form.Item
                label='Epoch'
                name='epoch'
            >
                <SelectEpoch
                    epochs={epochs}
                    selectedEpoch={selectedEpoch}
                    setSelectedEpoch={setSelectedEpoch}
                    isDatasetReady={isDatasetReady}
                    fetchingClassAndEpochs={fetchingClassAndEpochs}
                    datasetSelected={selectedDataset!==undefined}
                />
            </Form.Item>

            <Form.Item
                label='Class'
                name='class'
            >
                <SelectClass
                    classes={classes}
                    selectedClass={selectedClass}
                    setSelectedClass={setSelectedClass}
                    isDatasetReady={isDatasetReady}
                    fetchingClassAndEpochs={fetchingClassAndEpochs}
                    datasetSelected={selectedDataset!==undefined}
                />
            </Form.Item>

            <Form.Item label='Seed' name='seed'>
                <SeedInput
                    seed={seed}
                    setSeed={setSeed} />
            </Form.Item>

            <Form.Item name='submit' wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type='primary'
                    htmlType='submit'
                    style={{ 
                        whiteSpace: "normal",
                        height:'auto',
                        marginBottom:'10px'
                    }}
                    loading={isRequesting}
                    disabled={!isDatasetReady 
                        || fetchingClassAndEpochs
                        || selectedClass == null 
                        || selectedEpoch == null }>Generate Image</Button>
            </Form.Item>
        </Form>
    )
}

export default ModelForm
