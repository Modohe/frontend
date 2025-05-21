import React, { useState } from "react";

export default function Input({ type, contents = "" }) {
  const [inputV, setInputV] = useState("");
  const [inputType, setInputType] = useState(type);

  const inputHandle = (e) => {
    setInputV(e.target.value);
  };

  const handleShowPswd = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const renderIcon = () => {
    if (type === "password") {
      return (
        <button
          onClick={handleShowPswd}
          aria-label="비밀번호 보기 전환"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            padding: 0,
          }}
        >
          {inputType === "password" ? "🔒" : "🙈"}
        </button>
      );
    }
    if (type === "text") {
      return <span>✉️</span>;
    }
    return null;
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {contents && <label style={{ display: "block", marginBottom: "0.5rem" }}>{contents}</label>}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "0.5rem 0.75rem",
          gap: "0.5rem",
          height: "48px",
        }}
      >
        {renderIcon()}
        <input
          type={inputType}
          value={inputV}
          onChange={inputHandle}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: "1rem",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
