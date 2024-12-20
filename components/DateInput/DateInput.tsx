import React, { useEffect, useRef, useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { DateInputProps } from "./types";
import { CalendarIcon } from "@heroicons/react/20/solid";

const DateInput = ({ id, label, required, placeholder, onChange = () => { } }: DateInputProps) => {
    const [date, setDate] = useState<Date>();
    const [openCalender, setOpenCalender] = useState(false)
    const [showError, setShowError] = useState(false)
    const wrapper = useRef(null)
    const handleInputFocus = () => {
        setOpenCalender(true)
    }
    const handleInputBlur = () => {
        setShowError(date?.toString() === '' && required)
    }
    const handleDocumentClick = (event: MouseEvent) => {
        //checking and closing the date picker for outside click
        if (wrapper?.current && !wrapper?.current?.contains(event.target)) {
            setOpenCalender(false)
        }
    }
    useEffect(() => {
        //closing the date picker on date selection
        setOpenCalender(false)
        onChange(id, date?.toDateString() ?? '', showError)
    }, [date])

    useEffect(() => {
        //attaching the document click
        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])
    return (
        <>
            <label className="text-sm w-1/3 inline-block align-top" htmlFor={id}>{label}{required && '*'}</label>
            <div className="w-2/3 inline-block relative" ref={wrapper}>
                <input
                    className="w-full p-2 text-sm rounded"
                    value={date?.toDateString()}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder={placeholder}
                />
                <CalendarIcon className="h-6 w-6 absolute top-1 right-1" onClick={handleInputFocus} />
                <div className={openCalender ? 'block w-full absolute py-2 px-4 border bg-white mt-1 z-10' : 'hidden'}>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
                {showError ?
                    <span className="block text-xs mt-1 text-red-600">This field is mandatory</span>
                    : null
                }

            </div>
        </>
    );
}

export default DateInput