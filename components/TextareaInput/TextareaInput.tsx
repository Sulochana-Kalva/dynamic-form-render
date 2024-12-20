import { useState } from "react"
import { TextareaInputProps } from "./types"

const TextareaInput = ({
    id,
    label,
    required,
    placeholder,
    onChange = () => { },
    validation: { minLength, maxLength } = {minLength: 3, maxLength: 1000},
}: TextareaInputProps) => {
    const [showError, setShowError] = useState(false)
    const handleInputOnchange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const isError = event?.target?.value === '' && required
        setShowError(isError)
        onChange(id, event.target.value, isError)
    }
    const handleInputOnBlur = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setShowError(event?.target?.value === '' && required)
    }
    return (
        <>
            <label className="text-sm w-1/3 inline-block align-top" htmlFor={id}>{label}{required && '*'}</label>
            <div className="w-2/3 inline-block">
                <textarea
                    className="text-sm block p-2 w-full min-h-20 rounded"
                    id={id}
                    minLength={minLength}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    required={required}
                    onChange={handleInputOnchange}
                    onBlur={handleInputOnBlur}
                />
                {showError && required && <span className="block text-xs mt-1 text-red-600">This field is mandatory.</span>}
            </div>
        </>
    )
}

export default TextareaInput