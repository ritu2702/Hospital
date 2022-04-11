import { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../../api/service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const useForm = (validateInfo) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNo: "",
    age: "",
    bloodGroup: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const postData = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    postDataToServer(values);
    console.log(values);
    setIsSubmit(true);
  };

  const postDataToServer = (values) => {
    console.log(values);
    if (
      values.name &&
      values.email &&
      values.mobileNo &&
      values.age &&
      values.bloodGroup &&
      values.address &&
      values.password &&
      values.confirmPassword
    ) {
      axios
        .post(`${baseurl}/api/registerUsers`, values)
        .then((response) => {
          console.log(response.data);
          let result = response.data;

          if (result === 0) {
            console.log("Success");
            toast.success("Succcesful Registration!");
          } else {
            console.log("error");
            toast.error("Please try again");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //   navigate("/loginuser", { replace: true })
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      //   callback();
    }
  }, [errors]);

  return { handleChange, values, postData, errors };
};

export default useForm;
