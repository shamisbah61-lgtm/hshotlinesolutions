import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, BadgeCheck, Hotel, FileText, Stamp, Wallet, Star } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Forex from "./components/Forex";
import Attestation from "./components/Attestation";
import VisaAssistance from "./components/VisaAssistance";
import FlightBooking from "./components/FlightBooking";
import HotelReservation from "./components/HotelReservation";
import DocStamping from "./components/DocStamping";

// ─────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────
const PHONE  = "918086612704";
const WA_URL = `https://wa.me/${PHONE}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services.`;

const services = [
  { icon: Plane,      num: "01", title: "Flight Booking",    desc: "International and domestic flight arrangements with smooth, end-to-end travel planning.",       photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80", path: "/flight-booking" },
  { icon: BadgeCheck, num: "02", title: "Visa Assistance",   desc: "Professional support for tourist, work, and business visa processing worldwide.",               photo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80", path: "/visa-assistance" },
  { icon: Hotel,      num: "03", title: "Hotel Reservation", desc: "Luxury and budget-friendly hotel stays curated across global destinations.",                    photo: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80", path: "/hotel-reservation" },
  { icon: FileText,   num: "04", title: "Attestation",       desc: "Secure and verified document attestation services for international use.",                      photo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", path: "/attestation" },
  { icon: Stamp,      num: "05", title: "Doc Stamping",      desc: "Reliable stamping and document processing services handled professionally.",                    photo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80", path: "/doc-stamping" },
  { icon: Wallet,     num: "06", title: "Forex Services",    desc: "Safe and trusted foreign exchange assistance for all categories of travelers.",                 photo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80", path: "/forex" },
];

const marqueeItems = ["Flight Booking","Visa Assistance","Hotel Reservations","Document Attestation","Forex Services","Document Stamping"];

const mobileHeroImages = [
  { src: "/images/window.jpeg", position: "center" },
  { src: "/images/africa.jpg", position: "center" }, // Adjust position (e.g., "left", "right") if key elements are cut off
  { src: "/images/cruise.jpg", position: "center" },
  { src: "/images/global.jpg", position: "center" }
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=90",  label: "EUROPE",      tall: true },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=90",  label: "ASIA" },
  { src: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=90",  label: "OCEANIA" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=90",  label: "MIDDLE EAST" },
  { src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=90",  label: "AMERICAS" },
];

const testimonials = [
  { name: "Rahul Menon",    role: "Business Traveler",  rating: 5, text: "Exceptional service! My visa was processed faster than expected and the team was incredibly helpful throughout." },
  { name: "Priya Nair",     role: "Family Vacation",    rating: 5, text: "Booked flights and hotels through Hotlinesolution — everything was seamless. Highly recommend to anyone travelling abroad." },
  { name: "Arun Kumar",     role: "Work Permit Client", rating: 5, text: "The attestation and stamping was handled professionally with zero stress on my end. Will definitely use again." },
  { name: "Fathima Sherif", role: "Tourist Visa",       rating: 5, text: "Got my Schengen visa approved on the first attempt. Their guidance made the whole process so easy." },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─────────────────────────────────────────────
//  INJECTED STYLES
// ─────────────────────────────────────────────
const BASE_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { background: #0a0804 !important; overflow-x: hidden; }
  html { scroll-behavior: smooth; }

  body::before {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0; opacity: 0.35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  }

  @media (pointer: fine)  { body { cursor: none; } }
  @media (pointer: coarse){ .hl-cursor, .hl-ring { display: none !important; } }

  .f-bebas     { font-family: 'Bebas Neue', sans-serif; }
  .f-cormorant { font-family: 'Cormorant Garamond', serif; }
  .f-dm        { font-family: 'DM Sans', sans-serif; }

  .text-stroke-gold { -webkit-text-stroke: 1px #8a6d2f; color: transparent; }
  .text-gold-grad   { background: linear-gradient(135deg,#e8c97a,#c9a84c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

  .btn-clip { clip-path: polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%); }
  @media (max-width: 480px) { .btn-clip { clip-path: none !important; border-radius: 6px; } }

  .nav-lnk { position: relative; padding-bottom: 2px; }
  .nav-lnk::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#e8c97a; transition: width .35s cubic-bezier(.22,1,.36,1); }
  .nav-lnk:hover::after { width: 100%; }

  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .marquee-run { display:flex; white-space:nowrap; animation: marquee 22s linear infinite; }

  @keyframes lineSweep {
    0%  { opacity:0; transform:translateX(0); }
    20% { opacity:.5; }
    80% { opacity:.2; }
    100%{ opacity:0; transform:translateX(200vw); }
  }
  .sweep-line { position:absolute; height:1px; opacity:0; background:linear-gradient(90deg,transparent,#c9a84c,transparent); animation: lineSweep 6s ease infinite; }
  .sweep-line:nth-child(1){ top:25%; width:40%; left:-40%; animation-delay:0s; }
  .sweep-line:nth-child(2){ top:55%; width:60%; left:-60%; animation-delay:2s; }
  .sweep-line:nth-child(3){ top:75%; width:30%; left:-30%; animation-delay:4s; }

  @keyframes hlFadeUp { from{opacity:0;transform:translateY(12px);} to{opacity:1;transform:translateY(0);} }
  .hl-a1 { opacity:0; animation: hlFadeUp .8s ease .3s forwards; }
  .hl-a2 { opacity:0; animation: hlFadeUp .8s ease .6s forwards; }
  .hl-a3 { opacity:0; animation: hlFadeUp .8s ease 1.0s forwards; }

  .svc-overlay {
    position:absolute; inset:0; z-index:0;
    background: linear-gradient(135deg,rgba(10,8,4,.90) 0%,rgba(17,15,8,.82) 100%);
    transition: background .5s;
  }
  .svc-card:hover .svc-overlay {
    background: linear-gradient(135deg,rgba(10,8,4,.75) 0%,rgba(30,22,8,.68) 100%);
  }
  .svc-card:hover .svc-icon { border-color:#c9a84c !important; background:rgba(201,168,76,.12) !important; }
  .svc-card:hover .svc-num  { color:rgba(201,168,76,.18) !important; }

  .svc-arrow { width:32px; height:1px; background:#8a6d2f; position:relative; transition:width .4s; margin-top:28px; }
  .svc-arrow::after { content:''; position:absolute; right:0; top:-3px; width:7px; height:7px; border-right:1px solid #8a6d2f; border-top:1px solid #8a6d2f; transform:rotate(45deg); }
  .svc-card:hover .svc-arrow { width:56px; }

  .gal-item img  { transition: transform .8s ease, filter .8s ease; filter:brightness(.72) saturate(.8); }
  .gal-item:hover img { transform:scale(1.07); filter:brightness(.9) saturate(1); }
  .gal-label { position:absolute; bottom:0; left:0; right:0; padding:20px; background:linear-gradient(transparent,rgba(10,8,4,.8)); transform:translateY(101%); transition:transform .4s ease; }
  .gal-item:hover .gal-label { transform:translateY(0); }

  .con-card { position:relative; overflow:hidden; }
  .con-card::before { content:''; position:absolute; top:0; left:0; width:3px; height:0; background:#c9a84c; transition:height .4s; }
  .con-card:hover::before { height:100%; }

  .testi { position:relative; overflow:hidden; }
  .testi::before { content:''; position:absolute; top:0; left:0; width:100%; height:2px; background:linear-gradient(90deg,transparent,#c9a84c,transparent); opacity:0; transition:opacity .4s; }
  .testi:hover::before { opacity:1; }

  .gal-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-template-rows: 300px 220px;
  }
  .gal-tall { grid-row: 1 / 3; }
  @media (max-width: 900px) {
    .gal-grid { grid-template-columns:1fr 1fr; grid-template-rows:repeat(3,220px); }
    .gal-tall { grid-row: auto; }
  }
  @media (max-width: 540px) {
    .gal-grid { grid-template-columns:1fr; grid-template-rows:repeat(5,200px); }
  }

  section[id] { scroll-margin-top: 68px; }

  .hero-section {
    height: 100svh;
    min-height: 500px;
  }
  @media (max-width: 767px) {
    .hero-section {
      height: 125vw; /* Matches the 4:5 aspect ratio of 1080x1350 images */
      min-height: 460px;
    }
  }

  /* ── HERO RESPONSIVE MEDIA ── */
  /* Desktop (768px+): show video, hide mobile carousel */
  .hero-video { display: block; }
  .hero-carousel-container { display: none; }

  /* Mobile (<768px): hide video, show mobile carousel */
  @media (max-width: 767px) {
    .hero-video { display: none !important; }
    .hero-carousel-container { display: block !important; }
  }
`;

// ─────────────────────────────────────────────
//  SUB-COMPONENTS
// ─────────────────────────────────────────────
const WaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.057 23.492a.75.75 0 00.92.921l5.757-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.026-1.382l-.36-.214-3.733.977.999-3.648-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

const SectionLabel = ({ text }) => (
  <div className="f-dm flex items-center gap-4 mb-5"
    style={{ fontSize:"0.62rem", letterSpacing:"6px", textTransform:"uppercase", color:"#c9a84c" }}>
    <span style={{ display:"block", width:28, height:1, background:"#c9a84c", flexShrink:0 }} />
    {text}
  </div>
);

const GoldDiv = () => (
  <div style={{ height:1, background:"linear-gradient(90deg,transparent,#c9a84c,transparent)", opacity:.35 }} />
);

const BtnPrimary = ({ href, children, onClick, className = "" }) => (
  <a href={href} onClick={onClick}
    className={`btn-clip f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] transition-opacity duration-300 hover:opacity-80 ${className}`}
    style={{ background:"linear-gradient(135deg,#e8c97a,#c9a84c)", color:"#0a0804", fontSize:"0.72rem", letterSpacing:"3px", textTransform:"uppercase" }}>
    {children}
  </a>
);

const BtnWA = ({ href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noreferrer"
    className={`btn-clip f-dm font-medium no-underline inline-flex items-center justify-center gap-[10px] px-8 py-[15px] text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02] whitespace-nowrap ${className}`}
    style={{ background:"#25D366", fontSize:"0.72rem", letterSpacing:"3px", textTransform:"uppercase" }}>
    {children}
  </a>
);

// ─────────────────────────────────────────────
//  LOADER
// ─────────────────────────────────────────────
function HotlineLoader({ onDone }) {
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap'); html,body{background:#0a0804!important;}`;
    document.head.appendChild(el);
    const t = setTimeout(onDone, 2600);
    return () => { clearTimeout(t); document.head.removeChild(el); };
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[9000] flex flex-col items-center justify-center overflow-hidden"
      style={{ background:"#0a0804" }}>
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:500, height:500, top:"50%", left:"50%", transform:"translate(-50%,-50%)",
          background:"radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
      <div className="hl-a1 f-dm flex items-center gap-[14px] mb-10"
        style={{ fontSize:"0.58rem", letterSpacing:"8px", textTransform:"uppercase", color:"rgba(201,168,76,0.5)" }}>
        <span style={{ display:"block", width:26, height:1, background:"#c9a84c" }} />
        Premium Travel Consultancy
        <span style={{ display:"block", width:26, height:1, background:"#c9a84c" }} />
      </div>
      <img className="hl-a2 block object-contain" src="/images/hsbglogoo.png" alt="Hotline Solution"
        style={{ width:"min(260px,55vw)" }} />
      <p className="hl-a3 f-dm mt-8"
        style={{ fontSize:"0.58rem", letterSpacing:"6px", textTransform:"uppercase", color:"rgba(201,168,76,0.4)" }}>
        Trusted Travel Solutions
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
//  MAIN APP
// ─────────────────────────────────────────────
function MainApp() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const mx = useRef(0), my = useRef(0), rx = useRef(0), ry = useRef(0);
  const raf = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex(prev => (prev + 1) % mobileHeroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onMove = e => {
      mx.current = e.clientX; my.current = e.clientY;
      if (cursorRef.current) { cursorRef.current.style.left = e.clientX+"px"; cursorRef.current.style.top = e.clientY+"px"; }
    };
    document.addEventListener("mousemove", onMove);

    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx.current+"px"; ringRef.current.style.top = ry.current+"px"; }
      raf.current = requestAnimationFrame(animRing);
    };
    animRing();

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; }, [menuOpen]);

  const navLinks = [
    { label: "Flight Booking", path: "/flight-booking" },
    { label: "Visa Assistance", path: "/visa-assistance" },
    { label: "Hotel Reservation", path: "/hotel-reservation" },
    { label: "Attestation", path: "/attestation" },
    { label: "Doc Stamping", path: "/doc-stamping" },
    { label: "Forex", path: "/forex" }
  ];

  return (
    <div className="overflow-x-hidden" style={{ background:"#0a0804", color:"#f5f0e8" }}>

      {/* ── Custom cursor ── */}
      <div ref={cursorRef} className="hl-cursor fixed z-[9999] w-3 h-3 rounded-full pointer-events-none"
        style={{ background:"#c9a84c", transform:"translate(-50%,-50%)", mixBlendMode:"difference", top:0, left:0 }} />
      <div ref={ringRef} className="hl-ring fixed z-[9998] w-10 h-10 rounded-full pointer-events-none opacity-60"
        style={{ border:"1px solid #c9a84c", transform:"translate(-50%,-50%)", top:0, left:0 }} />

      {/* ══════════════════ NAV ══════════════════ */}
      <motion.nav
        className="fixed top-0 w-full z-[100] flex items-center justify-between h-[64px] sm:h-[68px] px-4 sm:px-10 lg:px-[60px] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,8,4,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.16)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        }}
        initial={{ opacity:0, y:-16 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
      >
        <Link to="/" className="leading-none flex-shrink-0" style={{ textDecoration:"none" }}>
          <img src="/images/hsbglogoo.png" alt="Hotline Solution"
            className="h-auto block object-contain" style={{ width:"clamp(80px,22vw,108px)" }} />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map(l => (
            <Link key={l.label} to={l.path}
              className="nav-lnk f-dm no-underline transition-colors duration-300"
              style={{ fontSize:"0.65rem", letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.6)" }}
              onMouseEnter={e => e.target.style.color="#e8c97a"}
              onMouseLeave={e => e.target.style.color="rgba(245,240,232,0.6)"}>
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-[6px] z-[300]"
          style={{ background:"none", border:"none", cursor:"pointer" }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {[0,1,2].map(i => (
            <span key={i} className="block w-6 rounded-sm transition-all duration-300"
              style={{
                height:"1.5px", background:"rgba(245,240,232,0.8)", transformOrigin:"center",
                ...(menuOpen && i===0 ? { transform:"translateY(6.5px) rotate(45deg)" } : {}),
                ...(menuOpen && i===1 ? { opacity:0, transform:"scaleX(0)" } : {}),
                ...(menuOpen && i===2 ? { transform:"translateY(-6.5px) rotate(-45deg)" } : {}),
              }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed left-0 right-0 z-[90] flex flex-col px-6 pb-6 pt-4 border-b border-[rgba(201,168,76,0.15)] md:hidden"
            style={{ top:64, background:"rgba(10,8,4,0.97)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)" }}
            initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }}
            transition={{ duration:0.25, ease:[0.22,1,0.36,1] }}
          >
            {navLinks.map(l => (
              <Link key={l.label} to={l.path}
                className="nav-lnk f-dm no-underline py-4 border-b border-[rgba(255,255,255,0.05)] last:border-b-0 w-full"
                style={{ fontSize:"0.72rem", letterSpacing:"4px", textTransform:"uppercase", color:"rgba(245,240,232,0.65)" }}
                onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════ HERO ══════════════════ */}
      <section id="home" className="hero-section relative overflow-hidden">
        <div className="sweep-line" /><div className="sweep-line" /><div className="sweep-line" />

        {/* ── DESKTOP: Full background video (hidden on mobile) ── */}
        <video
          autoPlay muted loop playsInline
          aria-hidden="true"
          className="hero-video absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/video/video_project.mp4" type="video/mp4" />
        </video>

        {/* ── MOBILE: Full background photo carousel (hidden on desktop) ── */}
        <div className="hero-carousel-container absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImgIndex}
              src={mobileHeroImages[currentImgIndex].src}
              alt={`Travel Slide ${currentImgIndex + 1}`}
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: mobileHeroImages[currentImgIndex].position || "center" }}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Dark overlay — applies to both */}
        <div className="absolute inset-0 z-[1]" style={{ background:"rgba(0,0,0,0.5)" }} />

        {/* Content */}
        <div className="relative z-[2] h-full flex flex-col items-center justify-end pb-16 sm:pb-20 px-4 sm:px-8 text-center">
          <motion.p className="f-dm text-white mb-8 sm:mb-10"
            style={{ letterSpacing:"4px", textTransform:"uppercase", fontSize:"clamp(0.62rem,1.8vw,0.9rem)" }}
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.3, duration:0.9 }}>
            Visa Services&nbsp;•&nbsp;Attestation&nbsp;•&nbsp;Forex&nbsp;•&nbsp;Flight Booking
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-3 w-full max-w-sm sm:max-w-none"
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.6, duration:0.9 }}>
            <BtnPrimary href="#services" className="flex-1 sm:flex-none min-w-[140px]">
              Explore Services
            </BtnPrimary>
            <BtnWA href={WA_URL} className="flex-1 sm:flex-none min-w-[140px]">
              <WaIcon size={18} /> WhatsApp Us
            </BtnWA>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ MARQUEE ══════════════════ */}
      <div className="overflow-hidden py-3" style={{ background:"#c9a84c" }}>
        <div className="marquee-run">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="f-bebas inline-flex items-center gap-5 px-10"
              style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1rem", letterSpacing:"4px", color:"#0a0804" }}>
              {item}
              <span style={{ display:"inline-block", width:5, height:5, borderRadius:"50%", background:"rgba(10,8,4,0.35)", flexShrink:0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section id="about" className="px-4 sm:px-10 lg:px-[60px] py-20 sm:py-[100px] lg:py-[140px]"
        style={{ background:"#110f08" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            <SectionLabel text="About Us" />
            <h2 className="f-bebas leading-[0.88]"
              style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(2.6rem,7vw,7rem)" }}>
              Trusted<br />
              <span className="text-stroke-gold">Travel</span><br />
              Solutions
            </h2>
          </motion.div>

          <motion.div
            className="md:pl-10 md:border-l md:border-[rgba(201,168,76,0.2)] pt-8 md:pt-0 border-t md:border-t-0 border-[rgba(201,168,76,0.2)]"
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            <p className="f-cormorant italic mb-8 leading-[1.9]"
              style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1rem,1.4vw,1.2rem)", color:"rgba(245,240,232,0.65)" }}>
              We provide seamless international travel support with professional consultancy and premium customer experience.
              From flights and visas to forex and document processing — global travel made simple, secure, and stress-free.
            </p>
            <div>
              {["Fast & Reliable Processing","Expert Visa Consultants","Trusted by 100+ Clients","End-to-End Travel Support"].map((f, i) => (
                <div key={f} className="f-dm flex items-center gap-4 py-[14px] border-b border-[rgba(255,255,255,0.05)]">
                  <span className="f-bebas min-w-[36px]"
                    style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.1rem", color:"#8a6d2f" }}>
                    0{i+1}
                  </span>
                  <span className="opacity-80"
                    style={{ fontSize:"0.75rem", letterSpacing:"2px", textTransform:"uppercase" }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDiv />

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section id="services" className="px-4 sm:px-10 lg:px-[60px] py-20 sm:py-[100px] lg:py-[140px]"
        style={{ background:"#0a0804" }}>
        <motion.div className="max-w-[1400px] mx-auto mb-12 sm:mb-16 lg:mb-20"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
          <SectionLabel text="What We Offer" />
          <h2 className="f-bebas leading-[0.88]"
            style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(2.6rem,8vw,8rem)" }}>
            Premium<br /><span className="text-stroke-gold">Services</span>
          </h2>
        </motion.div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {services.map((s, i) => {
            const Icon = s.icon;
            const cardContent = (
              <motion.div
                className="svc-card relative overflow-hidden py-10 px-8 sm:py-12 sm:px-10 bg-cover bg-center transition-transform duration-300 hover:-translate-y-1 h-full"
                variants={fadeUp} custom={i % 3} initial="hidden" whileInView="visible" viewport={{ once:true }}
                style={{ backgroundImage:`url(${s.photo})` }}>
                <div className="svc-overlay" />
                <div className="relative z-[1]">
                  <div className="svc-icon w-[52px] h-[52px] flex items-center justify-center mb-7 transition-all duration-300"
                    style={{ border:"1px solid rgba(201,168,76,0.35)" }}>
                    <Icon color="#c9a84c" size={24} />
                  </div>
                  <div className="svc-num f-bebas absolute top-7 right-7 leading-none transition-colors duration-300"
                    style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"3rem", color:"rgba(201,168,76,0.07)" }}>
                    {s.num}
                  </div>
                  <div className="f-bebas text-[1.7rem] tracking-[1px] mb-3"
                    style={{ fontFamily:"'Bebas Neue',sans-serif" }}>
                    {s.title}
                  </div>
                  <p className="f-dm leading-[1.8]" style={{ fontSize:"0.82rem", color:"#7a7060" }}>
                    {s.desc}
                  </p>
                  <div className="svc-arrow" />
                </div>
              </motion.div>
            );

            return s.path ? (
              <Link to={s.path} key={i} className="no-underline block h-full">
                {cardContent}
              </Link>
            ) : (
              <a href="#contact" key={i} className="no-underline block h-full">
                {cardContent}
              </a>
            );
          })}
        </div>
      </section>

      <GoldDiv />

      {/* ══════════════════ GALLERY ══════════════════ */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20 sm:py-[100px] lg:py-[140px]"
        style={{ background:"#110f08" }}>
        <div className="max-w-[1400px] mx-auto">
          <motion.div className="mb-10 sm:mb-14"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            <SectionLabel text="Global Destinations" />
            <h2 className="f-bebas leading-[0.88]"
              style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(2.6rem,7vw,7rem)" }}>
              Explore<br /><span className="text-stroke-gold">The World</span>
            </h2>
          </motion.div>

          <div className="gal-grid">
            {galleryImages.map((img, i) => (
              <motion.div key={i}
                className={`gal-item overflow-hidden relative${img.tall ? " gal-tall" : ""}`}
                style={{ background:"#1e1a10" }}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once:true }}>
                <img src={img.src} alt={img.label} loading="lazy" className="w-full h-full object-cover block" />
                <div className="gal-label">
                  <span className="f-bebas tracking-[3px]"
                    style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.1rem", color:"#c9a84c" }}>
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoldDiv />

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20 sm:py-[100px] lg:py-[140px]"
        style={{ background:"#0a0804" }}>
        <motion.div className="max-w-[1400px] mx-auto mb-10 sm:mb-14"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
          <SectionLabel text="Client Feedback" />
          <h2 className="f-bebas leading-[0.88]"
            style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(2.6rem,7vw,7rem)" }}>
            What Our<br /><span className="text-stroke-gold">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i}
              className="testi p-8 sm:p-10 border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.3)] transition-all duration-400 hover:-translate-y-1"
              style={{ background:"#1e1a10" }}
              variants={fadeUp} custom={i % 2} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="#c9a84c" color="#c9a84c" />
                ))}
              </div>
              <p className="f-cormorant italic mb-6 leading-[1.85]"
                style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(0.95rem,1.2vw,1.1rem)", color:"rgba(245,240,232,0.75)" }}>
                "{t.text}"
              </p>
              <div style={{ width:36, height:1, background:"#8a6d2f", marginBottom:18 }} />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center f-bebas"
                  style={{ background:"rgba(201,168,76,0.15)", border:"1px solid rgba(201,168,76,0.3)",
                    fontFamily:"'Bebas Neue',sans-serif", fontSize:"1rem", color:"#c9a84c" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="f-bebas tracking-[2px]"
                    style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"0.95rem", color:"#f5f0e8" }}>
                    {t.name}
                  </div>
                  <div className="f-dm mt-[2px]"
                    style={{ fontSize:"0.62rem", letterSpacing:"3px", textTransform:"uppercase", color:"#7a7060" }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <GoldDiv />

      {/* ══════════════════ CONTACT ══════════════════ */}
      <section id="contact" className="px-4 sm:px-10 lg:px-[60px] py-20 sm:py-[100px] lg:py-[140px]"
        style={{ background:"#110f08" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            <SectionLabel text="Get In Touch" />
            <h2 className="f-bebas leading-[0.88]"
              style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(2.6rem,8vw,8rem)" }}>
              Start<br />Your<br /><span style={{ color:"#c9a84c" }}>Journey</span>
            </h2>
            <p className="f-cormorant italic mt-5 leading-[1.8]"
              style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(0.95rem,1.4vw,1.1rem)", color:"#7a7060" }}>
              Trusted by 100+ clients for premium travel and documentation services worldwide.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.div className="con-card p-5 sm:p-6 border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-colors duration-300"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <div className="f-dm mb-1"
                style={{ fontSize:"0.6rem", letterSpacing:"4px", textTransform:"uppercase", color:"#c9a84c" }}>
                Phone / WhatsApp
              </div>
              <div className="f-cormorant"
                style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", color:"#f5f0e8" }}>
                +91 80866 12704
              </div>
            </motion.div>

            <motion.div className="con-card p-5 sm:p-6 border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-colors duration-300"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <div className="f-dm mb-1"
                style={{ fontSize:"0.6rem", letterSpacing:"4px", textTransform:"uppercase", color:"#c9a84c" }}>
                Email Address
              </div>
              <div className="f-cormorant break-all"
                style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", color:"#f5f0e8" }}>
                hshotsolutions@gmail.com
              </div>
            </motion.div>

            <motion.div className="con-card p-5 sm:p-6 border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-colors duration-300"
              variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <div className="flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="f-dm mb-1"
                    style={{ fontSize:"0.6rem", letterSpacing:"4px", textTransform:"uppercase", color:"#c9a84c" }}>
                    Office Location
                  </div>
                  <div className="f-cormorant"
                    style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", color:"#f5f0e8" }}>
                    Tirur, Kerala, India
                  </div>
                </div>
                <div className="flex-shrink-0 overflow-hidden rounded-lg"
                  style={{ width:"clamp(100px,28vw,160px)", height:"clamp(72px,10vw,96px)", border:"1px solid rgba(201,168,76,0.18)" }}>
                  <iframe
                     title="Hotline Location"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.4271813746299!2d75.92048251466767!3d10.818035742410329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bb726cd66c27%3A0x1f6c2b724bde9e8e!2sHotline%20Travel%20Solutions!5e1!3m2!1sen!2sin!4v1778666605417!5m2!1sen!2sin"
                     loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                     className="w-full h-full block" style={{ border:0, filter:"grayscale(1) brightness(.82)" }} />
                </div>
              </div>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3 mt-3"
              variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <BtnPrimary href="mailto:hshotsolutions@gmail.com" className="flex-1 min-w-[130px]">
                Contact Now
              </BtnPrimary>
              <BtnWA href={WA_URL} className="flex-1 min-w-[130px]">
                <WaIcon size={18} /> WhatsApp Us
              </BtnWA>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="border-t border-[rgba(201,168,76,0.12)] pt-8 pb-6 px-4 sm:px-10 lg:px-[60px]"
        style={{ background:"#0a0804" }}>
        <Link to="/" className="no-underline leading-none flex justify-center mb-7">
          <img src="/images/footer.png" alt="Hotline Solution"
            className="block object-contain h-auto" style={{ width:"clamp(160px,40vw,280px)" }} />
        </Link>
        <GoldDiv />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-5">
          <div className="f-dm flex flex-wrap justify-center sm:justify-start items-center gap-[6px]"
            style={{ fontSize:"0.65rem", letterSpacing:"2px", textTransform:"uppercase", color:"#7a7060" }}>
            <span>© 2026</span>
            <a href="https://instagram.com/hotlinesolutions" target="_blank" rel="noopener noreferrer"
              className="no-underline transition-colors duration-300 hover:text-[#c9a84c]"
              style={{ color:"#7a7060", fontSize:"0.65rem", letterSpacing:"2px", textTransform:"uppercase" }}>
              hotlinesolutions
            </a>
            <span>. All rights reserved.</span>
          </div>
          <div className="f-dm flex items-center gap-[6px]"
            style={{ fontSize:"0.65rem", letterSpacing:"2px", textTransform:"uppercase", color:"#7a7060" }}>
            <span>Powered by</span>
            <a href="https://instagram.com/doquad.in" target="_blank" rel="noopener noreferrer"
              className="no-underline transition-colors duration-300 hover:text-[#c9a84c]"
              style={{ color:"#7a7060", fontSize:"0.65rem", letterSpacing:"2px", textTransform:"uppercase" }}>
              doquad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────
//  SCROLL TO TOP HELPER
// ─────────────────────────────────────────────
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is fully rendered/ready before querying the element
      const t = setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(t);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// ─────────────────────────────────────────────
//  ROOT
// ─────────────────────────────────────────────
export default function App() {
  const [entered, setEntered] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = BASE_STYLES;
    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
  }, []);

  const handleDone = () => {
    setEntered(true);
    setTimeout(() => setLoaderVisible(false), 900);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen" style={{ background:"#0a0804" }}>
        {entered && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
            transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}>
            <Routes>
              <Route path="/" element={<MainApp />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/attestation" element={<Attestation />} />
              <Route path="/visa-assistance" element={<VisaAssistance />} />
              <Route path="/flight-booking" element={<FlightBooking />} />
              <Route path="/hotel-reservation" element={<HotelReservation />} />
              <Route path="/doc-stamping" element={<DocStamping />} />
            </Routes>
          </motion.div>
        )}
        <AnimatePresence>
          {loaderVisible && (
            <motion.div key="loader" className="fixed inset-0 z-[9000]"
              exit={{ opacity:0 }} transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}>
              <HotlineLoader onDone={handleDone} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}