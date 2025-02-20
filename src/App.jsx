import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Componenets/Navbar.jsx";
import Footer from "./Componenets/Footer.jsx";
import Home from "./Componenets/Pages/Home.jsx";
import PageEvents from "./Componenets/Pages/EventsPage.jsx";
import PageBlogs from "./Componenets/Pages/Blogs.jsx";
import Login from "./Componenets/Pages/Login.jsx";
import Register from "./Componenets/Pages/Register.jsx";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";
  const isRegisterPage = location.pathname === "/Register";

  return (
    <div>
      {isLoginPage && <Header inLoginPage={1}/>}
      {isRegisterPage && <Header inLoginPage={2}/>}
      {!isLoginPage && !isRegisterPage && <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="1337-events/" element={<Home />} />
          <Route path="1337-events/Events" element={<PageEvents />} />
          <Route path="1337-events/Blogs" element={<PageBlogs />} />
          <Route path="1337-events/Login" element={<Login />} />
          <Route path="1337-events/Register" element={<Register />} />
        </Routes>
      </main>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

