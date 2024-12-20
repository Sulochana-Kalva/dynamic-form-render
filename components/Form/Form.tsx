'use client'
import { Field, FormData, FormProps } from './types'
import { componentList } from '../../utils/componentMapper'
import React, { useEffect, useState } from 'react'
import { ComponentMapper } from '@/utils/types'

const initilizeFormData = (data: Field[]) => {
    let formData: FormData = {}
    data.forEach(element => {
        formData[element.id] = ''
    });
    return formData
}

const Form = ({ formTitle, formDescription, fields = [] }: FormProps) => {
    const [isFormValid, setIsFormValid] = useState(false)
    const [formData, setFormData] = useState(initilizeFormData(fields))
    const [isFormRender, setIsFormRender] = useState(true)

    const handleFormElementsChange = (id: string, data: string, isError: boolean) => {
        const obj: FormData = { ...formData }
        obj[id] = data
        setFormData(obj)
    }
    const handleFormSubmit = () => {
        setIsFormRender(false)
    }
    const renderDynamicComponent = (field: Field) => {
        return React.createElement(
            (field: Field) => <div className='text-sm'>The component {field.type} has not been created yet.</div>
        );
    }
    useEffect(() => {
        let isValid = true
        fields.every(field => {
            if (field.required && formData[field.id] === '') {
                isValid = false
                return false
            } return true
        });
        setIsFormValid(isValid)
    }, [formData])
    console.log(isFormValid, formData)
    return (
        <section className="relative bg-slate-100 w-3/5 px-4 py-10 mx-auto sm:rounded-3xl sm:px-10">
            {isFormRender ?
                <>
                    <h1 className="text-center text-lg">{formTitle}</h1>
                    <p className="text-center mt-2 mb-8 text-sm">{formDescription}</p>
                    <div className='w-2/3 mx-auto my-0'>
                        {fields.map((field: Field) => {
                            const Component = componentList[field.type as keyof ComponentMapper]
                            return (
                                <div className='mt-2' key={field.id}>
                                    {Component ?
                                        <Component {...field} onChange={handleFormElementsChange} />
                                        : renderDynamicComponent(field)
                                    }
                                </div>
                            )
                        })}
                        <button
                            disabled={!isFormValid}
                            className={`bg-red-800 text-sm text-white px-4 py-3 border border border-red-950 rounded block mx-auto my-4 ${!isFormValid && ' opacity-50'}`}
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>

                    </div>
                </> : <>
                    <h1 className="text-center text-lg">User Details</h1>
                    <div>
                        {JSON.stringify(formData)}
                    </div>

                </>}
        </section>
    )
}
export default Form