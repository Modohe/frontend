import * as S from "./styles";
import {
  SectionTitle,
  ChallengeWrapper,
  GridContainer,
  StatBox,
  StatLabel,
  StatValue,
  ChallengeCard,
  ChallengeHeaderYellow,
  ChallengeProgressBar,
  ChallengeParticipants,
} from "../HomePage/styles";

const todayChallenges = [
  { id: 1, description: "매일 30분 운동하기", progress: 40, participants: 85 },
  { id: 2, description: "하루 책 20페이지 읽기", progress: 20, participants: 60 },
  { id: 3, description: "하루 8잔 물 마시기", progress: 75, participants: 100 },
];



export default function AiAnalysis() {

  return (
    <S.AiAnalysisPageContainer>
      <ChallengeWrapper>
        <SectionTitle>참여중인 챌린지</SectionTitle>
        <GridContainer>
          {todayChallenges.map(({ id, description, progress, participants }) => (
            <ChallengeCard key={id} style={{ width: "100%", height: "110px" }}>
              <ChallengeHeaderYellow>{description}</ChallengeHeaderYellow>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                <ChallengeProgressBar percent={progress} color="#ffc107">
                  <div />
                </ChallengeProgressBar>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "0.9rem", color: "#555" }}>
                  <ChallengeParticipants>{participants}명 참여중</ChallengeParticipants>
                </div>
              </div>
            </ChallengeCard>
          ))}
        </GridContainer>
      </ChallengeWrapper>
    </S.AiAnalysisPageContainer>
  )
}
