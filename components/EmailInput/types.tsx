export interface EmailInputProps {
    id: string,
    label: string,
    required: boolean,
    placeholder: string,
    validation: {
        pattern: string
        message: string
    },
    onChange: (id:string, value: string, isError: boolean) => void
}