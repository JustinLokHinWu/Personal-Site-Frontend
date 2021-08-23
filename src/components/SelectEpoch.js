import { Select } from 'antd'

const SelectEpoch = ({epochs, selectedEpoch, setSelectedEpoch, isDatasetReady}) => {
    return (
        <Select
            placeholder="Select epoch"
            options={epochs.map((epoch) => (
                {'value': epoch}
            ))}
            onChange={(epoch) => {setSelectedEpoch(epoch)}}
            disabled={!isDatasetReady}
            value={selectedEpoch}
        />
    )
}

export default SelectEpoch
