import React from 'react'
import { Input } from 'antd'

const SeedInput = ({seed, setSeed}) => {
    const onChange = (e) => {
        const value = e.target.value
        const reg = /^[0-9]*$/
        if (value === null || value === '') {
            setSeed(null)
        }
        else if (reg.test(value) && +value < Number.MAX_SAFE_INTEGER){
            setSeed(value)
        }
    }

    return (
        <Input
            name='SeedInputForm'
            placeholder='Random'
            value={seed}
            onChange={onChange}
            />
    )
}

export default SeedInput
