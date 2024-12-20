export interface DateInputProps {
    id: string,
    label: string,
    required: boolean,
    placeholder: string,
    onChange: (id:string, values: string, isError: boolean) => void,
}
