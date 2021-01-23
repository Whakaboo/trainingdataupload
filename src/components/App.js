import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";

export default function App() {
  return (
    <div>
      Jsoning training data
      <br />
      <br />
      <Form />
    </div>
  );
}

const Form = () => {
  const [programName, setProgramName] = useState("whaka");

  const handleSubmit = (e) => {
    e.preventDefault();
    showJson();
  };

  const handleChange = (e) => {
    setProgramName(e.target.value);
  };

  const showJson = () => {
    let json = {};
    json.programName = programName;
    // alert(JSON.stringify(json));
    axios.post("/", { json }).then((res) => {
      alert(res.data);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputProgramName">Program name:</label>
      <input
        type="text"
        id="inputProgramName"
        name="inputProgramName"
        placeholder="program ddname"
        required
        onChange={handleChange}
      />
      <input type="submit" value="Done" />
    </form>
  );
};
