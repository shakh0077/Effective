import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import MainPage from "../Components/MainPage";
import Course from "../Components/Course";
import GlobalLayout from "./GlobalLayout";
import Edvensed from "../Components/Edvensed";
import Kirish from "../Components/Kirish";
import FrontEnd from "../Pages/FrontEnd";
import Programing from "../Pages/Programing";
import PythonBasic from "../Pages/PythonBasic";
import Tgbot from "../Pages/Tgbot";
import BeginnerOnline from "../Pages/BeginnerOnline";
import RockedEffective from "../Pages/RockedEffective";
const NotFound = () => (
  <div style={{ padding: 40, textAlign: "center", fontSize: 24 }}>
    Sahifa topilmadi (404)
  </div>
);

const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<GlobalLayout />}>
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/my-courses" element={<Course />} />
          <Route path="/my-edvensed" element={<Edvensed />} />
          <Route path="/my-python-basic" element={<PythonBasic />} />
          <Route path="/my-tgbot" element={<Tgbot />} />
          <Route path="/my-beginner-online" element={<BeginnerOnline />} />
          <Route path="/my-rocked-effective" element={<RockedEffective />} />
        </Route>
        <Route path="/my-front-end" element={<FrontEnd />} />
        <Route path="/my-programing" element={<Programing />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;
