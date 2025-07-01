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

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const todayChallenges = [
  { id: 1, description: "매일 30분 운동하기", progress: 40, participants: 85 },
  { id: 2, description: "하루 책 20페이지 읽기", progress: 20, participants: 60 },
  { id: 3, description: "하루 8잔 물 마시기", progress: 75, participants: 100 },
];

const challengeProgressData = [
  { day: "1일차", score: 10 },
  { day: "2일차", score: 20 },
  { day: "3일차", score: 35 },
  { day: "4일차", score: 30 },
  { day: "5일차", score: 45 },
  { day: "6일차", score: 46 },
  { day: "7일차", score: 100 },
  { day: "8일차", score: 5 },
];

export default function AiAnalysis() {

  const labels = challengeProgressData.map(d => d.day);
  const data = {
    labels,
    datasets: [
      {
        label: '챌린지 달성 점수',
        data: challengeProgressData.map(d => d.score),
        fill: false,
        borderColor: '#6366F1',
        backgroundColor: '#6366F1',
        tension: 0.2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const scores = challengeProgressData.map(d => d.score);
  const maxY = Math.max(...scores) + 10;
  const minY = Math.max(Math.min(...scores) - 10, 0);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest',
      intersect: false,
    },
    scales: {
      y: {
        min: minY,
        max: maxY,
        ticks: {
          stepSize: 5,
          color: '#6B7280',
          font: { size: 12 },
        },
        grid: {
          color: '#E5E7EB',
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
          font: { size: 12 },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#374151',
          font: { size: 14, weight: 'bold' },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#6366F1',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        padding: 8,
      },
    },
  };

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

        <S.AnalysisChart>
          <Line options={options} data={data} />
        </S.AnalysisChart>
      </S.ChallengeStatistics>
    </S.AiAnalysisPageContainer>
  );
}