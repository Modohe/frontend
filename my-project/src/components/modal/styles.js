import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 600px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;

  border-radius: 16px;
  background: #fefefe;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  font-family: "Pretendard", sans-serif;
  z-index: 10;
`;

export const ScheduleList = styled.div`
  ${({ $scrollable }) =>
    $scrollable &&
    `
    max-height: 300px;
    overflow-y: auto;
  `}
`;

export const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  font-size: 16px;
  line-height: 1.4;

  input[type="checkbox"] {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
