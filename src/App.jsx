import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import FuturePage from "./components/FuturePage";
import StoryPage from "./components/StoryPage";
import OverlayMenu from "./components/OverlayMenu";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect menu=true in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setMenuOpen(params.get("menu") === "true");
  }, [location.search]);

  // Close menu & remove query param without reload
  const closeMenu = () => {
    const url = new URL(window.location);
    url.searchParams.delete("menu");
    window.history.replaceState({}, "", url.toString());
    setMenuOpen(false);
  };

  // If menuOpen is true, show OverlayMenu
  return (
    <>
      {menuOpen && <OverlayMenu onClose={closeMenu} />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/future" element={<FuturePage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </>
  );
}
