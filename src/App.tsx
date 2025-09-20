// src/App.tsx
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import useScrollSpy from "./components/hook/useScrollSpy";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ScrollTopButton from "./components/shared/ScrollTopButton";

import Home from "./pages/Home";
import ProjectDetail from "./pages/DetailPage";
// (Optional) If you also have a separate grid page:
// import ProjectGrid from "./pages/ProjectGrid";

import "./styles/variables.css";
import "./styles/utilities.css";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AppShell() {
  // Keeps your current behavior (active nav + scroll-to-top visibility)
  const { activeId, showTopBtn } = useScrollSpy({
    selector: "section",
    threshold: 0.5,
  });

  return (
    <div className="container">
      <Navbar activeId={activeId} />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* If you keep a dedicated projects grid page, uncomment this:
        <Route path="/projects" element={<ProjectGrid />} /> */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <ScrollTopButton visible={showTopBtn} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
}
