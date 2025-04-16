import React from "react";
import * as S from "./styles";

const DateCell = ({ day, schedule, onClick }) => {
  const dateString = day.date.toDateString();
  const todos = schedule[dateString] || [];
  const firstTitle = todos[0]?.title || "";

  return (
    <S.Date
      onClick={() => onClick(day)}
      $isToday={day.isToday}
      $isCurrentMonth={day.isCurrentMonth}
    >
      {day.date.getDate()}
      <S.TodoDate>
        {todos.length > 0 && (
          <>
            <p>*</p>
            <p>{firstTitle.length > 4 ? firstTitle.slice(0, 4).trimEnd() + "..." : firstTitle}</p>
          </>
        )}
      </S.TodoDate>
    </S.Date>
  );
};

// props 변경 여부를 비교하여 리렌더링을 최소화하는 함수
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.day.date.getTime() === nextProps.day.date.getTime() &&
    prevProps.day.isCurrentMonth === nextProps.day.isCurrentMonth &&
    JSON.stringify(prevProps.schedule[prevProps.day.date.toDateString()] || []) ===
    JSON.stringify(nextProps.schedule[nextProps.day.date.toDateString()] || [])
  );
};

export default React.memo(DateCell, areEqual);