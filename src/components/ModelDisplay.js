import { useState } from 'react'
import axios from 'axios'

const ModelDisplay = ({ backendURL }) => {
    const [imagePath, setImagePath] = useState('')

    const fetchImage = async () => {
        axios.post(
            `${backendURL}/generate/cifar`,
            {
                'class_id': 1,
                'epoch': 500,
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
            <img src={imagePath} alt="Model result"/>
        </div>
    )
}

export default ModelDisplay
