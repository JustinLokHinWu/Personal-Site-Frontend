import { Input } from 'antd'
import "antd/dist/antd.css";

const SeedInput = ({seed, setSeed}) => {
    const validate = (value) => {
        
    }

    const onChange = (e) => {
        const value = e.target.value
        const reg = /^[0-9]*$/
        if (value === null || value === '') {
            setSeed(null)
        }
        else if (reg.test(value) && +value < Number.MAX_SAFE_INTEGER){
            setSeed(value)
        } else {
            return false
        }

    }

    return (
        <Input
            placeholder='Random'
            value={seed}
            style={{ width: 150 }}
            onChange={onChange}
            />
    )
}

export default SeedInput
