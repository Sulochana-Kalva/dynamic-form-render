import { useState } from "react"
import { TextInputProps } from "./types"

const TextInput = ({
    id,
    label,
    required,
    placeholder,
    onChange = () => { },
    validation: { minLength, maxLength } = {minLength: 3, maxLength: 5},
    type='text'
}: TextInputProps) => {
    const [showError, setShowError] = useState(false)
    const [errorType, setErrorType] = useState('')
    const handleInputOnchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const isError = event?.target?.value === '' && required
        setShowError(isError)
        onChange(id, event.target.value, isError)
    }
    const handleInputOnBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowError(event?.target?.value === '' && required)
    }
    return (
        <>
            <label className="text-sm w-1/3 inline-block align-top" htmlFor={id}>{label}{required && '*'}</label>
            <div className="w-2/3 inline-block">
                <input
                    className="text-sm block p-2 w-full rounded"
                    id={id}
                    minLength={minLength}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    required={required}
                    onChange={handleInputOnchange}
                    onBlur={handleInputOnBlur}
                    type={type}
                />
                {showError && required && <span className="block text-xs mt-1 text-red-600">This field is mandatory.</span>}
            </div>
        </>
    )
}

export default TextInput