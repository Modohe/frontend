import React, { useEffect } from "react";
import * as S from "./styles";

export default function Modal({ closeModal, date, contents }) {
  const makeKey = (date) => {
    return (
      date.getFullYear() +
      "년 " +
      (date.getMonth() + 1) +
      "월 " +
      date.getDate() +
      "일"
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <S.ModalBackground onClick={closeModal}>
      <S.ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          {makeKey(date)}
        </h2>
        <S.ScheduleList $scrollable={contents.length >= 5}>
          {contents.length === 0 ? (
            <div>일정이 없습니다.</div>
          ) : (
            contents.map((content, index) => (
              <S.ScheduleItem key={index}>
                {content.title}
                <input type="checkbox" />
              </S.ScheduleItem>
            ))
          )}
        </S.ScheduleList>
      </S.ModalContainer>
    </S.ModalBackground>
  );
}
