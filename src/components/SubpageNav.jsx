import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SubpageNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Flight Booking", path: "/flight-booking" },
    { label: "Visa Assistance", path: "/visa-assistance" },
    { label: "Hotel Reservation", path: "/hotel-reservation" },
    { label: "Attestation", path: "/attestation" },
    { label: "Doc Stamping", path: "/doc-stamping" },
    { label: "Forex", path: "/forex" }
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-[100] flex items-center justify-between h-[64px] sm:h-[68px] px-4 sm:px-10 lg:px-[60px] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,8,4,0.95)" : "rgba(10,8,4,0.3)",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.16)" : "1px solid rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        }}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" onClick={() => setMenuOpen(false)} className="leading-none flex-shrink-0" style={{ textDecoration: "none" }}>
          <img src="/images/hsbglogoo.png" alt="Hotline Solution"
            className="h-auto block object-contain" style={{ width: "clamp(80px,22vw,108px)" }} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map(l => (
            <Link
              key={l.label}
              to={l.path}
              className="nav-lnk f-dm no-underline transition-colors duration-300"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: location.pathname === l.path ? "#e8c97a" : "rgba(245,240,232,0.6)"
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-[6px] z-[300]"
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-6 rounded-sm transition-all duration-300"
              style={{
                height: "1.5px", background: "rgba(245,240,232,0.8)", transformOrigin: "center",
                ...(menuOpen && i === 0 ? { transform: "translateY(6.5px) rotate(45deg)" } : {}),
                ...(menuOpen && i === 1 ? { opacity: 0, transform: "scaleX(0)" } : {}),
                ...(menuOpen && i === 2 ? { transform: "translateY(-6.5px) rotate(-45deg)" } : {}),
              }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed left-0 right-0 z-[90] flex flex-col px-6 pb-6 pt-4 border-b border-[rgba(201,168,76,0.15)] md:hidden"
            style={{ top: 64, background: "rgba(10,8,4,0.98)", backdropFilter: "blur(25px)", WebkitBackdropFilter: "blur(25px)" }}
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map(l => (
              <Link
                key={l.label}
                to={l.path}
                onClick={() => setMenuOpen(false)}
                className="nav-lnk f-dm no-underline py-4 border-b border-[rgba(255,255,255,0.05)] last:border-b-0 w-full"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: location.pathname === l.path ? "#e8c97a" : "rgba(245,240,232,0.65)"
                }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
