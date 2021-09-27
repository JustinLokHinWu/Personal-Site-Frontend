import { Select } from 'antd'

const SelectEpoch = ({epochs, selectedEpoch, setSelectedEpoch, isDatasetReady, fetchingClassAndEpochs, datasetSelected}) => {
    return (
        <Select
            placeholder="Select epoch"
            options={epochs.map((epoch) => (
                {'value': epoch}
            ))}
            onChange={(epoch) => {setSelectedEpoch(epoch)}}
            disabled={!isDatasetReady || !datasetSelected}
            value={selectedEpoch}
            loading={fetchingClassAndEpochs}
        />
    )
}

export default SelectEpoch
