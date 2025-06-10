// src/components/routineComponent/index.jsx
import React from "react";
import * as S from "./styles";

export const ChallengeSection = ({ title, color, children }) => {
  return (
    <S.SectionBox>
      <S.SectionTitle color={color}>{title}</S.SectionTitle>
      <S.SectionContent>{children}</S.SectionContent>
    </S.SectionBox>
  );
};

export const UserChallengeContent = ({ description, progress, participants, onJoin }) => {
  return (
    <S.ContentWrapper>
      <S.Description>{description}</S.Description>
      <S.ProgressBar>
        <S.ProgressFill style={{ width: `${progress}%` }} />
      </S.ProgressBar>
      <S.InfoRow>
        <div>참여 인원: {participants}명</div>
        <S.JoinButton onClick={onJoin}>참여하기</S.JoinButton>
      </S.InfoRow>
    </S.ContentWrapper>
  );
};

export const AIChallengeContent = ({ description, explanation, onJoin }) => {
  return (
    <S.ContentWrapper>
      <S.Description>{description}</S.Description>
      <S.Explanation>{explanation}</S.Explanation>
      <S.JoinButton onClick={onJoin}>참여하기</S.JoinButton>
    </S.ContentWrapper>
  );
};

export const TodayChallengeContent = ({ description, progress, onDetail, participants }) => {
  return (
    <S.ContentWrapper>
      <S.Description>{description}</S.Description>
      <S.ProgressBar>
        <S.ProgressFill style={{ width: `${progress}%` }} />
      </S.ProgressBar>
      <S.InfoRow>
        <S.DetailText onClick={onDetail}>상세보기</S.DetailText>
        <div>참여 인원: {participants}명</div>
      </S.InfoRow>
    </S.ContentWrapper>
  );
};

export default ChallengeSection;
