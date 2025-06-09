import * as S from "./styles";
import Input from "@/components/LoginInput";
import { useState } from "react";

export default function Sign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    alert(`이름: ${name}\n이메일: ${email}\n비밀번호: ${password}\n비밀번호 확인: ${confirmPassword}`);
  };

  return (
    <S.AuthBackground>
      <S.AuthModal>
        <S.AuthTopSection>
          <S.AuthTitleArea>
            <h2>회원가입</h2>
            <p>새 계정을 만들어 시작하세요</p>
          </S.AuthTitleArea>
        </S.AuthTopSection>

        <S.AuthInputSection>
          <Input contents="이름" type="name" ph="홍길동" value={name} onChange={(e) => setName(e.target.value)} />
          <Input contents="이메일" type="email" ph="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input contents="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input contents="비밀번호 확인" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </S.AuthInputSection>

        <S.AuthBottomSection>
          <S.AuthSubmitButton onClick={handleSubmit}>
            회원가입
          </S.AuthSubmitButton>

          <S.AuthRedirectPrompt>
            이미 계정이 있으신가요? <a href="login">로그인</a>
          </S.AuthRedirectPrompt>
        </S.AuthBottomSection>
      </S.AuthModal>
    </S.AuthBackground>
  );
}
