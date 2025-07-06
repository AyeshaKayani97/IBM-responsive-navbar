import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import HomePage from "./routes/homepage/HomePage.jsx";
// import CreatePage from "./routes/createpage/CreatePage.jsx";
// import PostPage from "./routes/postpage/PostPage.jsx";
// import AuthPage from "./routes/authpage/AuthPage.jsx";
// import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
// import SearchPage from "./routes/searchPage/SearchPage.jsx";
import MainLayouts from "./routes/layouts/MainLayouts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
     <Routes>
      <Route element={<MainLayouts/>}>
 <Route path="/" element={<HomePage />} />
      {/* <Route path="/ceate" element={<CreatePage />} /> */}
      {/* <Route path="/pin/:id" element={<PostPage />} /> */}
      {/* <Route path="/search" element={<SearchPage />} /> */}
      {/* <Route path="/:username" element={<ProfilePage />} /> */}

      </Route>
      {/* <Route path="/auth" element={<AuthPage />} /> */}
     

    </Routes>
    </BrowserRouter>
  </StrictMode>
);
