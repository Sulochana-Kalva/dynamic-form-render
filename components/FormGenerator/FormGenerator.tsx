'use client'
import FormSection from "@/components/FormSection/FormSection"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import { FieldProps, FormProps } from "../Form/types"

const FormGenerator = () => {
    const [JSONData, setJSONData] = useState<FormProps | undefined>(undefined)
    const [initialValues, setInitialValues] = useState({})
    const onFileUpload = (fileData: FormProps) => {
        // console.log(fileData)
        setJSONData(fileData)
        const initialObj: { [key: string | number]: any } = {}
        fileData?.fields?.forEach(field => {
            if (field.type === 'checkbox') {
                initialObj[field.id as keyof typeof initialObj] = field?.options && field?.options?.length > 1 ? [] : false
            } else
                initialObj[field.id] = ''
        })
        setInitialValues(initialObj)
    }
    const renderFormEle = (fieldEle: FieldProps) => {
        switch (fieldEle.type) {
            case 'checkbox': return (
                <>
                    <div className="w-1/3 inline-block align-top" id={`checkbox-group-${fieldEle.id}`}>
                        {fieldEle.label}{fieldEle.required && '*'}
                    </div>
                    <div role="group" aria-labelledby={`checkbox-group-${fieldEle.id}`} className="w-2/3 inline-block">
                        {fieldEle?.options?.map(option => {
                            return (
                                <label key={option.value}>
                                    <Field type="checkbox" name={fieldEle.id} value={option.value} />
                                    {option.label}
                                </label>
                            )
                        })}

                        <ErrorMessage className="text-xs text-red-700" name={fieldEle.id} component="div" />

                    </div>
                </>
            )
            case 'radio': return (
                <>
                    <div className="w-1/3 inline-block align-top" id={`radio-group-${fieldEle.id}`}>
                        {fieldEle.label}{fieldEle.required && '*'}
                    </div>
                    <div role="group" aria-labelledby={`radio-group-${fieldEle.id}`} className="w-2/3 inline-block">
                        {fieldEle?.options?.map(option => {
                            return (
                                <label key={option.value}>
                                    <Field type="radio" name={fieldEle.id} value={option.value} />
                                    {option.label}
                                </label>
                            )
                        })}
                        <ErrorMessage className="text-xs text-red-700" name={fieldEle.id} component="div" />
                    </div>
                </>
            )
            case 'select': return (
                <>
                    <label className="w-1/3 inline-block align-top" htmlFor={fieldEle.id}>
                        {fieldEle.label}{fieldEle.required && '*'}
                    </label>
                    <div className="w-2/3 inline-block">

                        <Field as="select" id={fieldEle.id} name={fieldEle.id} className="px-4 py-2 w-full">
                            {fieldEle.placeholder && <option value='' >{fieldEle.placeholder}</option>}

                            {fieldEle?.options?.map(ele => (
                                <option key={ele.value} value={ele.value}>{ele.label}</option>
                            ))}
                        </Field>

                        <ErrorMessage className="text-xs text-red-700" name={fieldEle.id} component="div" />
                    </div>

                </>

            )
            default: return (
                <>
                    <label className="w-1/3 inline-block align-top" htmlFor={fieldEle.id}>
                        {fieldEle.label}{fieldEle.required && '*'}
                    </label>
                    <div className="w-2/3 inline-block">

                        <Field
                            type={fieldEle.type}
                            name={fieldEle.id}
                            required={fieldEle.required}
                            placeholder={fieldEle.placeholder}
                            minLength={fieldEle.minLength}
                            maxLength={fieldEle.maxLength}
                            className="px-4 py-2 w-full"
                        />
                        <ErrorMessage className="text-xs text-red-700" name={fieldEle.id} component="div" />
                    </div>

                </>
            )
        }
    }
    return (
        <section className="relative bg-slate-100 w-3/5 px-4 py-10 mx-auto sm:rounded-3xl sm:px-10">
            {JSONData !== undefined ?
                <>
                    <h1 className="text-center text-lg">{JSONData?.formTitle}</h1>
                    <p className="text-center mt-2 mb-8 text-sm">{JSONData?.formDescription}</p>
                    <Formik
                        initialValues={{ ...initialValues }}
                        validate={values => {
                            const errors = {};
                            Object.keys(values).forEach((key: string) => {
                                const field = JSONData.fields.find((ele) => ele.id === key)
                                if (field) {
                                    if (field.required && values[key as keyof typeof values] === '') {
                                        errors[key] = 'This field is required'
                                    } else if (field.validation) {
                                        const regEx = new RegExp(`${field.validation.pattern}`)
                                        // console.log(regEx.test(values[key]))
                                        if (!regEx.test(values[key as keyof typeof values]))
                                            errors[key] = field.validation.message
                                        else delete errors[key]
                                        // console.log(errors)
                                    }
                                }
                            })
                            console.log(errors)

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            console.log(values, 'clicked submit')
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                resetForm()
                            }, 400);
                        }}

                    >
                        {({
                            handleSubmit,
                            isValidating,
                        }) => (
                            <form onSubmit={handleSubmit} className="w-2/3 mx-auto my-0 text-sm">
                                {JSONData.fields.map((fieldEle) => {
                                    return (
                                        <div className='mt-2' key={fieldEle.id}>
                                            {renderFormEle(fieldEle)}
                                        </div>
                                    )
                                })}
                                <button
                                    type="submit"
                                    className={`bg-red-800 text-sm text-white px-4 py-3 border border border-red-950 rounded block mx-auto my-4`}
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>
                </>
                :
                <FormSection onFileUpload={onFileUpload} />
            }
        </section>
    )
}

export default FormGenerator