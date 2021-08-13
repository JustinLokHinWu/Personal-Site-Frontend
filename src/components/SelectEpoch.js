 import Select from 'react-select'

const SelectEpoch = ({ epochs, selectedEpoch, setSelectedEpoch }) => {

    const handleChange = (selectedOption) => {
        setSelectedEpoch(selectedOption)
    }

    return (
        <Select
            defaultValue={
                { value: null, label: 'Select epoch'}
            }
            value={selectedEpoch}
            onChange={handleChange}
            options={epochs.map((epoch) => (
                { value: epoch, label: epoch}
            ))}/>
    )
}

export default SelectEpoch
