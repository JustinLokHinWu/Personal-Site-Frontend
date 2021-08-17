import { useState, useEffect } from 'react'
import axios from 'axios'
import ModelForm from './ModelForm'
import ModelDisplay from './ModelDisplay'


const ModelDemo = ({ backendURL }) => {
    const [images, setImages] = useState([])
    const [epochs, setEpochs] = useState([])
    const [classes, setClasses] = useState([])
    const [isRequesting, setIsRequesting] = useState(false)

    const fetchImage = async (epoch, class_id, seed) => {
        setIsRequesting(true)
        axios.post(
            `${backendURL}/generate`,
            {
                'class_id': class_id,
                'epoch': epoch,
                'dataset': 'cifar',
                ...(seed !== null && { 'seed': seed })
            },
            {
                responseType: 'arraybuffer'
            }
        ).then((response) => {
            const file = new Blob([response.data], {type:'image/jpeg'})
            setImages([{
                'path': URL.createObjectURL(file)
            }, ...images])
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            setIsRequesting(false)
        })
    }

    useEffect(() => {
        const fetchEpochs = async () => {
            axios.get(
                `${backendURL}/get-epochs`,
                {
                    'params': {
                        'dataset': 'cifar'
                    }
                },
                {
                    responseType: 'json'
                }
                ).then((response) => {
                    setEpochs(response.data.epochs)
                }).catch((error) => {
                    console.log(error)
                })
        }
        const fetchClasses = async () => {
            axios.get(
                `${backendURL}/get-classes`,
                {
                    'params': {
                        'dataset': 'cifar'
                    }
                },
                {
                    responseType: 'json'
                }
                ).then((response) => {
                    setClasses(response.data.classes)
                }).catch((error) => {
                    console.log(error)
                })
        }
        fetchEpochs()
        fetchClasses()
    }, [backendURL])

    return (
        <div>
            <ModelForm
                epochs={epochs}
                classes={classes}
                fetchImage={fetchImage}
                isRequesting={isRequesting}
                />
            <ModelDisplay images={images} />
            {/* <img height='128' width='128' src={images.length ? images[0].path : ''} alt="Model result"/> */}
        </div>
    )
}

export default ModelDemo
