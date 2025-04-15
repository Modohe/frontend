import React from "react";
import * as S from "./styles";
import { daysOfWeek } from "@/util/makeKey";

const DayOfWeekRow = () => {
  return (
    <S.DayWrap>
      {daysOfWeek.map((day, index) => (
        <S.Day key={index}>{day}</S.Day>
      ))}
    </S.DayWrap>
  );
};

export default React.memo(DayOfWeekRow);