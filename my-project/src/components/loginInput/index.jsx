import React, { useState } from "react";

export default function Input({ type, contents = "" }) {
  const [inputV, setInputV] = useState("");
  const [inputType, setInputType] = useState(type);

  const inputHandle = (e) => {
    setInputV(e.target.value);
  };

  const handleShowPswd = () => {
    setInputType((type) => (type ? "password" : "text"));
  };

  return (
    <div>
      {contents === "" ? "" : contents}
      <input type={inputType} value={inputV} onChange={inputHandle} />
      {type === "password" ? <button onClick={handleShowPswd}></button> : <></>}
    </div>
  );
}
