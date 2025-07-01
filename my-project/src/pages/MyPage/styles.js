import styled from "styled-components";

export const MyPageContainer = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BackButton = styled.p`
  background-color: none;
  border: none;
  cursor: pointer;
`;

export const ActivityMetrics = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  position: relative;
`;

export const MetricsLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  border-right: 1px solid #e5e7eb;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const PointTotalLabel = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
`;

export const PointTotalValue = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: #4f46e5;
  margin: 0 0 8px;
`;

export const PointDescription = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 16px;
`;

export const PointLog = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PointLogItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #4b5563;

  & > .point {
    color: #4f46e5;
  }
`;

export const MetricsRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;

export const ProgressCircle = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const ProgressValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
`;

export const BottomSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

export const ProfileSetting = styled.div`
  position: relative;
`;

export const MyInterestsSection = styled.div`
  position: relative;
`;

export const SectionDescription = styled.h1`
  color: #1f2937;
  font-weight: bold;
  font-size: 15px;
`;
