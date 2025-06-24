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
import Calendar from "@/components/calendar/index";

const todayChallenges = [
  { id: 1, description: "매일 30분 운동하기", progress: 40, participants: 85 },
  { id: 2, description: "하루 책 20페이지 읽기", progress: 20, participants: 60 },
  { id: 3, description: "하루 8잔 물 마시기", progress: 75, participants: 100 },
];

const myStats = [
  { id: 1, label: "완료한 챌린지", value: 62, color: "#28a745" },
  { id: 2, label: "달성률", value: 68 + "%", color: "#007bff" },
  { id: 3, label: "획득한 포인트", value: 158_000, color: "#6f42c1" },
];

export default function CalendarPage() {
  const handleDetail = () => alert("상세보기 클릭됨");

  return (
    <S.CalendarPageContainer>

      <Calendar />

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
                  <div style={{ fontWeight: "500", cursor: "pointer" }} onClick={handleDetail}>상세보기</div>
                  <ChallengeParticipants>{participants}명 참여중</ChallengeParticipants>
                </div>
              </div>
            </ChallengeCard>
          ))}
        </GridContainer>
      </ChallengeWrapper>

      <ChallengeWrapper>
        <SectionTitle>이번 달 통계</SectionTitle>
        <GridContainer>
          {myStats.map(({ id, label, value, color }) => (
            <StatBox key={id}>
              <StatLabel color={color} style={{ color }}>{label}</StatLabel>
              <StatValue>{value.toLocaleString()}</StatValue>
            </StatBox>
          ))}
        </GridContainer>
      </ChallengeWrapper>
    </S.CalendarPageContainer>
  );
}
