import { useState } from "react"
import { CheckboxInputProps } from "./types"

const CheckboxInput = ({
    id,
    label,
    required,
    onChange = () => { },
    options
}: CheckboxInputProps) => {
    const [showError, setShowError] = useState(false)
    const [values, setValues] = useState<string[]>([])

    const handleInputOnchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
         const isError = values?.length === 0 && required && !event?.target?.checked
        setShowError(isError)
        let results = []
        if(event?.target?.checked){
            results = values.findIndex((value) => value === event.target.value) ? [...values, event.target.value] : [...values]
        }else{
            results = values.filter(value => value !== event.target.value)
        }
        setValues(results)
        // taking the list of Checked boxes data
        onChange(id, results, isError)
    }
    const handleInputOnBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setShowError(values?.length === 0 && required)
    }
    return (
        //Rendering the checkboxes as per data
        <>
            <p className="text-sm w-1/3 inline-block align-top" >{label}{required && '*'}</p>
            <div className="w-2/3 inline-block ">
                <div className="flex flex-col gap-3">
                    {options.map((option) => {
                        return (
                            <div key={option.label} className="relative flex-initial">
                                <input
                                    type="checkbox"
                                    className="mr-1"
                                    value={option.value}
                                    id={option.label}
                                    onChange={handleInputOnchange}
                                    onBlur={handleInputOnBlur}
                                />
                                <label
                                    className="text-sm align-top"
                                    htmlFor={option.label}
                                >
                                    {option.label}
                                </label>
                            </div>
                        )
                    })}
                </div>
                {showError && required && <span className="block text-xs mt-1 text-red-600">This field is mandatory.</span>}

            </div>
        </>
    )
}

export default CheckboxInput
