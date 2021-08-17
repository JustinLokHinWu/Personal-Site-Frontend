import { useState } from 'react'
import { Select, Button, Form, Input } from 'antd'
import "antd/dist/antd.css";
import SeedInput from './SeedInput';

const ModelForm = ({ epochs, classes, fetchImage, isRequesting }) => {
    const [selectedEpoch, setSelectedEpoch] = useState()
    const [selectedClass, setSelectedClass] = useState()
    const [seed, setSeed] = useState(null)

    const handleSubmit = (event) => {
        console.log('Submitting form')
        fetchImage(selectedEpoch, selectedClass, seed) 
    }

    return (
        <Form onFinish={handleSubmit}>
            <Form.Item
                label='Epoch'
                name='epoch'
                rules={[{required: true, message: 'Please select an epoch'}]}
            >
                <Select
                    placeholder="Select epoch"
                    style={{ width: 150 }}
                    options={epochs.map((epoch) => (
                        {'value': epoch}
                    ))}
                    onChange={(epoch) => {setSelectedEpoch(epoch)}}
                />
            </Form.Item>

            <Form.Item
                label='Class'
                name='class'
                rules={[{required: true, message: 'Please select an class'}]}
            >
                <Select
                    placeholder="Select class"
                    style={{ width: 150 }}
                    options={classes.map((class_label, index) => (
                        {'label': class_label, 'value': index}
                    ))}
                    onChange={(class_id) => {setSelectedClass(class_id)}}
                />
            </Form.Item>

            <Form.Item label='Seed' name='seed'>
                <SeedInput
                    seed={seed}
                    setSeed={setSeed} />
            </Form.Item>

            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                    loading={isRequesting}>Generate Image</Button>
            </Form.Item>
        </Form>
    )
}

export default ModelForm
