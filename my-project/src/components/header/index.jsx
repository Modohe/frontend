import React from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.LeftSection>
          <S.LogoIcon>🌐</S.LogoIcon>
        </S.LeftSection>
        <S.CenterSection>
          <S.NavLink href="#">홈</S.NavLink>
          <S.NavLink href="#">서비스</S.NavLink>
          <S.NavLink href="#">문의</S.NavLink>
        </S.CenterSection>
        <S.RightSection>
          <S.ProfileIcon>👤</S.ProfileIcon>
        </S.RightSection>
      </S.HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
