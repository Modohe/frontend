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


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
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
      case "#007bff": return "#e0f0ff";
      case "#28a745": return "#e4f6e9";
      case "#6f42c1": return "#efe9f7";
      default: return "#f0f0f0";
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