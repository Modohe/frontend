import * as S from "./styles";
import Input from "@/components/LoginInput";

export default function Login() {
  return (
    <S.LoginBackground>
      <S.LoginModal>
        <S.LoginTopSection>
          <S.LoginTitleArea>
            <h2>환영합니다</h2>
            <p>계정에 로그인하세요</p>
          </S.LoginTitleArea>
        </S.LoginTopSection>

        <S.LoginInputSection>
          <Input contents="이메일" type="email" />
          <Input contents="비밀번호" type="password" />
        </S.LoginInputSection>

        <S.LoginBottomSection>
          <S.LoginOptionsRow>
            <label>
              <input type="checkbox" />
              로그인 상태 유지
            </label>
            <div>
              <a href="#">아이디 찾기</a>
              <a href="#">비밀번호 찾기</a>
            </div>
          </S.LoginOptionsRow>

          <S.LoginSubmitButton>
            로그인
          </S.LoginSubmitButton>

          <S.LoginSignupPrompt>
            계정이 없으신가요? <a href="#">회원가입</a>
          </S.LoginSignupPrompt>
        </S.LoginBottomSection>
      </S.LoginModal>
    </S.LoginBackground>
  );
}
