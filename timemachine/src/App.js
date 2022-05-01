import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// pages
import LandingPage from "./components/pages/LandingPage";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import DashboardPage from "./components/pages/DashboardPage";
import AboutPage from "./components/pages/AboutPage";
// components
import Avatars from "./components/Avatars";
import ConvoHistory from "./components/ConvoHistory";

function App() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route
          path="login"
          element={
            <SignInPage setUsername={setUsername} setUserId={setUserId} />
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <DashboardPage username={username} setUsername={setUsername} />
          }
        >
          <Route path="all-avatars" element={<Avatars />} />
          <Route
            path="convo-history"
            element={<ConvoHistory userId={userId} />}
          />
          <Route
            path="conversations/:id"
            element={<ConvoHistory userId={userId} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
