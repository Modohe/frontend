import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const CenterSection = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.div`
  font-size: 1.5rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
`;

export const ProfileIcon = styled.div`
  font-size: 1.5rem;
`;
