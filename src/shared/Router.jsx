import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthLayout from "../pages/AuthLayout";
import SearchPage from "../pages/SearchPage";
import UserProfilePage from "../pages/UserProfilePage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import TestPage from "../pages/TestPage";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          {/**/}
          <Route path="page1" element={<div>Auth Page 1</div>} />
          <Route path="page2" element={<div>Auth Page 2</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </Router>
  );
}
