import { motion } from "framer-motion";
import { Award, UserCheck, ShieldAlert, CheckCircle, FileSignature, Briefcase, Landmark } from "lucide-react";
import Cursor from "./Cursor";
import SubpageNav from "./SubpageNav";
import SubpageFooter from "./SubpageFooter";

const WA_PHONE = "918086612704";
const WA_URL = `https://wa.me/${WA_PHONE}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20Document%20Attestation%20services.`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Attestation() {
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
          <source src="/video/attestation.mp4" type="video/mp4" />
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
              Embassy & MEA Verified
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h1 className="f-bebas leading-[0.9] mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
              DOCUMENT <span className="text-stroke-gold">ATTESTATION</span>
            </h1>
            <p className="f-cormorant italic max-w-2xl mx-auto leading-[1.8]"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", color: "rgba(245,240,232,0.7)" }}>
              Premium certification and legal authentication services for educational, commercial, and personal documents. Rapid apostille and embassy attestation processed with absolute integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ATTESTATION CATEGORIES ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-16" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="f-bebas text-[2.5rem] tracking-[1px] text-white">Document Classification</h2>
            <div style={{ width: 60, height: 1, background: "#c9a84c", margin: "16px auto 0" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Educational */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Award className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Educational Documents</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Attest high school certificates, bachelor/master degrees, diplomas, and transcripts for international work permits and study visas.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> HRD Attestation / Norka
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> MEA (Ministry of External Affairs)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> Embassy Verification
                </li>
              </ul>
            </motion.div>

            {/* Non-Educational (Personal) */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <UserCheck className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Personal Documents</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Verification of marriage certificates, birth certificates, power of attorney, and police clearance records (PCC) for family residency.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> State Home Department
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> SDM (Sub-Divisional Magistrate)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> Apostille / Legalization
                </li>
              </ul>
            </motion.div>

            {/* Commercial */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Briefcase className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Commercial Documents</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Attest legal corporate documents, certificates of incorporation, partnership deeds, exports invoices, and trademark registration files.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> Chamber of Commerce
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> Ministry of External Affairs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-[#c9a84c]" /> Destination Country Embassy
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ATTESTATION PROCESS PIPELINE ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20" style={{ background: "#0a0804" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="f-dm flex items-center gap-4 mb-5"
              style={{ fontSize: "0.62rem", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
              Legalization Pipeline
            </div>
            <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] leading-[0.9] mb-6">
              Apostille & <br />
              <span className="text-stroke-gold">Legalization</span>
            </h2>
            <p className="f-cormorant italic leading-[1.8] text-[1.15rem] text-[#7a7060] mb-8">
              Apostille is required for travel to Hague Convention countries (like Germany, Italy, Oman, UK). Other countries require explicit Embassy Attestation. We handle both lanes with official authorized procedures.
            </p>
            <a href={WA_URL} target="_blank" rel="noreferrer"
              className="f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] transition-all duration-300 hover:opacity-85 text-center"
              style={{ background: "linear-gradient(135deg,#e8c97a,#c9a84c)", color: "#0a0804", fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase" }}>
              Inquire About Attestation
            </a>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { num: "01", title: "Document Receipt & Vetting", desc: "Our attestation specialists check your papers for initial authentication markers to make sure they're valid." },
              { num: "02", title: "State Department / Norka Approval", desc: "Submission to the designated state departments (Home Department, Norka, HRD) for local authentication." },
              { num: "03", title: "Ministry of External Affairs (MEA)", desc: "Submission to the MEA for central government stamp verification and apostille authentication." },
              { num: "04", title: "Embassy Legalization", desc: "Submission to the respective destination country embassy for final seal and legalization stamps." }
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

      {/* ── SERVICE FEATURES ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <div className="f-dm flex items-center justify-center gap-4 mb-5"
            style={{ fontSize: "0.62rem", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            Safety & Assurance
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
          </div>
          <h2 className="f-bebas text-[3rem] sm:text-[4rem] text-white">
            Secure Document <span className="text-stroke-gold">Handling</span>
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ShieldAlert, title: "Loss-Prevention Vault", desc: "All original credentials are kept inside fireproof high-security vaults. We ensure zero document misplacement during the transit process." },
            { icon: FileSignature, title: "End-to-End Tracking", desc: "Receive immediate milestone notifications. Know exactly when your certificate hits MEA, State HRD, or the Embassy." },
            { icon: Landmark, title: "Official Partners Only", desc: "We direct all logistics strictly through verified government submission channels. No third-party brokers handle your documents." }
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
              Fast Legalization <span className="text-stroke-gold">Desk</span>
            </h2>
            <p className="f-cormorant italic text-[1.1rem] sm:text-[1.25rem] text-[#7a7060] mb-8 leading-[1.8] max-w-xl mx-auto">
              Ready to submit educational, personal, or corporate documents? Get in touch with our attestation specialists for pricing details, requirements, and express service schedules.
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
