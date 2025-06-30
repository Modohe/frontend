import styled from "styled-components";

export const RankinPageContainer = styled.div`
  height: 100vw;
  width: 58vw;
`;

export const TopRankers = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;

export const TopRanker = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: #000000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TopRankerProfile = styled.img`
  position: relative;
  width: auto;
  height: auto;
`;
