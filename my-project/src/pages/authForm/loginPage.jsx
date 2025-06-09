import { useState } from "react";
import * as S from "./styles";
import Input from "@/components/LoginInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert(`이메일: ${email}\n비밀번호: ${password}`);
  };

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
          <Input contents="이메일" type="email" ph="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input contents="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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

          <S.AuthSubmitButton onClick={handleSubmit}>
            로그인
          </S.AuthSubmitButton>

          <S.AuthRedirectPrompt>
            계정이 없으신가요? <a href="sign">회원가입</a>
          </S.AuthRedirectPrompt>
        </S.AuthBottomSection>
      </S.AuthModal>
    </S.AuthBackground>
  );
}
