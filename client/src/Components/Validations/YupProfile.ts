import * as Yup from 'yup';

export const ProfileSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name").matches(/^[^\s]+$/, "Spaces are not allowed").min(2).max(25),
    lastName: Yup.string().required("Please enter your last name").matches(/^[^\s]+$/, "Spaces are not allowed").min(2).max(25),
    phoneNo: Yup.string().required("Please enter your mobile number").matches(/^[^\s]+$/, "Spaces are not allowed").min(10).max(10),
    address: Yup.string().required("Please enter your address").matches(/^[^\s]+$/, "Spaces are not allowed").min(3),
    email: Yup.string().required("Please enter your email").matches(/^[^\s]+$/, "Spaces are not allowed").email().lowercase().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g, "Please enter a valid email format")
})