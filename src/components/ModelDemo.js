import { useState, useEffect } from 'react'
import axios from 'axios'
import ModelForm from './ModelForm'


const ModelDemo = ({ backendURL }) => {
    const [imagePath, setImagePath] = useState('')
    const [epochs, setEpochs] = useState([])
    const [isRequesting, setIsRequesting] = useState(false)

    const fetchImage = async (epoch) => {
        setIsRequesting(true)
        axios.post(
            `${backendURL}/generate`,
            {
                'class_id': 1,
                'epoch': epoch,
                'dataset': 'cifar'
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
                    // const request.data
                }).catch((error) => {
                    console.log(error)
                })
        }
        fetchEpochs()
    }, [backendURL])

    return (
        <div>
            <p>Model Display</p>
            <ModelForm
                epochs={epochs}
                fetchImage={fetchImage}
                isRequesting={isRequesting}
                />
            <img height='128' width='128' src={imagePath} alt="Model result"/>
        </div>
    )
}

export default ModelDemo
