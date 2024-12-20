export interface TextInputProps {
    id: string,
    label: string,
    required: boolean,
    placeholder: string,
    validation: {
        minLength: number,
        maxLength: number,
    },
    onChange: (id: string, value: string, isError: boolean) => void,
    type: string
}