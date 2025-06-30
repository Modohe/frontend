import styled from "styled-components";

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 28px;
  margin: -12px 0px;
  & > b {
    line-height: 50px;
  }
`;

export const RankinPageContainer = styled.div`
  width: 58vw;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
`;

const Rankers = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
`;

export const TopRankers = styled(Rankers)`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const TopRanker = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 12px;
  background-color: ${(props) => {
    if (props.$rank === 1) return "#FEF3C7";
    if (props.$rank === 2) return "#F3F4F6";
    if (props.$rank === 3) return "#FFEDD5";
    return "#fefefe";
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Medal = styled.img`
  position: absolute;
  top: 17px;
  right: 10px;
  transform: translate(50%, -50%);
  width: 36px;
  height: 36px;
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-sizing: border-box;
`;

export const InfoBox = styled.div`
  color: #fff;
  margin-top: 12px;
  text-align: center;
  width: 100%;
`;

export const NameText = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => {
    if (props.$rank === 1) return "#D97706";
    if (props.$rank === 2) return "#4B5563";
    if (props.$rank === 3) return "#EA580C";
  }};
  margin-bottom: 5px;
`;

export const ScoreText = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
`;

export const ProgressBarContainer = styled.div`
  margin: 8px auto;
  width: 100%;
  height: 6px;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #6366f1;
  border-radius: 4px;
  width: ${(props) => props.width || "0%"};
`;

export const ChallengeCount = styled.div`
  font-size: 12px;
`;

export const ChallengeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 8px;
  color: #000;
`;

export const ChallengeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #6b7280;
`;

export const ChallengeScore = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #4b5563;
  margin-top: 4px;
`;

export const TotalRankers = styled(Rankers)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TotalProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 4px;
`;

export const TotalProgressBar = styled.div`
  height: 100%;
  background-color: #6366f1;
  border-radius: 4px;
  width: ${(props) => props.width || "0%"};
`;

export const RankerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  gap: 12px;
  border-radius: 12px;
  border: 0.2px solid #9ca3af;
  align-items: center;
  padding: 0 16px;
`;

export const RankingNumber = styled.p`
  font-weight: bold;
  color: #4f46e5;
  width: 32px;
  text-align: center;
`;

export const RankerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const RankerStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  font-size: 12px;
  color: #374151;
`;

export const StatNumber = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-top: 4px;
  color: #6b7280;
`;

export const MoreButton = styled.button`
  margin-top: 12px;
  align-self: center;
  padding: 6px 12px;
  font-size: "14px";
  border-radius: 4px;
  background-color: #f3f4f6;
  border: none;
  cursor: pointer;
`;
