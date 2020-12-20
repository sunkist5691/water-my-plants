import * as yup from "yup";

const numbers = /(?=.*[0-9])/;
const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2)
    .required("username is required"),
  phone_number: yup
    .string()
    .matches(numbers, "must be a valid phone number")
    .max(10)
    .required("phone number is required"),
  password: yup
    .string()
    .min(5)
    .required("a password is required")
});

export default formSchema;
