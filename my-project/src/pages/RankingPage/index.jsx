import * as S from "./styles";
import ProfileIcon from "@/assets/ProfileIcon.svg";


// const rankingPeoples = [
//   { rank: 1, name: '김희찬', score: 1000, ingChallenge: 10, endChallenge: 10 },
//   { rank: 2, name: '김희차', score: 100, ingChallenge: 9, endChallenge: 8 },
//   { rank: 3, name: '김희', score: 10, ingChallenge: 8, endChallenge: 6 },
//   { rank: 4, name: '김흐', score: 1, ingChallenge: 7, endChallenge: 4 }
// ]

export default function RankingPage() {
  return (
    <S.RankinPageContainer>
      챌린지 랭킹
      <S.TopRankers>
        <S.TopRanker><S.TopRankerProfile src={ProfileIcon}></S.TopRankerProfile></S.TopRanker>
        <S.TopRanker><S.TopRankerProfile src={ProfileIcon}></S.TopRankerProfile></S.TopRanker>
        <S.TopRanker><S.TopRankerProfile src={ProfileIcon}></S.TopRankerProfile></S.TopRanker>
      </S.TopRankers>
    </S.RankinPageContainer>
  )
}
