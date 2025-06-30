import * as S from "./styles";
import ProfileIcon from "@/assets/ProfileIcon.svg";
import GoldMedal from "@/assets/GoldMedal.svg";
import SilverMedal from "@/assets/SilverMedal.svg";
import BronzeMedal from "@/assets/BronzeMedal.svg";



const rankingPeoples = [
  { rank: 1, name: '김희찬', score: 1000, ingChallenge: 10, endChallenge: 10 },
  { rank: 2, name: '김희차', score: 100, ingChallenge: 9, endChallenge: 8 },
  { rank: 3, name: '김희', score: 10, ingChallenge: 8, endChallenge: 6 },
  { rank: 4, name: '김흐', score: 1, ingChallenge: 7, endChallenge: 4 }
]

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
    </S.RankinPageContainer >
  )
}
