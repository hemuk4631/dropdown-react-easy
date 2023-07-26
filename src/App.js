import "./styles.css";
import React, { useState } from "react";
import Select from "react-select";

export default function App() {
  const options = [
    { value: "OPTION-1", label: "kutta-1" },
    { value: "OPTION-2", label: "dog-2" },
    { value: "OPTION-3", label: "tomy-3" }
  ];
  const [value, setValue] = useState(options[0]);
  return (
    <div>
      <Select
        options={options}
        defaaultValue={value}
        placeholder="select your option"
        onChange={setValue}
        isSearchable
        noOptionsMessage={() => "not in list"}
      />
    </div>
  );
}
