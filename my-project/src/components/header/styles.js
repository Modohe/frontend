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

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    font-size: 0.95rem;
    font-weight: 500;
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 64px;
  right: 2rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  z-index: 1001;

  button {
    background: none;
    border: none;
    padding: 0.75rem 1rem;
    text-align: left;
    width: 100%;
    cursor: pointer;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  button img {
    width: 1rem;
    height: 1rem;
  }
`;