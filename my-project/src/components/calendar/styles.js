import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  background-color: #ffffff;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const CalendarShiftWrap = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: -30px 0px;
`;

const CommonBox = styled.div`
  width: 100%;
  height: 64px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  font-family: "Pretendard-Semibold", sans-serif;
  font-size: 20px;
  box-sizing: border-box;
`;

export const Day = styled(CommonBox)``;

export const ColoredDay = styled(Day)`
  color: ${(props) => {
    if (props.day === "일") return "#F87171";
    if (props.day === "토") return "#60A5FA";
    return "#000000";
  }};
`;

export const Date = styled(CommonBox)`
  color: ${(props) => {
    if (props.$isToday) return "#ffffff";
    if (props.$isCurrentMonth === false) return "#B4B4B4";
    return "#000000";
  }};
  width: 150px;
  height: 100px;
  cursor: pointer;
  align-content: space-around;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;

  &:hover {
    background-color: #f2f2f2;
  }

  & > span {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$isToday ? "#7367f0" : "transparent"};
    color: ${(props) =>
      props.$isToday
        ? "#ffffff"
        : props.$isCurrentMonth === false
        ? "#B4B4B4"
        : "#000000"};
    font-weight: bold;
  }
`;

export const Week = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:first-child > div {
    border-top: 1px solid #e0e0e0;
  }

  & > div:first-child {
    border-left: 1px solid #e0e0e0;
  }
`;

export const TodoDate = styled.div`
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    color: inherit;
    font-size: 12px;
  }
`;

export const Month = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;

export const CurrentDate = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-weight: bolder;
  line-height: 64px;
  letter-spacing: 0px;
  user-select: none;
`;

export const ArrowImg = styled.img``;

export const ArrowWrap = styled.div`
  display: flex;
  gap: 16px;
  user-select: none;
`;

export const ArrowBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
