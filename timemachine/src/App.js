import { HashRouter, Routes, Route } from "react-router-dom";
// pages
import HomePage from "./components/UI/HomePage";
import SignInPage from "./components/UI/SignInPage";
import SignUpPage from "./components/UI/SignUpPage";
import DashboardPage from "./components/UI/DashboardPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/logout" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
