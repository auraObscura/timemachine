import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
// pages
import LandingPage from "./components/pages/LandingPage";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import DashboardPage from "./components/pages/DashboardPage";
import AboutPage from "./components/pages/AboutPage";
import Avatars from "./components/Avatars";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route
          path="login"
          element={<SignInPage setUsername={setUsername} />}
        />
        <Route
          path="/dashboard"
          element={
            <DashboardPage username={username} setUsername={setUsername} />
          }
        >
          <Route path="all-avatars" element={<Avatars />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
