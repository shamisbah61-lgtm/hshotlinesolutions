import { Link } from "react-router-dom";

export default function SubpageFooter() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.12)] pt-8 pb-6 px-4 sm:px-10 lg:px-[60px]"
      style={{ background: "#0a0804" }}>
      <Link to="/" className="no-underline leading-none flex justify-center mb-7">
        <img src="/images/footer.png" alt="Hotline Solution"
          className="block object-contain h-auto" style={{ width: "clamp(160px,40vw,280px)" }} />
      </Link>
      
      {/* Gold line divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,#c9a84c,transparent)", opacity: .35 }} />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-5">
        <div className="f-dm flex flex-wrap justify-center sm:justify-start items-center gap-[6px]"
          style={{ fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase", color: "#7a7060" }}>
          <span>© 2026</span>
          <a href="https://instagram.com/hotlinesolutions" target="_blank" rel="noopener noreferrer"
            className="no-underline transition-colors duration-300 hover:text-[#c9a84c]"
            style={{ color: "#7a7060", fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            hotlinesolutions
          </a>
          <span>. All rights reserved.</span>
        </div>
        <div className="f-dm flex items-center gap-[6px]"
          style={{ fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase", color: "#7a7060" }}>
          <span>Powered by</span>
          <a href="https://instagram.com/doquad.in" target="_blank" rel="noopener noreferrer"
            className="no-underline transition-colors duration-300 hover:text-[#c9a84c]"
            style={{ color: "#7a7060", fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase" }}>
            doquad
          </a>
        </div>
      </div>
    </footer>
  );
}
