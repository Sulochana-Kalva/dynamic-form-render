'use client'

import { useState } from "react"

const FormSection = ({onFileUpload}: {onFileUpload: (file:any) => void}) => {
    const [selectedFile, setSelectedFile] = useState<File>()

    const handleInputOnchange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSelectedFile(event?.target?.files?.[0])
    }
    const handleFileUpload = () => {
        var reader = new FileReader();
        reader.onload = (event) => {
            var obj = JSON.parse(event?.target?.result as string);
            console.log(obj)
            onFileUpload(obj)
        };
        if(selectedFile)
            reader.readAsText(selectedFile);
    }
    return (
        <div className="w-2/3 mx-auto my-0 text-sm">
            <label className="mb-4 block">Please upload file here to render form</label>
            <input type="file" onChange={handleInputOnchange} />
            <button className="border px-4 py-2 ml-4 bg-red-100" onClick={handleFileUpload}>Render Form</button>
        </div>
    )
}

export default FormSection