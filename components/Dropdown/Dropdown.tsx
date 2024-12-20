import { useState } from "react"
import { DropdownProps } from "./types"

const Dropdown = ({
    id,
    label,
    required,
    placeholder,
    onChange = () => { },
    options=[],
}: DropdownProps) => {
    const [showError, setShowError] = useState(false)
    const [value, setValue] = useState('')
    const handleInputOnchange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const isError = event?.target?.value === '' && required
        setShowError(isError)
        setValue(event.target.value)
        onChange(id, event.target.value, isError)
    }
    const handleInputOnBlur = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setShowError(event?.target?.value === '' && required)
    }
    return (
        <>
            <label className="text-sm w-1/3 inline-block align-top" htmlFor={id}>{label}{required && '*'}</label>
            <div className="w-2/3 inline-block">
                <select
                    id={id}
                    className="w-2/3 p-2 text-sm rounded"
                    value={value}
                    onChange={handleInputOnchange}
                    onBlur={handleInputOnBlur}
                >
                    {placeholder && <option className="p-1" disabled value=''>{placeholder}</option>}
                    {options?.map((option) => {
                        return <option key={option.value} className="py-1 px-2" value={option.value}>{option.label}</option>

                    })}
                </select>
                {showError && required && <span className="block text-xs mt-1 text-red-600">This field is mandatory.</span>}
            </div>
        </>
    )
}

export default Dropdown