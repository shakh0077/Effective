import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import MainPage from "../Components/MainPage";
import Course from "../Components/Course";
import GlobalLayout from "./GlobalLayout";
import Edvensed from "../Components/Edvensed";
import Kirish from "../Components/Kirish";



const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<GlobalLayout />}>
          <Route path="/main-page" element={<MainPage/>} />
          <Route path="/my-courses" element={<Course/>} />
          <Route path="/my-edvensed" element={<Edvensed/>} />
          <Route path="/my-blogs" element={<Kirish/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;
