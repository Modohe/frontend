import React from "react";
import * as S from "./styles";
import Input from "@/components/LoginInput";

export default function Login() {
  return (
    <S.LoginBackground>
      <Input contents="로그인" type="password"/>
    </S.LoginBackground>
  );
}
