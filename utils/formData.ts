export const formData = {
    formTitle: 'User Registration form',
    formDescription: 'Please fill out the form to register',
    fields: [
        {
            id: 'userName',
            type: 'text',
            label: 'User Name',
            required: true,
            placeholder: 'Enter your user name',
            validation: {
                minLength: 3,
                maxLength: 9,
            },
        },
        {
            id: 'userName1',
            type: 'select',
            label: 'User Name 2',
            required: true,
            placeholder: 'Enter your user name',
            options:[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
            ]
        },
        {
            id: 'emailAddress',
            type: 'email',
            label: 'Email',
            required: true,
            placeholder: 'Enter your Email id',
            validation: {
                pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
                message: 'Please enter valid email address',
            },
        },
        {
            id: 'password',
            type: 'password',
            label: 'Password',
            required: true,
            placeholder: 'Enter your password',
            validation: {
                minLength: 8,
                message: 'Please enter valid password',
            },
        },
        {
            id: 'dob',
            type: 'date',
            label: 'Date of Birth',
            required: true,
            placeholder: 'Select date of birth',
        },
        {
            id: 'gender',
            type: 'radio',
            label: 'Gender',
            required: true,
            options:[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
            ]
        },
        {
            id: 'hobbies',
            type: 'checkbox',
            label: 'Hobbies',
            required: false,
            options:[
                {label: 'Reading', value: 'reading'},
                {label: 'Traveling', value: 'traveling'},
                {label: 'Sports', value: 'sports'},
                {label: 'Music', value: 'listening'},
            ]
        },
        {
            id: 'bio',
            type: 'textarea',
            label: 'Short Bio',
            required: false,
            placeholder:'Tell us about your self'
        },
        {
            id: 'profilePhoto',
            type: 'file',
            label: 'Upload profile photo',
            required: false,
        }
    ]
}