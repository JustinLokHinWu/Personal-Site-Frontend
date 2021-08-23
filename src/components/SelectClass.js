import { Select } from 'antd'

const SelectClass = ({classes, selectedClass, setSelectedClass, isDatasetReady}) => {
    return (
        <Select
            placeholder="Select class"
            options={classes.map((class_label, index) => (
                {'label': class_label, 'value': index}
            ))}
            onChange={(class_id) => {setSelectedClass(class_id)}}
            disabled={!isDatasetReady}
            value={selectedClass}
        />
    )
}

export default SelectClass
