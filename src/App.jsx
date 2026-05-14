import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane, BadgeCheck, Hotel, FileText, Stamp, Wallet, Star,
} from "lucide-react";

// ─────────────────────────────────────────────
//  CONSTANTS
// ─────────────────────────────────────────────
const PHONE  = "918086612704";
const WA_URL = `https://wa.me/${PHONE}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services.`;

const services = [
  { icon: Plane,      num: "01", title: "Flight Booking",    desc: "International and domestic flight arrangements with smooth, end-to-end travel planning." },
  { icon: BadgeCheck, num: "02", title: "Visa Assistance",   desc: "Professional support for tourist, work, and business visa processing worldwide." },
  { icon: Hotel,      num: "03", title: "Hotel Reservation", desc: "Luxury and budget-friendly hotel stays curated across global destinations." },
  { icon: FileText,   num: "04", title: "Attestation",       desc: "Secure and verified document attestation services for international use." },
  { icon: Stamp,      num: "05", title: "Doc Stamping",      desc: "Reliable stamping and document processing services handled professionally." },
  { icon: Wallet,     num: "06", title: "Forex Services",    desc: "Safe and trusted foreign exchange assistance for all categories of travelers." },
];

const marqueeItems = [
  "Flight Booking","Visa Assistance","Hotel Reservations",
  "Document Attestation","Forex Services","Document Stamping",
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800", label: "EUROPE",      tall: true },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600", label: "ASIA" },
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600", label: "OCEANIA" },
  { src: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600", label: "MIDDLE EAST" },
  { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600", label: "AMERICAS" },
];

const testimonials = [
  { name: "Rahul Menon",    role: "Business Traveler",  rating: 5, text: "Exceptional service! My visa was processed faster than expected and the team was incredibly helpful throughout." },
  { name: "Priya Nair",     role: "Family Vacation",    rating: 5, text: "Booked flights and hotels through Hotlinesolution — everything was seamless. Highly recommend to anyone travelling abroad." },
  { name: "Arun Kumar",     role: "Work Permit Client", rating: 5, text: "The attestation and stamping was handled professionally with zero stress on my end. Will definitely use again." },
  { name: "Fathima Sherif", role: "Tourist Visa",       rating: 5, text: "Got my Schengen visa approved on the first attempt. Their guidance made the whole process so easy." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const NAV_LINKS = [
  { label: "Home",     href: "#home"     },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

// ─────────────────────────────────────────────
//  LOADER STYLES  (no font animation, no button)
// ─────────────────────────────────────────────
const loaderStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

  html, body { background: #0a0804 !important; margin: 0; padding: 0; }

  .hl-loader {
    position: fixed; inset: 0; z-index: 9000;
    background: #0a0804;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    overflow: hidden;
  }
  .hl-loader-bg-glow {
    position: absolute; width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none;
  }
  .hl-loader-noise {
    position: absolute; inset: 0; pointer-events: none; opacity: 0.4;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  }
  .hl-loader-tag {
    font-family: 'DM Sans', sans-serif; font-size: 0.6rem;
    letter-spacing: 8px; text-transform: uppercase;
    color: rgba(201,168,76,0.5);
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 40px; opacity: 0;
    animation: hlFadeUp 0.8s ease 0.3s forwards;
  }
  .hl-loader-tag-line { width: 28px; height: 1px; background: #c9a84c; display: block; }

  /* Logo image fades in */
  .hl-loader-logo {
    opacity: 0;
    animation: hlFadeUp 0.8s ease 0.6s forwards;
    width: min(280px, 60vw);
  }

  .hl-loader-sub {
    font-family: 'DM Sans', sans-serif; font-size: 0.62rem;
    letter-spacing: 6px; text-transform: uppercase;
    color: rgba(201,168,76,0.4); margin-top: 32px;
    opacity: 0; animation: hlFadeUp 0.8s ease 1.0s forwards;
  }


  @keyframes hlFadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --gold: #c9a84c; --gold-light: #e8c97a; --gold-dim: #8a6d2f;
    --cream: #f5f0e8; --dark: #0a0804; --dark2: #110f08;
    --mid: #1e1a10; --text-muted: #7a7060; --wa: #25D366;
  }
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html, body { background:#0a0804 !important; }
  html { scroll-behavior: smooth; }
  body { background:var(--dark); color:var(--cream); font-family:'DM Sans',sans-serif; overflow-x:hidden; }
  body::before {
    content:''; position:fixed; inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events:none; z-index:0; opacity:0.4;
  }
  @media (pointer:fine)  { body { cursor:none; } .hl-cursor,.hl-ring { display:block; } }
  @media (pointer:coarse){ body { cursor:auto; } .hl-cursor,.hl-ring { display:none !important; } }
  .hl-cursor { width:12px; height:12px; background:var(--gold); border-radius:50%; position:fixed; top:0; left:0; pointer-events:none; z-index:9999; transform:translate(-50%,-50%); mix-blend-mode:difference; }
  .hl-ring   { width:40px; height:40px; border:1px solid var(--gold); border-radius:50%; position:fixed; top:0; left:0; pointer-events:none; z-index:9998; transform:translate(-50%,-50%); opacity:0.6; }
  section[id] { scroll-margin-top:72px; }
  .hero-line { position:absolute; background:linear-gradient(90deg,transparent,var(--gold),transparent); height:1px; opacity:0; animation:lineSweep 6s ease infinite; }
  .hero-line:nth-child(1){ top:25%; width:40%; left:-40%; animation-delay:0s; }
  .hero-line:nth-child(2){ top:55%; width:60%; left:-60%; animation-delay:2s; }
  .hero-line:nth-child(3){ top:75%; width:30%; left:-30%; animation-delay:4s; }
  @keyframes lineSweep { 0%{opacity:0;transform:translateX(0)} 20%{opacity:.5} 80%{opacity:.2} 100%{opacity:0;transform:translateX(200vw)} }
  .scroll-line { width:1px; height:60px; background:linear-gradient(to bottom,var(--gold),transparent); animation:scrollPulse 2s ease infinite; }
  @keyframes scrollPulse { 0%,100%{opacity:.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.2)} }
  .marquee-track { display:flex; animation:marquee 22s linear infinite; white-space:nowrap; }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .nav-root { position:fixed; top:0; width:100%; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:0 60px; height:68px; background:rgba(10,8,4,0.72); backdrop-filter:blur(18px) saturate(1.4); -webkit-backdrop-filter:blur(18px) saturate(1.4); border-bottom:1px solid rgba(201,168,76,0.08); transition:background .4s,border-color .4s; }
  .nav-root.scrolled { background:rgba(10,8,4,0.92); border-bottom-color:rgba(201,168,76,0.14); }
  @media(max-width:1024px){ .nav-root{padding:0 40px;} }
  @media(max-width:600px) { .nav-root{padding:0 20px;height:60px;} }
  .nav-logo img { width:108px; height:auto; display:block; object-fit:contain; }
  @media(max-width:600px){ .nav-logo img{width:90px;} }
  .nav-links-desktop { display:flex; align-items:center; gap:40px; }
  .nav-link { font-size:.68rem; letter-spacing:3px; text-transform:uppercase; color:rgba(245,240,232,0.6); text-decoration:none; position:relative; padding-bottom:2px; transition:color .3s; }
  .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:var(--gold); transition:width .35s cubic-bezier(0.22,1,0.36,1); }
  .nav-link:hover { color:var(--gold-light); }
  .nav-link:hover::after { width:100%; }
  @media(max-width:768px){ .nav-links-desktop{display:none;} }
  .hamburger { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:6px; z-index:300; }
  .hamburger span { display:block; width:24px; height:1.5px; background:rgba(245,240,232,0.75); border-radius:2px; transition:all .35s cubic-bezier(0.22,1,0.36,1); transform-origin:center; }
  .hamburger.open span:nth-child(1){ transform:translateY(6.5px) rotate(45deg); }
  .hamburger.open span:nth-child(2){ opacity:0; transform:scaleX(0); }
  .hamburger.open span:nth-child(3){ transform:translateY(-6.5px) rotate(-45deg); }
  @media(max-width:768px){ .hamburger{display:flex;} }
  .nav-drawer-mobile { position:fixed; top:60px; left:0; right:0; z-index:190; display:flex; flex-direction:column; padding:20px 24px 24px; background:rgba(10,8,4,0.96); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border-bottom:1px solid rgba(201,168,76,0.18); gap:0; }
  .nav-drawer-mobile .nav-link { font-size:.75rem; letter-spacing:4px; color:rgba(245,240,232,0.65); padding:14px 0; border-bottom:1px solid rgba(255,255,255,0.05); width:100%; }
  .nav-drawer-mobile .nav-link:last-child { border-bottom:none; }
  .service-card { background:var(--mid); padding:48px 40px; position:relative; overflow:hidden; transition:background .5s; }
  .service-card::before { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(201,168,76,.05),transparent); opacity:0; transition:opacity .5s; }
  .service-card:hover { background:#16130a; }
  .service-card:hover::before { opacity:1; }
  .service-card:hover .svc-icon-wrap { border-color:var(--gold)!important; background:rgba(201,168,76,.1)!important; }
  .service-card:hover .svc-num { color:rgba(201,168,76,.12)!important; }
  .service-card:hover .svc-arrow { width:64px!important; }
  .svc-icon-wrap { width:56px; height:56px; border:1px solid rgba(201,168,76,.3); display:flex; align-items:center; justify-content:center; margin-bottom:32px; transition:border-color .3s,background .3s; }
  .svc-arrow { margin-top:32px; width:32px; height:1px; background:var(--gold-dim); position:relative; transition:width .4s; }
  .svc-arrow::after { content:''; position:absolute; right:0; top:-3px; width:7px; height:7px; border-right:1px solid var(--gold-dim); border-top:1px solid var(--gold-dim); transform:rotate(45deg); }
  .gallery-item { overflow:hidden; position:relative; background:var(--mid); }
  .gallery-item img { width:100%; height:100%; object-fit:cover; filter:brightness(.75) saturate(.8); transition:all .8s ease; }
  .gallery-item:hover img { transform:scale(1.08); filter:brightness(.9) saturate(1); }
  .gallery-overlay { position:absolute; bottom:0; left:0; right:0; padding:24px; background:linear-gradient(transparent,rgba(10,8,4,.8)); transform:translateY(100%); transition:transform .4s; }
  .gallery-item:hover .gallery-overlay { transform:translateY(0); }
  .contact-card { padding:24px 28px; border:1px solid rgba(201,168,76,.15); position:relative; overflow:hidden; transition:border-color .3s; }
  .contact-card::before { content:''; position:absolute; top:0; left:0; width:3px; height:0; background:var(--gold); transition:height .4s; }
  .contact-card:hover { border-color:rgba(201,168,76,.4); }
  .contact-card:hover::before { height:100%; }
  .loc-card-inner { display:flex; align-items:center; gap:20px; width:100%; }
  .loc-text { flex:1; min-width:0; display:flex; flex-direction:column; gap:6px; }
  .loc-map { width:160px; min-width:160px; height:96px; border-radius:10px; overflow:hidden; border:1px solid rgba(201,168,76,.18); flex-shrink:0; }
  .loc-map iframe { width:100%; height:100%; border:none; filter:grayscale(1) brightness(.85); display:block; }
  @media(max-width:480px){ .loc-map{width:120px;min-width:120px;height:80px;} }
  .btn-primary { background:linear-gradient(135deg,var(--gold-light),var(--gold)); color:var(--dark); padding:16px 36px; font-family:'DM Sans',sans-serif; font-size:.75rem; letter-spacing:3px; text-transform:uppercase; border:none; cursor:pointer; font-weight:500; clip-path:polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%); transition:opacity .3s; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; }
  .btn-primary:hover { opacity:.85; }
  .btn-whatsapp { display:inline-flex; align-items:center; justify-content:center; gap:10px; background:var(--wa); color:#fff; padding:16px 36px; font-family:'DM Sans',sans-serif; font-size:.75rem; letter-spacing:3px; text-transform:uppercase; font-weight:500; border:none; cursor:pointer; text-decoration:none; clip-path:polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%); transition:opacity .3s,transform .2s; white-space:nowrap; }
  .btn-whatsapp:hover { opacity:.9; transform:scale(1.02); }
  .testi-card { background:var(--mid); border:1px solid rgba(201,168,76,.1); padding:40px 36px; position:relative; overflow:hidden; transition:border-color .4s,transform .4s; }
  .testi-card::before { content:''; position:absolute; top:0; left:0; width:100%; height:2px; background:linear-gradient(90deg,transparent,var(--gold),transparent); opacity:0; transition:opacity .4s; }
  .testi-card:hover { border-color:rgba(201,168,76,.3); transform:translateY(-4px); }
  .testi-card:hover::before { opacity:1; }
  .star-filled { color:var(--gold); }
  .footer-link { font-size:.7rem; letter-spacing:2px; text-transform:uppercase; color:var(--text-muted); text-decoration:none; transition:color .3s; }
  .footer-link:hover { color:var(--gold); }
  .gold-div { height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); opacity:.4; }
  .sp { padding:140px 60px; }
  @media(max-width:1024px){ .sp{padding:100px 40px;} }
  @media(max-width:600px) { .sp{padding:72px 20px;} }
  .hero-inner { position:relative; z-index:2; padding:0 60px; max-width:1400px; margin:0 auto; width:100%; }
  @media(max-width:1024px){ .hero-inner{padding:0 40px;} }
  @media(max-width:600px) { .hero-inner{padding:0 20px;} }
  .hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(4rem,13vw,14rem); line-height:.88; letter-spacing:2px; }
  .hero-t2 { display:block; margin-left:clamp(0px,5vw,80px); -webkit-text-stroke:1px var(--gold-dim); color:transparent; }
  .hero-t3 { display:block; background:linear-gradient(135deg,var(--gold-light),var(--gold)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .hero-stats { position:absolute; bottom:60px; right:60px; display:flex; gap:48px; }
  @media(max-width:1024px){ .hero-stats{right:40px;bottom:40px;gap:32px;} }
  @media(max-width:600px) { .hero-stats{flex-wrap:wrap;gap:16px;bottom:20px;right:16px;left:16px;justify-content:flex-end;} .stat-n{font-size:2rem!important;} }
  .scroll-ind { position:absolute; bottom:60px; left:60px; display:flex; flex-direction:column; align-items:center; gap:8px; }
  @media(max-width:1024px){ .scroll-ind{left:40px;bottom:40px;} }
  @media(max-width:600px) { .scroll-ind{display:none;} }
  .hero-cta { margin-top:40px; display:flex; gap:20px; align-items:center; flex-wrap:wrap; }
  @media(max-width:480px){ .hero-cta{flex-direction:column;align-items:flex-start;} }
  .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; max-width:1400px; margin:0 auto; }
  @media(max-width:900px){ .about-grid{grid-template-columns:1fr;gap:48px;} }
  .about-right { padding-left:40px; border-left:1px solid rgba(201,168,76,.2); }
  @media(max-width:900px){ .about-right{padding-left:0;border-left:none;border-top:1px solid rgba(201,168,76,.2);padding-top:40px;} }
  .services-grid { max-width:1400px; margin:0 auto; display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
  @media(max-width:900px){ .services-grid{grid-template-columns:repeat(2,1fr);} }
  @media(max-width:560px){ .services-grid{grid-template-columns:1fr;} .service-card{padding:36px 24px;} }
  .gallery-grid { display:grid; grid-template-columns:1.5fr 1fr 1fr; grid-template-rows:320px 240px; gap:12px; }
  @media(max-width:900px){ .gallery-grid{grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,240px);} .gallery-tall{grid-row:auto!important;} }
  @media(max-width:560px){ .gallery-grid{grid-template-columns:1fr;grid-template-rows:repeat(5,220px);} }
  .contact-grid { max-width:1400px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
  @media(max-width:900px){ .contact-grid{grid-template-columns:1fr;gap:48px;} }
  .cta-row { display:flex; gap:16px; margin-top:24px; flex-wrap:wrap; }
  @media(max-width:480px){ .cta-row{flex-direction:column;} .btn-primary,.btn-whatsapp{width:100%;padding:18px 24px;clip-path:none;border-radius:4px;} }
  .testi-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; max-width:1400px; margin:0 auto; }
  @media(max-width:700px){ .testi-grid{grid-template-columns:1fr;} }
  .footer-inner { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; }
  @media(max-width:600px){ .footer-inner{flex-direction:column;align-items:center;gap:10px;} .footer-inner>*{width:100%;display:flex;align-items:center;justify-content:center;} .footer-copy-row{flex-wrap:wrap;gap:4px;line-height:1.8;justify-content:center;} }
  .svc-hdr { max-width:1400px; margin:0 auto 80px; }
  @media(max-width:600px){ .svc-hdr{margin-bottom:48px;} }
`;

// ─────────────────────────────────────────────
//  WHATSAPP ICON
// ─────────────────────────────────────────────
const WaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.847L.057 23.492a.75.75 0 00.92.921l5.757-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.026-1.382l-.36-.214-3.733.977.999-3.648-.235-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

// ─────────────────────────────────────────────
//  LOADER COMPONENT  — auto-exits after ~2.5s
// ─────────────────────────────────────────────
function HotlineLoader({ onDone }) {
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = loaderStyles;
    document.head.appendChild(styleEl);

    const timer = setTimeout(onDone, 2500);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(styleEl);
    };
  }, [onDone]);

  return (
    <div className="hl-loader">
      <div className="hl-loader-bg-glow" />
      <div className="hl-loader-noise" />

      {/* Tag line */}
      <div className="hl-loader-tag">
        <span className="hl-loader-tag-line" />
        Premium Travel Consultancy
        <span className="hl-loader-tag-line" />
      </div>

      {/* Logo image — replaces the SVG text animation */}
      <img
        className="hl-loader-logo"
        src="/images/hsbglogoo.png"
        alt="Hotline Solution"
      />

      <p className="hl-loader-sub">Trusted Travel Solutions</p>


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
  const rafRef    = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = cssStyles;
    document.head.appendChild(styleEl);

    const onMove = (e) => {
      mx.current = e.clientX; my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + "px";
        ringRef.current.style.top  = ry.current + "px";
      }
      rafRef.current = requestAnimationFrame(animRing);
    };
    animRing();

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
      document.head.removeChild(styleEl);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const sectionLabel = (text) => (
    <div style={{ fontSize:"0.65rem", letterSpacing:"6px", textTransform:"uppercase", color:"var(--gold)", display:"flex", alignItems:"center", gap:"16px", marginBottom:"24px" }}>
      <span style={{ width:30, height:1, background:"var(--gold)", display:"block", flexShrink:0 }} />
      {text}
    </div>
  );

  return (
    <div style={{ background:"var(--dark)", color:"var(--cream)", overflowX:"hidden" }}>
      <div className="hl-cursor" ref={cursorRef} />
      <div className="hl-ring"   ref={ringRef}   />

      {/* NAV */}
      <motion.nav
        className={`nav-root${scrolled ? " scrolled" : ""}`}
        initial={{ opacity:0, y:-16 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
      >
        <a href="#home" className="nav-logo" style={{ textDecoration:"none", lineHeight:0 }}>
          <img src="/images/hsbglogoo.png" alt="Hotline Solution" />
        </a>
        <div className="nav-links-desktop">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </div>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span /><span /><span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-drawer-mobile"
            initial={{ opacity:0, y:-12 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-8 }}
            transition={{ duration:0.28, ease:[0.22,1,0.36,1] }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="home" style={{ height:"100vh", position:"relative", display:"flex", alignItems:"center", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%), linear-gradient(135deg, #0a0804 0%, #110f08 50%, #0d0b06 100%)" }} />
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
          <div className="hero-line" /><div className="hero-line" /><div className="hero-line" />
        </div>
        <div className="hero-inner">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5, duration:1 }}
            style={{ fontSize:"0.7rem", letterSpacing:"6px", textTransform:"uppercase", color:"var(--gold)", display:"flex", alignItems:"center", gap:"16px", marginBottom:"28px" }}
          >
            <span style={{ width:40, height:1, background:"var(--gold)", display:"block", flexShrink:0 }} />
            Premium Travel Consultancy
          </motion.div>
          <motion.h1 className="hero-title"
            initial={{ opacity:0, y:70 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.7, duration:1.2, ease:[0.22,1,0.36,1] }}
          >
            <span style={{ display:"block" }}>GLOBAL</span>
            <span className="hero-t2">TRAVEL</span>
            <span className="hero-t3">EXPERTS</span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.1, duration:1 }}
            style={{ marginTop:"36px", maxWidth:"480px", fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(0.95rem,1.5vw,1.1rem)", lineHeight:1.8, color:"rgba(245,240,232,0.6)", fontStyle:"italic" }}
          >
            Premium consultancy delivering trusted flight, visa, hotel, attestation,
            stamping &amp; forex services for clients worldwide since 2024.
          </motion.p>
          <motion.div className="hero-cta" initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.3, duration:1 }}>
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#about" style={{ color:"var(--cream)", fontFamily:"'DM Sans',sans-serif", fontSize:".75rem", letterSpacing:"3px", textTransform:"uppercase", background:"none", border:"none", cursor:"pointer", opacity:.6, display:"inline-flex", alignItems:"center", gap:"10px", textDecoration:"none" }}>
              Discover More →
            </a>
          </motion.div>
        </div>
        <motion.div className="hero-stats"
          initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.5, duration:1 }}
        >
          {[["100+","Happy Clients"],["6+","Services"],["2024","Founded"]].map(([num, label]) => (
            <div key={label} style={{ textAlign:"right" }}>
              <div className="stat-n" style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"3rem", color:"var(--gold)", lineHeight:1 }}>{num}</div>
              <div style={{ fontSize:".65rem", letterSpacing:"3px", textTransform:"uppercase", color:"var(--text-muted)", marginTop:"4px" }}>{label}</div>
            </div>
          ))}
        </motion.div>
        <motion.div className="scroll-ind" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8, duration:1 }}>
          <div className="scroll-line" />
          <span style={{ fontSize:".6rem", letterSpacing:"4px", textTransform:"uppercase", color:"var(--text-muted)", writingMode:"vertical-rl" }}>Scroll</span>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div style={{ background:"var(--gold)", overflow:"hidden", padding:"14px 0" }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.1rem", letterSpacing:"4px", color:"var(--dark)", padding:"0 48px", display:"inline-flex", alignItems:"center", gap:"24px" }}>
              {item}<span style={{ width:6, height:6, background:"var(--dark)", borderRadius:"50%", opacity:.4, display:"inline-block", flexShrink:0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="sp" style={{ background:"var(--dark2)" }}>
        <div className="about-grid">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            {sectionLabel("About Us")}
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(3rem,7vw,7rem)", lineHeight:.9 }}>
              Trusted<br />
              <span style={{ WebkitTextStroke:"1px var(--gold-dim)", color:"transparent" }}>Travel</span><br />
              Solutions
            </h2>
          </motion.div>
          <motion.div className="about-right" variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1rem,1.5vw,1.2rem)", lineHeight:1.9, color:"rgba(245,240,232,.65)", fontStyle:"italic", marginBottom:"40px" }}>
              We provide seamless international travel support with professional consultancy and premium customer experience.
              From flights and visas to forex and document processing — global travel made simple, secure, and stress-free.
            </p>
            <div>
              {["Fast & Reliable Processing","Expert Visa Consultants","Trusted by 100+ Clients","End-to-End Travel Support"].map((f, i) => (
                <div key={f} style={{ display:"flex", alignItems:"center", gap:"16px", padding:"16px 0", borderBottom:"1px solid rgba(255,255,255,.05)" }}>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.2rem", color:"var(--gold-dim)", minWidth:"40px" }}>0{i+1}</span>
                  <span style={{ fontSize:".8rem", letterSpacing:"2px", textTransform:"uppercase", opacity:.8 }}>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="gold-div" />

      {/* SERVICES */}
      <section id="services" className="sp" style={{ background:"var(--dark)" }}>
        <motion.div className="svc-hdr" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
          {sectionLabel("What We Offer")}
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(3rem,8vw,8rem)", lineHeight:.88 }}>
            Premium<br /><span style={{ WebkitTextStroke:"1px var(--gold-dim)", color:"transparent" }}>Services</span>
          </h2>
        </motion.div>
        <div className="services-grid">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} className="service-card" variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once:true }}>
                <div className="svc-icon-wrap"><Icon color="var(--gold)" size={26} /></div>
                <div className="svc-num" style={{ position:"absolute", top:"32px", right:"32px", fontFamily:"'Bebas Neue',sans-serif", fontSize:"3.5rem", color:"rgba(201,168,76,.06)", lineHeight:1, transition:"color .3s" }}>{s.num}</div>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.8rem", letterSpacing:"1px", marginBottom:"16px" }}>{s.title}</div>
                <p style={{ fontSize:".85rem", lineHeight:1.8, color:"var(--text-muted)" }}>{s.desc}</p>
                <div className="svc-arrow" />
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="gold-div" />

      {/* GALLERY */}
      <section className="sp" style={{ background:"var(--dark2)" }}>
        <div style={{ maxWidth:"1400px", margin:"0 auto" }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }} style={{ marginBottom:"60px" }}>
            {sectionLabel("Global Destinations")}
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(3rem,7vw,7rem)", lineHeight:.88 }}>
              Explore<br /><span style={{ WebkitTextStroke:"1px var(--gold-dim)", color:"transparent" }}>The World</span>
            </h2>
          </motion.div>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <motion.div key={i} className={`gallery-item${img.tall ? " gallery-tall" : ""}`}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once:true }}
                style={img.tall ? { gridRow:"1 / 3" } : {}}
              >
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className="gallery-overlay">
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.2rem", letterSpacing:"3px", color:"var(--gold)" }}>{img.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-div" />

      {/* TESTIMONIALS */}
      <section className="sp" style={{ background:"var(--dark)" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}
          style={{ maxWidth:"1400px", margin:"0 auto 64px" }}
        >
          {sectionLabel("Client Feedback")}
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(3rem,7vw,7rem)", lineHeight:.88 }}>
            What Our<br /><span style={{ WebkitTextStroke:"1px var(--gold-dim)", color:"transparent" }}>Clients Say</span>
          </h2>
        </motion.div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <motion.div key={i} className="testi-card"
              variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once:true }}
            >
              <div style={{ display:"flex", gap:"4px", marginBottom:"20px" }}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={16} className="star-filled" fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1rem,1.3vw,1.15rem)", lineHeight:1.8, color:"rgba(245,240,232,.75)", fontStyle:"italic", marginBottom:"28px" }}>
                "{t.text}"
              </p>
              <div style={{ width:"40px", height:"1px", background:"var(--gold-dim)", marginBottom:"20px" }} />
              <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
                <div style={{ width:"42px", height:"42px", borderRadius:"50%", background:"rgba(201,168,76,.15)", border:"1px solid rgba(201,168,76,.3)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Bebas Neue',sans-serif", fontSize:"1.1rem", color:"var(--gold)", flexShrink:0 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"1rem", letterSpacing:"2px", color:"var(--cream)" }}>{t.name}</div>
                  <div style={{ fontSize:".65rem", letterSpacing:"3px", textTransform:"uppercase", color:"var(--text-muted)", marginTop:"2px" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="gold-div" />

      {/* CONTACT */}
      <section id="contact" className="sp" style={{ background:"var(--dark2)" }}>
        <div className="contact-grid">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once:true }}>
            {sectionLabel("Get In Touch")}
            <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(3rem,8vw,8rem)", lineHeight:0.88 }}>
              Start<br />Your<br /><span style={{ color:"var(--gold)" }}>Journey</span>
            </h2>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1rem,1.5vw,1.1rem)", color:"var(--text-muted)", fontStyle:"italic", marginTop:"24px", lineHeight:1.8 }}>
              Trusted by 100+ clients for premium travel and documentation services worldwide.
            </p>
          </motion.div>
          <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
            <motion.div className="contact-card" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <div style={{ fontSize:".65rem", letterSpacing:"4px", textTransform:"uppercase", color:"var(--gold)", marginBottom:"6px" }}>Phone / WhatsApp</div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", color:"var(--cream)" }}>+91 80866 12704</div>
            </motion.div>
            <motion.div className="contact-card" variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <div style={{ fontSize:".65rem", letterSpacing:"4px", textTransform:"uppercase", color:"var(--gold)", marginBottom:"6px" }}>Email Address</div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", color:"var(--cream)" }}>hshotsolutions@gmail.com</div>
            </motion.div>
            <motion.div className="contact-card" variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <div className="loc-card-inner">
                <div className="loc-text">
                  <div style={{ fontSize:".65rem", letterSpacing:"4px", textTransform:"uppercase", color:"var(--gold)" }}>Office Location</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.15rem", color:"var(--cream)" }}>Tirur, Kerala, India</div>
                </div>
                <div className="loc-map">
                  <iframe
                    title="hotlinesolution Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.4271813746299!2d75.92048251466767!3d10.818035742410329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bb726cd66c27%3A0x1f6c2b724bde9e8e!2sHotline%20Travel%20Solutions!5e1!3m2!1sen!2sin!4v1778666605417!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div className="cta-row" variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <a href="mailto:hshotsolutions@gmail.com" className="btn-primary">Contact Now</a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-whatsapp">
                <WaIcon size={20} /> WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:"1px solid rgba(201,168,76,.15)", background:"var(--dark)", padding:"40px 60px 28px", textAlign:"center" }}>
        <style>{`@media(max-width:600px){footer{padding:28px 20px 20px!important;} .footer-logo{width:200px!important;}}`}</style>
        <a href="#home" style={{ textDecoration:"none", lineHeight:0, display:"flex", justifyContent:"center", marginBottom:"32px" }}>
          <img className="footer-logo" src="/images/footer.png" alt="Hotline Solution" style={{ width:"300px", height:"auto", display:"block", objectFit:"contain" }} />
        </a>
        <div className="gold-div" style={{ marginBottom:"24px" }} />
        <div className="footer-inner">
          {/* Left: copyright */}
          <div className="footer-copy-row" style={{ fontSize:".68rem", letterSpacing:"2px", textTransform:"uppercase", color:"var(--text-muted)", display:"flex", alignItems:"center", flexWrap:"wrap", gap:"4px" }}>
            <span>© 2026</span>
            <a href="https://instagram.com/hshotlinesolutions" target="_blank" rel="noopener noreferrer" className="footer-link">hshotlinesolutions</a>
            <span>. All rights reserved.</span>
          </div>
          {/* Right: powered by */}
          <div style={{ fontSize:".68rem", letterSpacing:"2px", textTransform:"uppercase", color:"var(--text-muted)", display:"flex", alignItems:"center", gap:"4px" }}>
            <span>Powered by</span>
            <a href="https://doquad.com" target="_blank" rel="noopener noreferrer" className="footer-link">doquad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────
//  ROOT — auto loader → main app (no white gap)
// ─────────────────────────────────────────────
export default function App() {
  const [entered, setEntered] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);

  // When loader finishes: show app immediately, fade loader out on top
  const handleDone = () => {
    setEntered(true);
    // Remove loader from DOM after fade completes
    setTimeout(() => setLoaderVisible(false), 900);
  };

  return (
    <div style={{ background: "#0a0804", minHeight: "100vh" }}>
      {/* App renders underneath immediately when entered */}
      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <MainApp />
        </motion.div>
      )}

      {/* Loader sits on top as a fixed overlay, fades out smoothly */}
      <AnimatePresence>
        {loaderVisible && (
          <motion.div
            key="loader"
            style={{ position: "fixed", inset: 0, zIndex: 9000 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <HotlineLoader onDone={handleDone} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}