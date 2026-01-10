import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/loginogin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;


