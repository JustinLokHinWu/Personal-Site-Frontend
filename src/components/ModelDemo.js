import { useState, useEffect } from 'react'
import axios from 'axios'
import ModelForm from './ModelForm'
import ModelDisplay from './ModelDisplay'
import { Divider, Row, Col, message } from 'antd'

const ModelDemo = ({ info, backendURL }) => {
    const [datasets, setDatasets] = useState([])
    const [images, setImages] = useState([])
    const [epochs, setEpochs] = useState([])
    const [classes, setClasses] = useState([])
    
    const [selectedDataset, setSelectedDataset] = useState()

    const [isDatasetReady, setIsDatasetReady] = useState(false)
    const [isRequesting, setIsRequesting] = useState(false)
    const [fetchingDatasetLists, setFetchingDatasetLists] = useState(false)
    const [fetchingClassAndEpochs, setfetchingClassAndEpochs] = useState(false)

    const fetchImage = async (dataset, epoch, class_id, seed) => {
        setIsRequesting(true)
        axios.get(
            `${backendURL}/generate`,
            {
                'params': {
                    'class_id': class_id,
                    'epoch': epoch,
                    'dataset': dataset,
                    'seed': seed
                },
                responseType: 'arraybuffer'
            }
        ).
        then((response) => {
            console.log(response)
            const file = new Blob([response.data], {type: response['headers']['content-type']})
            setImages([{
                'path': URL.createObjectURL(file),
                'epoch': epoch,
                'class': classes[class_id],
                'seed': seed
            }, ...images])
        }).catch((error) => {
            console.log(error)
            message.error('Failed to fetch the requested image')
        }).finally(() => {
            setIsRequesting(false)
        })
    }

    useEffect(() => {
        const fetchDatasets = async () => {
            axios.get(
                `${backendURL}/get-datasets`,
                {
                    'Access-Control-Allow-Origin': '*'
                }
            ).then((response) => {
                setDatasets(response.data)
                setIsDatasetReady(true)
            }).catch((error) => {
                console.log(error)
                message.error('Failed to get datasets')
            })
        }
        setIsDatasetReady(false)
        setFetchingDatasetLists(true)
        fetchDatasets()
        setFetchingDatasetLists(false)

    }, [backendURL])

    useEffect(() => {
        const fetchEpochsAndClasses = async (dataset) => {
            const requestEpochs = axios.get(
                `${backendURL}/get-epochs`,
                {
                    'params': {
                        'dataset': dataset
                    },
                    responseType: 'json'
                }
            )

            const requestClasses = axios.get(
                `${backendURL}/get-classes`,
                {
                    'params': {
                        'dataset': dataset
                    },
                    responseType: 'json'
                }
            )
            axios.all([requestEpochs, requestClasses]).then(
                axios.spread((...responses) => {
                    setEpochs(responses[0].data)
                    setClasses(responses[1].data)
                    setIsDatasetReady(true)
                })).catch(errors => {
                    console.log(errors)
                })
        }

        if (selectedDataset) {
            setfetchingClassAndEpochs(true)
            fetchEpochsAndClasses(selectedDataset)
            setfetchingClassAndEpochs(false)
        }
    }, [backendURL, selectedDataset, datasets.length])

    return (
        <div>
            <Row justify='space-around'>
                <Col xs={24} md={12} lg={12}>
                <ModelForm
                    epochs={epochs}
                    classes={classes}
                    fetchImage={fetchImage}
                    isRequesting={isRequesting}
                    datasets={datasets}
                    isDatasetReady={isDatasetReady}
                    selectedDataset={selectedDataset}
                    setSelectedDataset={setSelectedDataset}
                    fetchingDatasetLists={fetchingDatasetLists}
                    fetchingClassAndEpochs={fetchingClassAndEpochs}
                    />
                </Col>
                <Col xs={24} md={12} lg={12} style={{ overflowY:'auto', overflowX:'hidden', height:'60vh'}}>
                    <ModelDisplay images={images} />
                </Col>
            </Row>
        </div>
    )
}

export default ModelDemo
