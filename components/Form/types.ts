export interface FormProps {
    formTitle: string,
    formDescription: string
    fields: Field[]
}

export interface Field {

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
}

export interface FormData  {
    [key:string] : string
}