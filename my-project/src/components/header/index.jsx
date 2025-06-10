import React, { useState } from "react";
import * as S from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import LogoImg from "@/assets/Logo.svg";
import ProfileImg from "@/assets/ProfileIcon.svg";
import ToggleDownIcon from "@/assets/ToggleDown.svg";
import ToggleUpIcon from "@/assets/ToggleUp.svg";
import MySpaceIcon from "@/assets/MySpaceIcon.svg";
import LogoutIcon from "@/assets/LogoutIcon.svg";
import { GlobalPaddingFix } from "./styles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleProfileClick = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <GlobalPaddingFix />
      <S.HeaderWrapper>
        <S.LeftSection>
          <S.LogoIcon onClick={handleLogoClick}>
            <img src={LogoImg} alt="Logo" />
          </S.LogoIcon>
        </S.LeftSection>
        <S.CenterSection>
          <S.NavLink href="/calendar">캘린더</S.NavLink>
          <S.NavLink href="#">AI분석</S.NavLink>
          <S.NavLink href="#">랭킹</S.NavLink>
        </S.CenterSection>
        <S.RightSection>
          <S.ProfileWrapper onClick={handleProfileClick}>
            <img src={ProfileImg} alt="Profile" />
            <span>홍길동</span>
            <img src={menuOpen ? ToggleUpIcon : ToggleDownIcon} alt="Toggle" />
          </S.ProfileWrapper>
          {menuOpen && (
            <S.ProfileMenu>
              <button onClick={() => navigate("/mypage")}>
                <img src={MySpaceIcon} alt="" />
                나의 공간
              </button>
              <button onClick={() => alert("로그아웃 처리")}>
                <img src={LogoutIcon} alt="" />
                로그아웃
              </button>
            </S.ProfileMenu>
          )}
        </S.RightSection>
      </S.HeaderWrapper>
      <Outlet />
    </>
  );
};

export default Header;
