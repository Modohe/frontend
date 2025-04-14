import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Challenge from "@/pages/ChallengePage/index";
import GlobalStyle from "@/styles/GlobalStyle";
import Login from "@/pages/loginPage/index";
import CalendarPage from "@/pages/CalendarPage/index";
import Modal from "@/components/modal";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Challenge />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<CalendarPage />} />
          {/* <Route path="/modal" element={<Modal />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
