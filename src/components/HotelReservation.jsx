import { motion } from "framer-motion";
import { Hotel, Compass, Award, ShieldAlert, Star, Bed, Key, Users } from "lucide-react";
import Cursor from "./Cursor";
import SubpageNav from "./SubpageNav";
import SubpageFooter from "./SubpageFooter";

const WA_PHONE = "918086612704";
const WA_URL = `https://wa.me/${WA_PHONE}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20Hotel%20Reservation%20services.`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HotelReservation() {
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
          <source src="/video/hotel.mp4" type="video/mp4" />
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
              Luxury Accommodation Handled
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h1 className="f-bebas leading-[0.9] mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
              HOTEL <span className="text-stroke-gold">RESERVATION</span>
            </h1>
            <p className="f-cormorant italic max-w-2xl mx-auto leading-[1.8]"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", color: "rgba(245,240,232,0.7)" }}>
              Customized hotel stays, luxury resorts, and corporate bookings arranged globally. Enjoy competitive rates, validated rooms, and seamless reservation support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE OVERVIEW / CORE OFFERINGS ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-16" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="f-bebas text-[2.5rem] tracking-[1px] text-white">Our Lodging Classes</h2>
            <div style={{ width: 60, height: 1, background: "#c9a84c", margin: "16px auto 0" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Luxury Resorts */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Star className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Luxury & Heritage Resorts</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Premium 5-star properties, boutique wellness retreats, and luxury villa selections featuring validated amenities and unique location views.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Premium Club Lounge Privileges
                </li>
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Curated In-room Dinings
                </li>
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Custom Check-in Lanes
                </li>
              </ul>
            </motion.div>

            {/* Corporate Hotels */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Key className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Corporate & Business Stays</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Optimized business hotels located in central finance hubs. Offering high-speed internet, conference access, and custom invoice support.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Corporate Discounted Quotas
                </li>
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Business Lounge & Hub access
                </li>
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Central City Logistics Integration
                </li>
              </ul>
            </motion.div>

            {/* Budget Friendly */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Bed className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Premium Budget Hotels</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Clean, safe, and family-friendly hotel listings matching budget limits without compromising document checks, hot showers, or breakfast.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Vetted Cleanliness Standards
                </li>
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Verified Travel Board reviews
                </li>
                <li className="flex items-center gap-2">
                  <Hotel size={14} className="text-[#c9a84c]" /> Public transit connections
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
              Strategic Booking
            </div>
            <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] leading-[0.9] mb-6">
              Tailored Room <span className="text-stroke-gold">Arrangements</span>
            </h2>
            <p className="f-cormorant italic leading-[1.8] text-[1.15rem] text-[#7a7060] mb-8">
              We coordinate directly with global lodging groups to offer transparent pricing, priority room upgrades, and flexible check-in timelines. Our team validates every check-in detail.
            </p>
            <a href={WA_URL} target="_blank" rel="noreferrer"
              className="f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] transition-all duration-300 hover:opacity-85 text-center"
              style={{ background: "linear-gradient(135deg,#e8c97a,#c9a84c)", color: "#0a0804", fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase" }}>
              Book Accommodation
            </a>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { num: "01", title: "Preference Mapping", desc: "Checking your location needs, view options, smoking preferences, and bed requirements." },
              { num: "02", title: "Vendor Negotiations", desc: "Comparing pricing indexes and calling local managers to secure preferred base rates." },
              { num: "03", title: "Vetting Check-in Details", desc: "Verifying confirmation slips, lodging guidelines, and checkout limits to prevent errors." },
              { num: "04", title: "24/7 Helpline Desk", desc: "Direct help desk access for check-in assistance, billing queries, and booking extensions." }
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
            Booking Excellence
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
          </div>
          <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] text-white">
            Our Booking <span className="text-stroke-gold">Advantage</span>
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Verified Stays Only", desc: "No misleading images. Every property undergoes strict comfort and security vetting before customer allocation." },
            { icon: Award, title: "VIP Partner Rates", desc: "Enjoy negotiated contract prices, lower taxes, and priority room upgrades on luxury properties." },
            { icon: ShieldAlert, title: "No Hidden Costs", desc: "Completely transparent reservations including base charges, local city taxes, and check-in fees." }
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
              Secure Premium <span className="text-stroke-gold">Lodging</span>
            </h2>
            <p className="f-cormorant italic text-[1.1rem] sm:text-[1.25rem] text-[#7a7060] mb-8 leading-[1.8] max-w-xl mx-auto">
              Ready to reserve your global resort stay? Get in touch with our booking desk today for customized rates and hotel selections.
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
