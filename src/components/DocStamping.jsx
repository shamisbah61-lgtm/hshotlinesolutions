import { motion } from "framer-motion";
import { FileText, ShieldAlert, Award, CheckSquare, Stamp, FileCheck, FileSignature, Landmark } from "lucide-react";
import Cursor from "./Cursor";
import SubpageNav from "./SubpageNav";
import SubpageFooter from "./SubpageFooter";

const WA_PHONE = "918086612704";
const WA_URL = `https://wa.me/${WA_PHONE}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20Document%20Stamping%20services.`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function DocStamping() {
  return (
    <div className="overflow-x-hidden min-h-screen" style={{ background: "#0a0804", color: "#f5f0e8" }}>
      <Cursor />
      <SubpageNav />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden flex items-center justify-center pt-32 pb-20 px-4 text-center"
        style={{ minHeight: "60vh" }}>
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/video/docstamp.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 z-10" style={{ background: "rgba(10, 8, 4, 0.65)" }} />
        
        <div className="relative z-20 max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="f-dm flex items-center justify-center gap-4 mb-5"
              style={{ fontSize: "0.62rem", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
              Verified & Secure Stamping
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h1 className="f-bebas leading-[0.9] mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
              DOCUMENT <span className="text-stroke-gold">STAMPING</span>
            </h1>
            <p className="f-cormorant italic max-w-2xl mx-auto leading-[1.8]"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", color: "rgba(245,240,232,0.7)" }}>
              Official visa stamping, passport verification, and legal document submission support. Authorized processes executing secure legalization and consulate stamps with full tracking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE OVERVIEW / CORE OFFERINGS ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-16" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="f-bebas text-[2.5rem] tracking-[1px] text-white">Stamping Channels</h2>
            <div style={{ width: 60, height: 1, background: "#c9a84c", margin: "16px auto 0" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visa Stamping */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <FileCheck className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Visa Stamping</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Official stamping of family residency permits, work permits, and visit visas into passport booklets through consular channels.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> Saudi Embassy Visa Stamping
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> Kuwait Consulate Endorsement
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> Multi-Country Work Permit Vetting
                </li>
              </ul>
            </motion.div>

            {/* Passport Assistance */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <FileSignature className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Passport Assistance</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Assistance with new passport applications, renewals, ECR/ECNR status alterations, and emergency travel document submissions.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> E-Passport Renewal Support
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> Tatkaal Passport Processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> Address Change Verification
                </li>
              </ul>
            </motion.div>

            {/* Document Verification */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Landmark className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Consular Legalization</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Verification of powers of attorney, commercial business files, and death/birth registrations via local magistrate seals.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> MOFA (Ministry of Foreign Affairs)
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> Notary Public Verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare size={14} className="text-[#c9a84c]" /> Multi-agency Authentication
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS PIPELINE ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20" style={{ background: "#0a0804" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="f-dm flex items-center gap-4 mb-5"
              style={{ fontSize: "0.62rem", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
              Legalization Pipeline
            </div>
            <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] leading-[0.9] mb-6">
              Official Consular <br />
              <span className="text-stroke-gold">Verification</span>
            </h2>
            <p className="f-cormorant italic leading-[1.8] text-[1.15rem] text-[#7a7060] mb-8">
              We process visa stamping directly with registered consular agents, tracking your passport safely at every step to prevent security issues.
            </p>
            <a href={WA_URL} target="_blank" rel="noreferrer"
              className="f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] transition-all duration-300 hover:opacity-85 text-center"
              style={{ background: "linear-gradient(135deg,#e8c97a,#c9a84c)", color: "#0a0804", fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase" }}>
              Inquire Stamping
            </a>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { num: "01", title: "Document Review", desc: "Checking original passport booklet validity, empty visa sheets, and sponsor approvals." },
              { num: "02", title: "MOFA Registration", desc: "Uploading details and passport numbers to the official MOFA online directories." },
              { num: "03", title: "Consulate Drop-off", desc: "Submitting booklets through authorized channels directly to designated embassy vaults." },
              { num: "04", title: "Secure Handover", desc: "Auditing visa stamp details and delivering passport booklets via tracked courier services." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="flex gap-5 p-6 border-b border-[rgba(255,255,255,0.03)] last:border-0"
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <span className="f-bebas text-[1.8rem] text-[#c9a84c] leading-none">{step.num}</span>
                <div>
                  <h4 className="f-bebas text-[1.2rem] text-white tracking-[0.5px] mb-1">{step.title}</h4>
                  <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.6]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FEATURES / WHY CHOOSE US ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <div className="f-dm flex items-center justify-center gap-4 mb-5"
            style={{ fontSize: "0.62rem", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            Safety First
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
          </div>
          <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] text-white">
            Secure Stamping <span className="text-stroke-gold">Benefits</span>
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Stamp, title: "Consular Registration", desc: "We are officially registered with major consulates, executing direct submissions without middle brokers." },
            { icon: Award, title: "100% Legal Processes", desc: "No unofficial shortcuts. Every single endorsement is verified against current embassy guidelines." },
            { icon: ShieldAlert, title: "Secure Transit Vaults", desc: "All original booklets are dispatched inside weather-proof, locked cases via insured transit routes." }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i} 
                className="p-8 border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.3)] transition-all duration-300 bg-[#0a0804]"
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <div className="w-[52px] h-[52px] flex items-center justify-center mb-6" style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.03)" }}>
                  <Icon color="#c9a84c" size={24} />
                </div>
                <h3 className="f-bebas text-[1.5rem] tracking-[1px] mb-3 text-white">{item.title}</h3>
                <p className="f-dm leading-[1.8] text-[0.82rem] text-[#7a7060]">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT CTA SECTION ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20 text-center relative overflow-hidden" style={{ background: "#0a0804" }}>
        <div className="absolute rounded-full pointer-events-none"
          style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle,rgba(201,168,76,0.05) 0%,transparent 70%)" }} />
        
        <div className="relative z-10 max-w-[800px] mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] mb-4 text-white">
              Launch Visa <span className="text-stroke-gold">Endorsement</span>
            </h2>
            <p className="f-cormorant italic text-[1.1rem] sm:text-[1.25rem] text-[#7a7060] mb-8 leading-[1.8] max-w-xl mx-auto">
              Ready to submit your passport booklet for visa stamping? Contact our processing specialists today for timeline and pricing details.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={WA_URL} target="_blank" rel="noreferrer"
                className="f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                style={{ background: "#25D366", fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase" }}>
                WhatsApp Us
              </a>
              <a href="tel:+918086612704"
                className="f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] transition-opacity duration-300 hover:opacity-80 border border-[#c9a84c] text-[#c9a84c]"
                style={{ fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase", background: "transparent" }}>
                Call Helpline
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SubpageFooter />
    </div>
  );
}
