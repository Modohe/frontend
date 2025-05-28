import * as S from "./styles";
import Input from "@/components/LoginInput";

export default function Login() {
  return (
    <S.AuthBackground>
      <S.AuthModal>
        <S.AuthTopSection>
          <S.AuthTitleArea>
            <h2>환영합니다</h2>
            <p>계정에 로그인하세요</p>
          </S.AuthTitleArea>
        </S.AuthTopSection>

        <S.AuthInputSection>
          <Input contents="이메일" type="email" />
          <Input contents="비밀번호" type="password" />
        </S.AuthInputSection>

        <S.AuthBottomSection>
          <S.AuthOptionsRow>
            <label>
              <input type="checkbox" />
              로그인 상태 유지
            </label>
            <div>
              <a href="#">아이디 찾기</a>
              <a href="#">비밀번호 찾기</a>
            </div>
          </S.AuthOptionsRow>

          <S.AuthSubmitButton>
            로그인
          </S.AuthSubmitButton>

          <S.AuthRedirectPrompt>
            계정이 없으신가요? <a href="signin">회원가입</a>
          </S.AuthRedirectPrompt>
        </S.AuthBottomSection>
      </S.AuthModal>
    </S.AuthBackground>
  );
}
