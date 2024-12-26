import CheckboxInput from "@/components/CheckboxInput/CheckboxInput";
import DateInput from "@/components/DateInput/DateInput";
import EmailInput from "@/components/EmailInput/EmailInput";
import FileUploadInput from "@/components/FileUploadInput/FileUploadInput";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import RadioInput from "@/components/RadioInput/RadioInput";
import TextareaInput from "@/components/TextareaInput/TextareaInput";
import TextInput from "@/components/TextInput/TextInput";
import { ComponentMapper } from "./types";
import Dropdown from "@/components/Dropdown/Dropdown";

export const componentList : ComponentMapper = {
    text: TextInput,
    number: TextInput,
    textarea: TextareaInput,
    date: DateInput,
    email: EmailInput,
    password: PasswordInput,
    file: FileUploadInput,
    select: Dropdown,
    radio: RadioInput,
    checkbox: CheckboxInput,
}