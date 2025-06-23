import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 16px;
  box-shadow: 0px 16px 20px -12px rgba(0, 0, 0, 0.1),
    0px 40px 50px -10px rgba(0, 0, 0, 0.1);
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

export const Date = styled(CommonBox)`
  color: ${(props) =>
    !props.$isCurrentMonth ? "#B4B4B4" : props.$isToday ? "red" : "#000000"};
  cursor: pointer;
  align-content: space-around;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    outline: 1px solid red;
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
  font-weight: bold;
  line-height: 64px;
  letter-spacing: 0px;
  user-select: none;
`;

export const ArrowImg = styled.img`
  cursor: pointer;
`;

export const ArrowWrap = styled.div`
  display: flex;
  gap: 16px;
  user-select: none;
`;
