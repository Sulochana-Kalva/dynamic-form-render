export interface PasswordInputProps {
    id: string,
    label: string,
    required: boolean,
    placeholder: string,
    validation: {
        minLength: number,
        message: string,
    },
    onChange: (id:string,value: string, isError: boolean) => void
}