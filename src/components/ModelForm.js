import { useState, useEffect } from 'react'
import { Select, Button, Form } from 'antd'
import "antd/dist/antd.css";
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
    setSelectedDataset}) => {
    
    const [selectedEpoch, setSelectedEpoch] = useState()
    const [selectedClass, setSelectedClass] = useState()
    const [seed, setSeed] = useState(null)

    const handleSubmit = () => {
        fetchImage(selectedDataset, selectedEpoch, selectedClass, seed) 
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
                    // loading={!isDatasetReady}
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
                    disabled={!isDatasetReady}>Generate Image</Button>
            </Form.Item>
        </Form>
    )
}

export default ModelForm
