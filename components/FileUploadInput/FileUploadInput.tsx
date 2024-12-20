import { useState } from "react"
import { FileUploadProps } from './types'

const FileUploadInput = ({
    id, label, required, placeholder, onChange
}: FileUploadProps) => {
    const [selectedFile, setSelectedFile] = useState<File>()
    const handleInputOnchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSelectedFile(event?.target?.files?.[0])
        if (event?.target?.files?.[0])
            onChange(id, event?.target?.files?.[0]?.name, false)
    }
    const handleFileUpload = () => {
        const formData = new FormData();
        if (selectedFile) {
            // Update the formData object
            formData.append(
                "myFile",
                selectedFile,
                selectedFile?.name
            );
        }

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    }
    return (
        <>
            <label htmlFor={id} className="text-sm w-1/3 inline-block align-top">{label}</label>
            <div className="inline-block w-2/3">
                <input type="file" id={id} onChange={handleInputOnchange} placeholder={placeholder} className="custom-file-upload px-4 py-2 rounded w-2/3" />
                <button className="bg-gray-600 text-white px-4 py-2 border rounded border-gray-950 ml-4 w-1/4" onClick={handleFileUpload}>Upload</button>
            </div>
        </>
    )
}

export default FileUploadInput