import styled from "styled-components";

export const SectionBox = styled.div`
  border-radius: 12px;
  padding: 32px;
  margin-bottom: 24px;
`;

const bgColorMap = {
  "#007bff": "#cce5ff", // blue light
  "#28a745": "#d4edda", // green light
  "#ffc107": "#fff3cd", // yellow light
  "#dc3545": "#f8d7da", // red light
  "#6f42c1": "#e2d9f3"  // purple light (optional)
};

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ color }) => color || "#000"};
  background-color: ${({ color }) => bgColorMap[color] || "#eee"};
  padding: 8px 16px;
  border-radius: 8px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  word-break: break-word;
`;

export const Explanation = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

export const ProgressBar = styled.div`
  width: 100%;
  max-width: 320px;
  height: 16px;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background-color: #4caf50;
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const JoinButton = styled.button`
  padding: 8px 16px;
  background-color: #e0e0e0;
  border: none;
  color: #333;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: #bdbdbd;
  }
`;

export const DetailButton = styled(JoinButton)`
  background-color: #6c757d;

  &:hover {
    background-color: #495057;
  }
`;

export const DetailText = styled.span`
  color: black;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;
