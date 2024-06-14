import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Main from "./Pages/Main.jsx";
import ProjectDescription from "./Pages/ProjectDescription.jsx";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import "./animations.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="projects/:id" element={<ProjectDescription />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
