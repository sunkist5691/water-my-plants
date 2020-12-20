import * as yup from "yup";

const schema = yup.object().shape({
  nickname: yup.string().required("Please name your plant"),
  species: yup.string().required("Enter a species"),
  h2o_frequency_day: yup.string().required("Enter a frequency in days"),
  h2o_frequency_hour: yup.string().required("Enter a frequency in hours")
});

export default schema;
