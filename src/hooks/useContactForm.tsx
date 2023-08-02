import { ChangeEvent, useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const resetValues = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

  return { values, handleChange, resetValues };
};

export default useContactForm;
