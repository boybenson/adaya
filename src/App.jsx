import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import LandingPage from "./pages/Landing";
import LoginForm from "./pages/Login";
import Instructors from "./pages/Instructor";
import GradeReport from "./pages/GradeReport";
import Dashboard from "./pages/Dashboard";
import MissingGrade from "./pages/MissingGrade";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/dashboard" element={<Dashboard />} />Z
          <Route path="/missing-grade" element={<MissingGrade />} />Z
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
