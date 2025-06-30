import * as S from "./styles";
import ProfileIcon from "@/assets/ProfileIcon.svg";
import GoldMedal from "@/assets/GoldMedal.svg";
import SilverMedal from "@/assets/SilverMedal.svg";
import BronzeMedal from "@/assets/BronzeMedal.svg";



const rankingPeoples = [
  { rank: 1, name: '김희찬', score: 5000, ingChallenge: 15, endChallenge: 14 },
  { rank: 2, name: '박지성', score: 4200, ingChallenge: 14, endChallenge: 13 },
  { rank: 3, name: '이강인', score: 3900, ingChallenge: 13, endChallenge: 12 },
  { rank: 4, name: '손흥민', score: 3500, ingChallenge: 12, endChallenge: 10 },
  { rank: 5, name: '정우영', score: 3200, ingChallenge: 12, endChallenge: 9 },
  { rank: 6, name: '김민재', score: 3100, ingChallenge: 11, endChallenge: 9 },
  { rank: 7, name: '황희찬', score: 2800, ingChallenge: 10, endChallenge: 8 },
  { rank: 8, name: '조규성', score: 2600, ingChallenge: 10, endChallenge: 7 },
  { rank: 9, name: '백승호', score: 2400, ingChallenge: 9, endChallenge: 7 },
  { rank: 10, name: '이승우', score: 2300, ingChallenge: 9, endChallenge: 6 },
  { rank: 11, name: '황인범', score: 2100, ingChallenge: 8, endChallenge: 6 },
  { rank: 12, name: '권창훈', score: 1900, ingChallenge: 8, endChallenge: 5 },
  { rank: 13, name: '윤빛가람', score: 1800, ingChallenge: 7, endChallenge: 4 },
  { rank: 14, name: '홍철', score: 1600, ingChallenge: 6, endChallenge: 3 },
  { rank: 15, name: '김진수', score: 1500, ingChallenge: 5, endChallenge: 2 },
];

const getMedalByRank = (rank) => {
  if (rank === 1) return GoldMedal;
  if (rank === 2) return SilverMedal;
  if (rank === 3) return BronzeMedal;
  return null;
};

export default function RankingPage() {
  const maxScore = rankingPeoples[0]?.score || 5000;
  const maxScoreRounded = Math.ceil(maxScore / 100) * 100;

  return (
    <S.RankinPageContainer>
      <S.Title>챌린지 랭킹</S.Title>
      <S.SubTitle>챌린지 참여자들의 랭킹을 확인하고 도전해보세요!</S.SubTitle>

      <S.TopRankers>
        {rankingPeoples.slice(0, 3).map((person, index) => {
          const medal = getMedalByRank(person.rank);
          return (
            <S.TopRanker key={index} $rank={person.rank}>
              <S.ProfileWrapper>
                <S.ProfileImage src={ProfileIcon} />
                {medal && <S.Medal src={medal} />}
              </S.ProfileWrapper>
              <S.InfoBox>
                <S.NameText $rank={person.rank}>{person.rank}위 {person.name}</S.NameText>
                <S.ScoreText>{person.score} 스코어</S.ScoreText>
                <S.ProgressBarContainer>
                  <S.ProgressBar width={`${(person.score / maxScoreRounded) * 100}%`} />
                </S.ProgressBarContainer>
                <S.ChallengeWrapper>
                  <S.ChallengeItem>
                    참여 챌린지
                    <S.ChallengeScore>{person.ingChallenge}</S.ChallengeScore>
                  </S.ChallengeItem>
                  <S.ChallengeItem>
                    완료 챌린지
                    <S.ChallengeScore>{person.endChallenge}</S.ChallengeScore>
                  </S.ChallengeItem>
                </S.ChallengeWrapper>
              </S.InfoBox>
            </S.TopRanker>
          )
        })}
      </S.TopRankers >

      <S.TotalRankers>
        <S.SubTitle><b>전체 랭킹</b></S.SubTitle>
        {rankingPeoples.slice(3).map((person) => (
          <S.RankerContainer key={person.rank}>
            <S.RankingNumber>{person.rank}</S.RankingNumber>
            <S.ProfileImage src={ProfileIcon} />
            <S.RankerInfo>
              <S.NameText>{person.name}</S.NameText>
              <S.TotalProgressBarContainer>
                <S.TotalProgressBar width={`${(person.score / maxScoreRounded) * 100}%`} />
              </S.TotalProgressBarContainer>
            </S.RankerInfo>
            <S.RankerStat>
              참여
              <S.StatNumber>{person.ingChallenge}</S.StatNumber>
            </S.RankerStat>
            <S.RankerStat>
              완료
              <S.StatNumber>{person.endChallenge}</S.StatNumber>
            </S.RankerStat>
            <S.RankerStat>
              스코어
              <S.StatNumber style={{ color: "#4F46E5" }}>{person.score}</S.StatNumber>
            </S.RankerStat>
          </S.RankerContainer>
        ))}
      </S.TotalRankers>
    </S.RankinPageContainer >
  )
}
