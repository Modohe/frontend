import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Challenge from "@/pages/ChallengePage/index";
import GlobalStyle from "@/styles/GlobalStyle";
import Login from "@/pages/authForm/loginPage";
import CalendarPage from "@/pages/CalendarPage/index";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Challenge />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
