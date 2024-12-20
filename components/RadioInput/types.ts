export interface RadioInputProps {
    id: string,
    label: string,
    required: boolean,
    placeholder: string,
    onChange: (id: string, value: string, isError: boolean) => void,
    options: Option[]
}

export interface Option {
    value:string, label: string
}