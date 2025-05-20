import React from "react";
import * as S from "./styles";
import Input from "@/components/LoginInput";

export default function Login() {
  return (
    <S.LoginBackground>
      <S.LoginModal>
        <Input contents="로그인" type="password" />
      </S.LoginModal>
    </S.LoginBackground>
  );
}
