import { useState } from "react"
import { PasswordInputProps } from "./types"

const PasswordInput = ({
    id,
    label,
    required,
    placeholder,
    onChange = () => { },
    validation: { minLength, message },
}: PasswordInputProps) => {
    const [showError, setShowError] = useState(false)
    const [errorType, setErrorType] = useState('')
    const validatePattern = (value: string): boolean => {
        let regEx = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')
        console.log(value, regEx.test(value))
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
        onChange(id,event.target.value, isError)
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
                    className="text-sm block p-2 w-full rounded"
                    id={id}
                    minLength={minLength}
                    placeholder={placeholder}
                    required={required}
                    onChange={handleInputOnchange}
                    onBlur={handleInputOnBlur}
                    type="password"
                />
                <div className="text-xs pl-4 my-2">Hint: Password must contain
                    <ol>
                        <li>Atleast 1 upper case letter</li>
                        <li>Atleast 1 lower case letter</li>
                        <li>Atleast 1 special charecter</li>
                        <li>Atleast 1 number</li>
                        <li>length must be 8 cherecters or more</li>
                    </ol>
                </div>
                {showError ?
                    <span className="block text-xs mt-1 text-red-600">{errorType === 'inValidInput' ? message : 'This field is mandatory'}</span>
                    : null
                }
            </div>
        </>
    )
}

export default PasswordInput