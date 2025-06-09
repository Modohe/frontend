import EmailIcon from "@/assets/EmailIcon.svg";
import PasswordIcon from "@/assets/PasswordIcon.svg";
import NameIcon from "@/assets/NameIcon.svg";
import React, { useState } from "react";

export default function Input({ type, contents = "", ph = "", value, onChange }) {
  const [inputType, setInputType] = useState(type);

  const handleShowPswd = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const renderIcon = () => {
    if (type === "email") {
      return <img src={EmailIcon} alt="email icon" style={{ width: "1rem", height: "1rem" }} />;
    }
    if (type === "password") {
      return (
        <button
          onClick={handleShowPswd}
          aria-label="비밀번호 보기 전환"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img
            src={PasswordIcon}
            alt="password icon"
            style={{ width: "1rem", height: "1rem" }}
          />
        </button>
      );
    }
    if (type === "name") {
      return <img src={NameIcon} alt="name icon" style={{ width: "1rem", height: "1rem" }} />;
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
          value={value}
          onChange={onChange}
          placeholder={ph}
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
