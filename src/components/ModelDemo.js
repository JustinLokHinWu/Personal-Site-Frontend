import { useState, useEffect } from 'react'
import axios from 'axios'
import { GithubFilled } from '@ant-design/icons';
import ModelForm from './ModelForm'
import ModelDisplay from './ModelDisplay'
import { Divider, PageHeader, Row, Col, Descriptions, message } from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'

const ModelDemo = ({ backendURL }) => {
    const [datasets, setDatasets] = useState([])
    const [images, setImages] = useState([])
    const [epochs, setEpochs] = useState([])
    const [classes, setClasses] = useState([])
    
    const [selectedDataset, setSelectedDataset] = useState()

    const [isDatasetReady, setIsDatasetReady] = useState(false)
    const [isRequesting, setIsRequesting] = useState(false)

    const fetchImage = async (dataset, epoch, class_id, seed) => {
        setIsRequesting(true)
        axios.post(
            `${backendURL}/generate`,
            {
                'class_id': class_id,
                'epoch': epoch,
                'dataset': dataset,
                ...(seed !== null && { 'seed': seed })
            },
            {
                responseType: 'arraybuffer'
            }
        ).then((response) => {
            const file = new Blob([response.data], {type:'image/jpeg'})
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
            ).then((response) => {
                console.log(response)
                setDatasets(response.data)

            }).catch((error) => {
                console.log(error)
                message.error('Failed to get datasets')
            })
        }
        setIsDatasetReady(false)
        fetchDatasets()

    }, [backendURL])

    useEffect(() => {
        const fetchEpochsAndClasses = async (dataset) => {
            setIsDatasetReady(false)
            const requestEpochs = axios.get(
                `${backendURL}/get-epochs`,
                {
                    'params': {
                        'dataset': dataset
                    }
                },
                {
                    responseType: 'json'
                }
            )

            const requestClasses = axios.get(
                `${backendURL}/get-classes`,
                {
                    'params': {
                        'dataset': dataset
                    }
                },
                {
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
            console.log("Fetching epochs and classes")
            fetchEpochsAndClasses(selectedDataset)
        }
    }, [backendURL, selectedDataset, datasets.length])

    return (
        <div>
            <PageHeader
                className='site-page-header'
                title='ACTGAN Demo'
            >
                <Descriptions column={1} size='small'>
                    <DescriptionsItem> 
                        <a href={'https://github.com/JustinLokHinWu/ACTGAN'}>
                            <GithubFilled />
                        </a>
                    </DescriptionsItem>
                    <DescriptionsItem>
                        TODO add description
                    </DescriptionsItem>
                </Descriptions>
            </PageHeader>
            <Divider />
            <Row justify='space-around'>
                <Col xs={24} md={12} lg={8}>
                <ModelForm
                    epochs={epochs}
                    classes={classes}
                    fetchImage={fetchImage}
                    isRequesting={isRequesting}
                    datasets={datasets}
                    isDatasetReady={isDatasetReady}
                    selectedDataset={selectedDataset}
                    setSelectedDataset={setSelectedDataset}
                    />
                </Col>
                <Col xs={24} md={12} lg={16} style={{ overflowY:'auto', overflowX:'hidden', height:'60vh'}}>
                    <ModelDisplay images={images} />
                </Col>
            </Row>
        </div>
    )
}

export default ModelDemo
