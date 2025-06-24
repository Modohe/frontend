import React from "react";
import * as S from "./styles";
import { daysOfWeek } from "@/util/makeKey";

const DayOfWeekRow = () => {
  return (
    <S.DayWrap>
      {daysOfWeek.map((day, index) => (
        <S.ColoredDay key={index} day={day}>{day}</S.ColoredDay>
      ))}
    </S.DayWrap>
  );
};

export default React.memo(DayOfWeekRow);