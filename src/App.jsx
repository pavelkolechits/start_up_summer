import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserPage } from "./pages/UserPage/UserPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ApiRateLimitExceededPage } from "./pages/ApiRateLimitExceededPage/ApiRateLimitExceededPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/limit-exceeded" element={<ApiRateLimitExceededPage />} />
      </Route>
    </Routes>
  );
};
