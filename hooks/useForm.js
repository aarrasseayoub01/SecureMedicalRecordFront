import axios from "axios";
import { useState } from "react";

export const useForm = () => {
  const [status, setStatus] = useState(null);
  const [info, setinfo] = useState({
    cin: "",
    name: "",
    medicalRecord: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setinfo({ ...info, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    if (
      info.cin.length === 0 ||
      info.name.length === 0 ||
      info.medicalRecord.length > 500
    ) {
      setStatus("error");
      return;
    }
    console.log(info);
    try {
      await axios.post("http://localhost:8080/patients/vulnerable/addPatient", {
        ...info,
      });
    } catch (e) {
      setStatus("error");
    }
    setStatus("idle");
  };
  return { handleChange, handleSubmit, status };
};
