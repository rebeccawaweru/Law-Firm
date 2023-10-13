import * as Yup from 'yup'

export const contactSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().email('Invalid email address').required('required'),
    phone: Yup.string().required('required'),
    message: Yup.string().required('required')
})