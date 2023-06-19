import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    name: Yup.string().matches(/^[\S]+(?: [\S]+)?$/, "Enter your full name").max(25).required("Please enter your name").min(5),
    email: Yup.string().matches(/^[^\s]+$/, "Spaces are not allowed").email().required("Please enter your email"),
    password: Yup.string().matches(/^[^\s]+$/, "Spaces are not allowed").required("Please enter your password").min(5),
})