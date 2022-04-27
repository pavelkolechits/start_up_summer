import "./App.scss";
import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout/Layout"
import { HomePage } from "./pages/HomePage/HomePage"
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage"
import { UserPage } from "./pages/UserPage/UserPage";




export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/:user"element={<UserPage />} />
      <Route path="*"element={<NotFoundPage />} />
    </Route>
  </Routes>
  )
}

