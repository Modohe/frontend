import React, { useEffect, useState, useMemo, useCallback } from "react";
import * as S from "./styles";
import LArrow from "@/assets/LeftArrow.svg";
import RArrow from "@/assets/RightArrow.svg";
import Modal from "../modal/index";
import { makeKey } from "@/util/makeKey";
import DateCell from "./DateCell";
import DayOfWeekRow from "./DayOfWeekRow";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const [schedule, setSchedule] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  //임시 일정 테스트
  useEffect(() => {
    setSchedule({
      [makeKey(2024, 12, 1)]: [{ title: "12월 프로젝트 킥오프" }],
      [makeKey(2025, 4, 2)]: [
        { title: "일정" },
        { title: "일정 7시 기상" },
        { title: "일정 8시 기상" },
      ],
      [makeKey(2025, 5, 7)]: [
        { title: "어떤 일정이 있긴 해" },
        { title: "일정" }
      ],
      [makeKey(2025, 4, 9)]: [{ title: "처음 테스트" }],
      [makeKey(2025, 5, 1)]: [{ title: "근로자의 날 행사" }],
    });
  }, []);

  // 주어진 날짜가 오늘 날짜인지 확인하는 함수
  const isToday = useCallback((date) => {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }, []);

  // 현재 월 기준으로 달력 형태의 주차 배열을 생성하는 useMemo
  const weeks = useMemo(() => {
    const isCurrentMonth = (date) => date.getMonth() === month;
    const firstDay = new Date(year, month, 1);
    const startOfWeek = new Date(year, month, 1 - firstDay.getDay());
    const endOfWeek = new Date(year, month + 1, 0);
    endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));

    const generatedWeeks = [];
    for (
      let day = new Date(startOfWeek);
      day <= endOfWeek;
      day.setDate(day.getDate() + 1)
    ) {
      if (!generatedWeeks.length || day.getDay() === 0) generatedWeeks.push([]);
      generatedWeeks[generatedWeeks.length - 1].push({
        date: new Date(day),
        isToday: isToday(day),
        isCurrentMonth: isCurrentMonth(day),
      });
    }
    return generatedWeeks;
  }, [year, month, isToday]);

  // 전달받은 방향에 따라 현재 월을 한 달 앞으로 또는 뒤로 이동시키는 함수
  const shiftMonth = (direction) => {
    setCurrentDate(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth() + (direction === "prev" ? -1 : 1)
        )
    );
  };

  // 날짜를 선택하고, 월이 다르면 월을 이동시키는 함수
  const selectDate = useCallback(
    (day) => {
      const { date } = day;
      if (date.getFullYear() !== year || date.getMonth() !== month) {
        shiftMonth(date < currentDate ? "prev" : "next");
      }
      setCurrentDate(date);
    },
    [year, month, currentDate]
  );

  // 날짜 클릭 시 모달을 열고 선택된 날짜 상태를 업데이트하는 함수
  const handleDateClick = useCallback(
    (day) => {
      selectDate(day);
      setSelectedDate(day.date);
      setIsModalOpen(true);
    },
    [selectDate]
  );

  return (
    <S.Container>
      <S.CalendarShiftWrap>
        <S.CurrentDate>
          {year}년 {month + 1}월
        </S.CurrentDate>
        <S.ArrowWrap>
          <S.ArrowImg
            src={LArrow}
            alt="전 달 화살표"
            onClick={() => shiftMonth("prev")}
          />
          <S.ArrowImg
            src={RArrow}
            alt="다음 달 화살표"
            onClick={() => shiftMonth("next")}
          />
        </S.ArrowWrap>
      </S.CalendarShiftWrap>
      <DayOfWeekRow />
      <S.Month>
        {weeks.map((week, weekIndex) => (
          <S.Week key={weekIndex}>
            {week.map((day, dateIndex) => (
              <DateCell
                key={dateIndex}
                day={day}
                schedule={schedule}
                onClick={handleDateClick}
              />
            ))}
          </S.Week>
        ))}
      </S.Month>
      {isModalOpen && selectedDate && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          date={selectedDate}
          contents={schedule[selectedDate.toDateString()] || []}
        />
      )}
    </S.Container>
  );
};

export default Calendar;
