import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./layouts/Layout";
import { HOME } from "./shared/router-path/routerPath";
import HomePage from "./pages/HomePage/HomePage";

const App = () =>  (
  <Routes>
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={HOME} />} />
      <Route path={HOME} element={<HomePage />} />
    </Route>
  </Routes>
);

export default App;
