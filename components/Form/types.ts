export interface FormProps {
    formTitle: string,
    formDescription: string
    fields: FieldProps[]
}

export interface FieldProps {

    id: string
    type: string
    label: string
    required?: boolean
    placeholder?: string
    validation?: {
        pattern?: string
        message?: string
        minLength?: number
        maxLength?: number
    },
    options?: Option[]
minLength?: number | string
maxLength?: number | string
}

export interface Option {
    value:string, label: string
}
export interface FormData  {
    [key:string] : string
}