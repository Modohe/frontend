import * as S from "./styles";
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MyPage() {
  return (
    <S.MyPageContainer>
      <S.BackButton onClick={() => alert('클릭')}><img src="" alt="" />설정</S.BackButton>
      <S.ActivityMetrics>
        <S.MetricsLeft>
          <S.PointTotalLabel>획득 포인트</S.PointTotalLabel>
          <S.PointTotalValue>2,450</S.PointTotalValue>
          <S.PointDescription>챌린지 완료 시 획득한 총 포인트</S.PointDescription>
          <S.PointLog>
            <S.PointLogItem>
              <span>독서 챌린지 완료</span>
              <span className="point">+350포인트</span>
            </S.PointLogItem>
            <S.PointLogItem>
              <span>운동 챌린지 완료</span>
              <span className="point">+500포인트</span>
            </S.PointLogItem>
            <S.PointLogItem>
              <span>습관 유지</span>
              <span className="point">+200포인트</span>
            </S.PointLogItem>
          </S.PointLog>
        </S.MetricsLeft>
        <S.MetricsRight>
          <S.PointTotalLabel>습관 달성률</S.PointTotalLabel>
          <S.ProgressCircle>
            <Doughnut
              data={{
                datasets: [{
                  data: [87, 13],
                  backgroundColor: ['#6366F1', '#E5E7EB'],
                  borderWidth: 0,
                  cutout: '75%',
                }]
              }}
              options={{
                cutout: '75%',
                responsive: true,
                plugins: {
                  tooltip: { enabled: false },
                  legend: { display: false },
                },
                maintainAspectRatio: false,
              }}
            />
            <S.ProgressValue>87%</S.ProgressValue>
          </S.ProgressCircle>
        </S.MetricsRight>
      </S.ActivityMetrics>
      
    </S.MyPageContainer>
  )
}
