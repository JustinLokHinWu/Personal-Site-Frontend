import { useState } from 'react'
import axios from 'axios'

import SelectEpoch from './SelectEpoch'

const ModelDisplay = ({ backendURL }) => {
    const [imagePath, setImagePath] = useState('')

    const fetchImage = async () => {
        axios.post(
            `${backendURL}/generate`,
            {
                'class_id': 1,
                'epoch': 500,
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
        })
    }

    return (
        <div>
            <p>Model Display</p>
            <button onClick={fetchImage}>Request</button>
            <SelectEpoch backendURL={backendURL}/>
            <img height='128' width='128' src={imagePath} alt="Model result"/>
        </div>
    )
}

export default ModelDisplay
