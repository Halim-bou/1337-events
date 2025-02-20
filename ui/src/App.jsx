import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Componenets/Navbar.jsx";
import Footer from "./Componenets/Footer.jsx";
import Home from "./Componenets/Pages/Home.jsx";
import PageEvents from "./Componenets/Pages/EventsPage.jsx";
import PageBlogs from "./Componenets/Pages/Blogs.jsx";
import Login from "./Componenets/Pages/Login.jsx";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  return (
    <div>
      {isLoginPage ? <Header inLoginPage={1}/> : <Header />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Events" element={<PageEvents />} />
          <Route path="Blogs" element={<PageBlogs />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
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

