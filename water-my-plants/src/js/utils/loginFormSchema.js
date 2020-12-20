import * as yup from "yup";

const loginFormSchema = yup.object().shape({
  username: yup.string().required("Username is required"),

  password: yup
    .string()
    .max(320, "Your password is too long")
    .required("Password is required")
});

export default loginFormSchema;
