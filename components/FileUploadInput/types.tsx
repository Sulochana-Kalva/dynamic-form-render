export interface FileUploadProps {
    id: string,
    label: string,
    required: boolean,
    placeholder: string,
    onChange: (id:string, value: string, isError: boolean) => void
}