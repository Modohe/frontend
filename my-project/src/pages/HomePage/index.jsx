import React from "react";
import * as S from "./styles";
import ChallengeSection, {
  UserChallengeContent,
  AIChallengeContent,
  TodayChallengeContent,
} from "@/components/routineComponent";

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
  { id: 1, description: "오늘의 코딩 챌린지", progress: 40, participants: 85 },
  { id: 2, description: "오늘의 영어 단어", progress: 20, participants: 60 },
  { id: 3, description: "오늘의 명상 10분", progress: 75, participants: 100 },
  { id: 4, description: "오늘의 플래너 작성", progress: 50, participants: 70 },
  { id: 5, description: "오늘의 운동 30분", progress: 60, participants: 90 },
  { id: 6, description: "오늘의 독서 챌린지", progress: 85, participants: 120 },
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
      <ChallengeSection title="유저 챌린지" color="#007bff">
        <S.GridContainer>
          {userChallenges.map(({ id, description, progress, participants }) => (
            <UserChallengeContent
              key={id}
              description={description}
              progress={progress}
              participants={participants}
              onJoin={handleJoin}
            />
          ))}
        </S.GridContainer>
      </ChallengeSection>

      <ChallengeSection title="AI 추천 챌린지" color="#28a745">
        <S.GridContainer>
          {aiChallenges.map(({ id, description, explanation }) => (
            <AIChallengeContent
              key={id}
              description={description}
              explanation={explanation}
              onJoin={handleJoin}
            />
          ))}
        </S.GridContainer>
      </ChallengeSection>

      <ChallengeSection title="오늘의 챌린지" color="#ffc107">
        <S.GridContainer>
          {todayChallenges.map(({ id, description, progress, participants }) => (
            <TodayChallengeContent
              key={id}
              description={description}
              progress={progress}
              onDetail={handleDetail}
              participants={participants}
            />
          ))}
        </S.GridContainer>
      </ChallengeSection>

      <ChallengeSection title="나의 챌린지 현황" color="#dc3545">
        <S.GridContainer>
          {myStats.map(({ id, label, value, color }) => (
            <S.StatBox key={id}>
              <S.StatLabel color={color} style={{ color }}>{label}</S.StatLabel>
              <S.StatValue>{value.toLocaleString()}</S.StatValue>
            </S.StatBox>
          ))}
        </S.GridContainer>
      </ChallengeSection>
    </div>
  );
};

export default HomePage;
