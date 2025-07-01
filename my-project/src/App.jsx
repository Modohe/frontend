import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "@/components/header";
import Login from "@/pages/authForm/loginPage";
import Sign from "@/pages/authForm/signPage";
import CalendarPage from "@/pages/CalendarPage/index";
import HomePage from "./pages/HomePage";
import RankingPage from "./pages/RankingPage";
import AiAnalysis from "./pages/AiAnalysis";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/aiAnalysis" element={<AiAnalysis />} />
            <Route path="/myPage" element={<MyPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
