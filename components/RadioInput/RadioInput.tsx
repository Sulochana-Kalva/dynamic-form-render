import { useState } from "react"
import { RadioInputProps } from "./types"

const RadioInput = ({
    id,
    label,
    required,
    onChange = () => { },
    options
}: RadioInputProps) => {
    const [showError, setShowError] = useState(false)
    const [value, setValue] = useState('')

    const handleInputOnchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const isError = event?.target?.value === '' && required
        setShowError(isError)
        setValue(event.target.value)
        onChange(id, event.target.value, isError)
    }
    const handleInputOnBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value)
        setShowError(value === '' && required)
    }
    return (
        <>
            <p className="text-sm w-1/3 inline-block align-top" >{label}{required && '*'}</p>
            <div className="w-2/3 inline-block ">
                <div className="flex gap-3">
                    {options.map((option) => {
                        return (
                            <div key={option.label} className="relative flex-initial">
                                <label
                                    className="text-sm align-top"
                                    htmlFor={option.label}
                                >
                                    {option.label}
                                </label>
                                <input
                                    type="radio"
                                    className="ml-1"
                                    value={option.value}
                                    name={id}
                                    onChange={handleInputOnchange}
                                    onBlur={handleInputOnBlur}
                                    id={id}
                                />
                            </div>
                        )
                    })}
                </div>
                {showError && required && <span className="block text-xs mt-1 text-red-600">This field is mandatory.</span>}

            </div>
        </>
    )
}

export default RadioInput
