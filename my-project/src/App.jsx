import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "@/components/header";
import Challenge from "@/pages/ChallengePage/index";
import Login from "@/pages/authForm/loginPage";
import Sign from "@/pages/authForm/signPage";
import CalendarPage from "@/pages/CalendarPage/index";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Header />}>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/" element={<Challenge />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
