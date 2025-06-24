import styled from "styled-components";

export const AuthBackground = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1vh 22vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthModal = styled.div`
  width: 560px;
  height: 710px;

  box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.1),
    0px 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 80px;
  background-color: #ffffff;
`;

export const AuthTopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AuthInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AuthBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AuthTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const AuthOptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  a {
    text-decoration: none;
    color: #333;
    margin-right: 0.5rem;
  }

  a:last-child {
    margin-right: 0;
  }
`;

export const AuthSubmitButton = styled.button`
  margin-top: 1.5rem;
  background-color: #000;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
`;

export const AuthRedirectPrompt = styled.div`
  margin-top: auto;
  text-align: center;
  font-size: 0.9rem;

  a {
    font-weight: bold;
    color: #000;
  }
`;
