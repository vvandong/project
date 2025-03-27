import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
function App() {
  return (
    <Routes>
      {/* "/" - 로그인 화면 */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
