export interface DropdownProps {
    id: string,
    label: string,
    required: boolean,
    placeholder: string,
    onChange: (id:string, values: string, isError: boolean) => void,
    options: Option[]
}

export interface Option {
    value:string, label: string
}