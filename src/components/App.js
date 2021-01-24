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
class trainingData {
  constructor() {}
}
const Form = () => {
  const [training, setTraining] = useState(new trainingData());

  const handleSubmit = (e) => {
    e.preventDefault();
    saveJson();
  };

  const handleChange = (e) => {
    training[e.target.name] = e.target.value;
    setTraining(training);
  };

  const saveJson = () => {
    axios.post("/", { training }).then((res) => {
      alert(res.data.msg);
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>Program</div>
      <input
        type="text"
        id="inputProgramName"
        name="program"
        placeholder="Name"
        required
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="inputProgramWeek"
        name="week"
        placeholder="Week"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="inputProgramWorkout"
        name="workout"
        placeholder="Workout"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="inputDate"
        name="date"
        placeholder="Date"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="inputTime"
        name="time"
        placeholder="Time"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="inputDuration"
        name="duration"
        placeholder="Duration"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="inputAvgBmg"
        name="averageBmp"
        placeholder="Average bmp"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="inputCalBurned"
        name="calBurned"
        placeholder="Calories"
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Save" />
    </form>
  );
};
