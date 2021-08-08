import { useEffect } from 'react'

const ModelDisplay = () => {

    useEffect(() => {
        const fetchImage = async () => {
            const res = await fetch('127.0.0.1:5000/generate/cifar')
            const data = await res
        }

        fetchImage()
    }, [])
    return (
        <div>
            <p>Model Display</p>
        </div>
    )
}

export default ModelDisplay
