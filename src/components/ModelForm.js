import { useState } from 'react'
import { Select, Button, Form } from 'antd'
import "antd/dist/antd.css";

const ModelForm = ({ epochs, fetchImage, isRequesting }) => {
    const [selectedEpoch, setSelectedEpoch] = useState()

    const handleSubmit = (event) => {
        console.log('Submitting form')
        fetchImage(selectedEpoch)
    }
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item
                label='Epoch'
                name='epoch'
                rules={[{required: true, message: 'Please select an epoch'}]}
            >
                <Select
                    // showSearch
                    placeholder="Select epoch"
                    style={{ width: 150 }}
                    options={epochs.map((epoch) => (
                        {'value': epoch}
                    ))}
                    onChange={(e) => {setSelectedEpoch(e)}}
                />
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
