import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Authorization from "./components/Authorization/Authorization";
import TelegramAuth from "./components/Authorization/TelegramAuth";
import LoginForm from "./components/LoginForm/LoginForm";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import SearchForm from "./components/SearchForm/SearchForm";
import DashboardCard from "./components/DashboardCard/DashboardCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/telegram-auth" element={<TelegramAuth />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/search-form" element={<SearchForm />} />
        <Route path="/dashboard" element={<DashboardCard />} />
      </Routes>
    </Router>
  );
}

export default App;
