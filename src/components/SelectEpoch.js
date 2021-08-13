import axios from 'axios'
import { useState, useEffect } from 'react'

const SelectEpoch = ({ backendURL }) => {
    const [epochs, setEpochs] = useState([])

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
        <select name='epoch' id='epoch_select'>
            {epochs.map((epoch) => (
                <option value={ epoch }>{ epoch }</option>
            ))}
        </select>
    )
}

export default SelectEpoch
