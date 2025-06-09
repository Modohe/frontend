import EmailIcon from "@/assets/EmailIcon.svg";
import PasswordIcon from "@/assets/PasswordIcon.svg";
import NameIcon from "@/assets/NameIcon.svg";
import React, { useState } from "react";
import * as S from "./styles";

export default function Input({ type, contents = "", ph = "", value, onChange }) {
  const [inputType, setInputType] = useState(type);

  const handleShowPswd = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const renderIcon = () => {
    switch (type) {
      case "email":
        return <img src={EmailIcon} alt="email icon" style={{ width: "1rem", height: "1rem" }} />;
      case "password":
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
            <img src={PasswordIcon} alt="password icon" style={{ width: "1rem", height: "1rem" }} />
          </button>
        );
      case "name":
        return <img src={NameIcon} alt="name icon" style={{ width: "1rem", height: "1rem" }} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {contents && <label style={{ display: "block", marginBottom: "0.5rem" }}>{contents}</label>}
      <S.InputBox>
        {renderIcon()}
        <S.StyledInput
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={ph}
        />
      </S.InputBox>
    </div>
  );
}
