import axios from "axios";
import { useState } from "react";
import sqlstring from "sqlstring";

export const useSearch = () => {
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchResults, SetSearchResults] = useState([]);
  const [info, setinfo] = useState({
    cin: "",
  });
  const handleCinChange = (event) => {
    const { name, value } = event.target;
    setinfo({ ...info, [name]: value });
  };
  const handleCinSubmit = async (event) => {
    event.preventDefault();
    setSearchStatus("loading");
    SetSearchResults([]);
    if (info.cin.length === 0) {
      setSearchStatus("error");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8080/patients/vulnerable/medicalRecords",
        {
          cin: info.cin,
        }
      );
      console.log(data);
      SetSearchResults(data);
    } catch (e) {
      setSearchStatus("error");
    }
  };
  return { handleCinChange, handleCinSubmit, searchStatus, searchResults };
};
