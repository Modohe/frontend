import * as S from "./styles";
import GroupImg from "@/assets/Group.svg";

const userChallenges = [
  { id: 1, description: "하루 1시간 코딩하기", progress: 70, participants: 120 },
  { id: 2, description: "아침 10분 스트레칭", progress: 40, participants: 80 },
  { id: 3, description: "매일 독서 30분", progress: 55, participants: 90 },
  { id: 4, description: "저녁 산책하기", progress: 65, participants: 75 },
  { id: 5, description: "물 2L 마시기", progress: 80, participants: 110 },
  { id: 6, description: "주 3회 운동", progress: 30, participants: 50 },
];

const aiChallenges = [
  { id: 1, description: "AI 프로젝트 시작하기", explanation: "초보자를 위한 AI 챌린지" },
  { id: 2, description: "데이터 분석 도전", explanation: "실전 데이터로 배우는 분석" },
  { id: 3, description: "머신러닝 기초", explanation: "ML 개념 익히기" },
  { id: 4, description: "딥러닝 실습", explanation: "신경망 모델 만들어보기" },
  { id: 5, description: "AI 활용 앱 개발", explanation: "실용 앱 만들기" },
  { id: 6, description: "AI 윤리 공부", explanation: "책임있는 AI 사용법" },
];

const todayChallenges = [
  { id: 1, description: "매일 30분 운동하기", progress: 40, participants: 85 },
  { id: 2, description: "하루 책 20페이지 읽기", progress: 20, participants: 60 },
  { id: 3, description: "하루 8잔 물 마시기", progress: 75, participants: 100 },
];

const myStats = [
  { id: 1, label: "참여중인 챌린지", value: 12_300, color: "#007bff" },
  { id: 2, label: "완료한 챌린지", value: 7_800, color: "#28a745" },
  { id: 3, label: "획득한 스코어", value: 158_000, color: "#6f42c1" },
];

const HomePage = () => {
  const handleJoin = () => alert("참여하기 클릭됨");
  const handleDetail = () => alert("상세보기 클릭됨");

  return (
    <div>
      <S.ChallengeWrapper>
        <S.SectionTitle>유저 챌린지</S.SectionTitle>
        <S.GridContainer>
          {userChallenges.map(({ id, description, progress, participants }) => (
            <S.ChallengeCard key={id}>
              <S.ChallengeHeader>{description}</S.ChallengeHeader>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <S.ChallengeProgressBar percent={progress}>
                  <div />
                </S.ChallengeProgressBar>
                <S.ChallengeParticipants>
                  <img src={GroupImg} alt="" style={{ marginRight: "2px" }} />
                  {participants}명이 참여중
                </S.ChallengeParticipants>
                <S.ChallengeButton onClick={handleJoin}>참여하기</S.ChallengeButton>
              </div>
            </S.ChallengeCard>
          ))}
        </S.GridContainer>
      </S.ChallengeWrapper>

      <S.ChallengeWrapper>
        <S.SectionTitle>AI 추천 챌린지</S.SectionTitle>
        <S.GridContainer>
          {aiChallenges.map(({ id, description, explanation }) => (
            <S.ChallengeCard key={id}>
              <S.ChallengeHeaderGreen>{description}</S.ChallengeHeaderGreen>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ fontSize: "0.9rem", color: "#555" }}>{explanation}</div>
                <S.ChallengeButton onClick={handleJoin}>참여하기</S.ChallengeButton>
              </div>
            </S.ChallengeCard>
          ))}
        </S.GridContainer>
      </S.ChallengeWrapper>

      <S.ChallengeWrapper>
        <S.SectionTitle>오늘의 챌린지</S.SectionTitle>
        <S.GridContainer>
          {todayChallenges.map(({ id, description, progress, participants }) => (
            <S.ChallengeCard key={id}>
              <S.ChallengeHeaderYellow>{description}</S.ChallengeHeaderYellow>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                <S.ChallengeProgressBar percent={progress} color="#ffc107">
                  <div />
                </S.ChallengeProgressBar>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "0.9rem", color: "#555" }}>
                  <div style={{ fontWeight: "500", cursor: "pointer" }} onClick={handleDetail}>상세보기</div>
                  <S.ChallengeParticipants>{participants}명 참여중</S.ChallengeParticipants>
                </div>
              </div>
            </S.ChallengeCard>
          ))}
        </S.GridContainer>
      </S.ChallengeWrapper>

      <S.ChallengeWrapper>
        <S.SectionTitle>나의 챌린지 현황</S.SectionTitle>
        <S.GridContainer>
          {myStats.map(({ id, label, value, color }) => (
            <S.StatBox key={id}>
              <S.StatLabel color={color} style={{ color }}>{label}</S.StatLabel>
              <S.StatValue>{value.toLocaleString()}</S.StatValue>
            </S.StatBox>
          ))}
        </S.GridContainer>
      </S.ChallengeWrapper>
    </div>
  );
};

export default HomePage;
