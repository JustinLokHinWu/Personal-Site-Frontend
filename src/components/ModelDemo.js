import { useState, useEffect } from 'react'
import axios from 'axios'
import ModelForm from './ModelForm'


const ModelDemo = ({ backendURL }) => {
    const [imagePath, setImagePath] = useState('')
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
            setImagePath(URL.createObjectURL(file))
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
            <p>Model Display</p>
            <ModelForm
                epochs={epochs}
                classes={classes}
                fetchImage={fetchImage}
                isRequesting={isRequesting}
                />
            <img height='128' width='128' src={imagePath} alt="Model result"/>
        </div>
    )
}

export default ModelDemo
