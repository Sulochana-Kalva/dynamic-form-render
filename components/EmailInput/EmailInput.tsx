
import { useState } from "react"
import { EmailInputProps } from "./types"

const EmailInput = ({
    id,
    label,
    required,
    placeholder,
    onChange = () => { },
    validation: { pattern, message },
}: EmailInputProps) => {
    const [showError, setShowError] = useState(false)
    const [errorType, setErrorType] = useState('')
    const validatePattern = (value: string): boolean => {
        let regEx = new RegExp(pattern)
        console.log(value,regEx.test(value))
        return !regEx.test(value)
    }
    const handleInputOnchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let isError = false
        if (event?.target?.value === '' && required) {
            isError = true
            setErrorType('emptyInput')
        } else {
            isError = validatePattern(event.target.value)
            setErrorType('inValidInput')
        }
        setShowError(isError)
        onChange(id, event.target.value, isError)
    }
    const handleInputOnBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if(!showError)
            setShowError(event?.target?.value === '' && required)
    }
    return (
        <>
            <label className="text-sm w-1/3 inline-block align-top" htmlFor={id}>{label}{required && '*'}</label>
            <div className="w-2/3 inline-block">
                <input
                    className="text-sm block p-2 w-full  rounded"
                    id={id}
                    placeholder={placeholder}
                    required={required}
                    onChange={handleInputOnchange}
                    onBlur={handleInputOnBlur}
                    type="email"
                />
                {showError ?
                    <span className="block text-xs mt-1 text-red-600">{errorType === 'inValidInput' ? message : 'This field is mandatory'}</span>
                    : null
                }
            </div>
        </>
    )
}

export default EmailInput