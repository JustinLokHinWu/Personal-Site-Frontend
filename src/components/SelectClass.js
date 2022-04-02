import { Select } from 'antd'

const SelectClass = ({classes, selectedClass, setSelectedClass, isDatasetReady, fetchingClassAndEpochs, datasetSelected}) => {
    return (
        <Select
            placeholder="Select class"
            options={classes.map((class_label, index) => (
                {'label': class_label, 'value': index}
            ))}
            onChange={(class_id) => {setSelectedClass(class_id)}}
            disabled={!isDatasetReady || !datasetSelected || fetchingClassAndEpochs}
            value={datasetSelected ? selectedClass : null}
            loading={fetchingClassAndEpochs}
        />
    )
}

export default SelectClass
