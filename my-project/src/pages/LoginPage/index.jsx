import * as S from "./styles";
import Input from "@/components/LoginInput";

export default function Login() {
  return (
    <S.LoginBackground>
      <S.LoginModal>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>환영합니다</h2>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>계정에 로그인하세요</p>
        </div>

        <Input contents="아이디" type="text" />
        <div style={{ height: "0.5rem" }} />
        <Input contents="비밀번호" type="password" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.9rem",
            marginTop: "0.5rem",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <input type="checkbox" />
            로그인 상태 유지
          </label>
          <div>
            <a href="#" style={{ marginRight: "0.5rem", textDecoration: "none", color: "#333" }}>아이디 찾기</a>
            <a href="#" style={{ textDecoration: "none", color: "#333" }}>비밀번호 찾기</a>
          </div>
        </div>

        <button
          style={{
            marginTop: "1.5rem",
            backgroundColor: "#000",
            color: "#fff",
            padding: "0.75rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          로그인
        </button>

        <div style={{ marginTop: "auto", textAlign: "center", fontSize: "0.9rem" }}>
          계정이 없으신가요? <a href="#" style={{ fontWeight: "bold", color: "#000" }}>회원가입</a>
        </div>
      </S.LoginModal>
    </S.LoginBackground>
  );
}
