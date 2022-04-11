export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.mobileNo) {
    errors.mobileNo = "Mobile No required";
  }

  if (!values.age) {
    errors.age = "Age required";
  }

  if (!values.bloodGroup) {
    errors.bloodGroup = "BloodGroup required";
  }

  if (!values.address) {
    errors.address = "Address required";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 4) {
    errors.password = "Password needs to be 4 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password doesnot match";
  }

  return errors;
}
