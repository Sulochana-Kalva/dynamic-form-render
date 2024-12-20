import Form from "@/components/Form/Form"
import { formData } from "@/utils/formData"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'User Registration form',
}
 

const FormPage = () => {
    return(
        <Form {...formData}/>
    )
}

export default FormPage