import { useState } from 'react'
import SelectEpoch from './SelectEpoch'

const ModelForm = ({ epochs, fetchImage }) => {
    const [selectedEpoch, setSelectedEpoch] = useState() 

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchImage(selectedEpoch.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <SelectEpoch
                epochs={epochs}
                selectedEpoch={selectedEpoch}
                setSelectedEpoch={setSelectedEpoch} />
            <button type="submit">Request</button>
        </form>
    )
}

export default ModelForm
