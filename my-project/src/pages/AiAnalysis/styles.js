import styled from "styled-components";

export const AiAnalysisPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
`;

export const ChallengeStatistics = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px 32px;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const AiAnalysisInfoBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 21px;
  background-color: #f3f4f6;

  & > p {
    color: #6b7280;
    margin-bottom: 8px;
  }
  & > b {
    font-size: 1rem;
    font-weight: bold;
    white-space: nowrap;
    color: ${(props) => props.$color || "inherit"};
  }
`;

export const AnalysisChart = styled.div`
  height: 300px;
  margin-top: 24px;
`;
