import CheckboxInput from "@/components/CheckboxInput/CheckboxInput";
import DateInput from "@/components/DateInput/DateInput";
import EmailInput from "@/components/EmailInput/EmailInput";
import FileUploadInput from "@/components/FileUploadInput/FileUploadInput";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import RadioInput from "@/components/RadioInput/RadioInput";
import TextareaInput from "@/components/TextareaInput/TextareaInput";
import TextInput from "@/components/TextInput/TextInput";
import { Dropdown } from "react-day-picker";
import { ComponentMapper } from "./types";

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