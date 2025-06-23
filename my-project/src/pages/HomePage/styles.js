import styled from "styled-components";

export const SectionBox = styled.div`
  padding: 32px;
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ChallengeWrapper = styled.div`
  background-color: #0000;
  border-radius: 16px;
  padding: 24px 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
`;

export const StatLabel = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  font-weight: 600;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ color }) => {
    switch (color) {
      case "#007bff":
        return "#e0f0ff";
      case "#28a745":
        return "#e4f6e9";
      case "#6f42c1":
        return "#efe9f7";
      default:
        return "#f0f0f0";
    }
  }};
  color: ${({ color }) => color || "#000"};
`;

export const StatValue = styled.div`
  width: 100%;
  padding: 16px;
  font-size: 1.75rem;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const ChallengeCard = styled.div`
  width: 235px;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  background-color: white;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ChallengeHeader = styled.div`
  width: 100%;
  background-color: #e6f0ff;
  padding: 12px 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  color: #2d7ff9;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ChallengeHeaderGreen = styled.div`
  width: 100%;
  background-color: #e4f6e9;
  padding: 12px 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  color: #28a745;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ChallengeHeaderRed = styled.div`
  width: 100%;
  background-color: #ffe8e8;
  padding: 12px 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  color: #dc3545;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ChallengeHeaderYellow = styled.div`
  width: 100%;
  background-color: #fff3cd;
  padding: 12px 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  color: #ffc107;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ChallengeHeaderLightGreen = styled.div`
  width: 100%;
  background-color: #e2f8e9;
  padding: 12px 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  color: #2caa60;
  font-size: 1.1rem;
  font-weight: bold;
`;

export const ChallengeProgressBar = styled.div`
  height: 8px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  & > div {
    height: 100%;
    background-color: ${({ color }) => color || "#2d7ff9"};
    width: ${({ percent }) => percent}%;
    transition: width 0.3s ease;
  }
`;

export const ChallengeParticipants = styled.div`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ChallengeButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #e0e0e0;
  }
`;
