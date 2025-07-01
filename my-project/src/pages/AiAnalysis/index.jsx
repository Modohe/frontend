import * as S from "./styles";
import {
  SectionTitle,
  ChallengeWrapper,
  GridContainer,
  ChallengeCard,
  ChallengeHeaderYellow,
  ChallengeProgressBar,
  ChallengeParticipants,
} from "../HomePage/styles";
import GroupImg from '@/assets/Group.svg';

const todayChallenges = [
  { id: 1, description: "매일 30분 운동하기", progress: 40, participants: 85 },
  { id: 2, description: "하루 책 20페이지 읽기", progress: 20, participants: 60 },
  { id: 3, description: "하루 8잔 물 마시기", progress: 75, participants: 100 },
];



export default function AiAnalysis() {

  return (
    <S.AiAnalysisPageContainer>
      <ChallengeWrapper>
        <SectionTitle>오늘의 챌린지 목록</SectionTitle>
        <GridContainer>
          {todayChallenges.map(({ id, description, progress, participants }) => (
            <ChallengeCard key={id} style={{ width: "100%", height: "110px" }}>
              <ChallengeHeaderYellow>{description}</ChallengeHeaderYellow>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                <ChallengeProgressBar percent={progress} color="#ffc107" style={{ marginTop: "4px" }}>
                  <div />
                </ChallengeProgressBar>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "0.9rem", color: "#555" }}>
                  <ChallengeParticipants><img src={GroupImg} alt="" style={{ marginRight: "4px" }} />{participants}명 참여중</ChallengeParticipants>
                </div>
              </div>
            </ChallengeCard>
          ))}
        </GridContainer>
      </ChallengeWrapper>

      <S.ChallengeStatistics>
        <SectionTitle>챌린지 통계</SectionTitle>
        <div style={{ display: "flex", gap: "12px" }}>
          <S.AiAnalysisInfoBox $color="#000000"><p>달성률</p><b>87%</b></S.AiAnalysisInfoBox>
          <S.AiAnalysisInfoBox $color="#22C55E"><p>AI 피드백</p><b>지난주보다 30% 늘었어요!</b></S.AiAnalysisInfoBox>
          <S.AiAnalysisInfoBox $color="#3B82F6"><p>AI 코멘트</p><b>잘하고 있어요!</b></S.AiAnalysisInfoBox>
          <S.AiAnalysisInfoBox $color="#A855F7"><p>획득 포인트</p><b>2,450</b></S.AiAnalysisInfoBox>
        </div>
      </S.ChallengeStatistics>
    </S.AiAnalysisPageContainer>
  )
}
