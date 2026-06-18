import { motion } from "framer-motion";
import { Plane, Compass, Headphones, Award, ShieldAlert, Navigation, Globe } from "lucide-react";
import Cursor from "./Cursor";
import SubpageNav from "./SubpageNav";
import SubpageFooter from "./SubpageFooter";

const WA_PHONE = "918086612704";
const WA_URL = `https://wa.me/${WA_PHONE}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20Flight%20Booking%20services.`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FlightBooking() {
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
          <source src="/video/flight.mp4" type="video/mp4" />
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
              IATA Authorized Travel desk
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h1 className="f-bebas leading-[0.9] mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
              FLIGHT <span className="text-stroke-gold">BOOKING</span>
            </h1>
            <p className="f-cormorant italic max-w-2xl mx-auto leading-[1.8]"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", color: "rgba(245,240,232,0.7)" }}>
              Customized travel itineraries, business routing, and domestic & international airline ticketing. Emergency re-ticketing and 24/7 client desk assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE OVERVIEW / CORE OFFERINGS ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-16" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="f-bebas text-[2.5rem] tracking-[1px] text-white">Flight Desk Offerings</h2>
            <div style={{ width: 60, height: 1, background: "#c9a84c", margin: "16px auto 0" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Flights */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Navigation className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Corporate Travel Desk</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Specialized corporate booking modules with tailored itineraries, invoice management, multicity connections, and low corporate cancellation fee limits.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Priority Business Class Booking
                </li>
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Flexi-Fare Ticketing Lanes
                </li>
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> GST Invoicing support
                </li>
              </ul>
            </motion.div>

            {/* Leisure Booking */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Compass className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Leisure & Group Travel</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Exclusive holiday itineraries for couples, families, and larger tour groups. We optimize layovers and coordinate multicity transitions.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Customized Layovers & Stopovers
                </li>
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Discounted Group Fare Quotas
                </li>
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Preferred Seating Arrangements
                </li>
              </ul>
            </motion.div>

            {/* Charter & Premium */}
            <motion.div 
              className="p-8 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <Globe className="text-[#c9a84c] mb-6" size={40} />
              <h3 className="f-bebas text-[1.6rem] text-white tracking-[1px] mb-4">Premium Add-ons</h3>
              <p className="f-dm text-[0.8rem] text-[#7a7060] leading-[1.7] mb-6">
                Complete first-class travel assistance. From airport pick-and-drop to luggage tags validation and international airport lounge entries.
              </p>
              <ul className="f-dm text-[0.78rem] text-white space-y-3">
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Premium Lounge Vouchers
                </li>
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Extra Baggage Pre-Booking
                </li>
                <li className="flex items-center gap-2">
                  <Plane size={14} className="text-[#c9a84c]" /> Priority Check-in Support
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
              Authorized Lanes
            </div>
            <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] leading-[0.9] mb-6">
              Strategic Flight <br />
              <span className="text-stroke-gold">Route Planning</span>
            </h2>
            <p className="f-cormorant italic leading-[1.8] text-[1.15rem] text-[#7a7060] mb-8">
              We look beyond basic online tools to design routes that save you hours of wait time. With our premium global airline integrations, we lock in GDS-level fares for both corporate and standard tickets.
            </p>
            <a href={WA_URL} target="_blank" rel="noreferrer"
              className="f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] transition-all duration-300 hover:opacity-85 text-center"
              style={{ background: "linear-gradient(135deg,#e8c97a,#c9a84c)", color: "#0a0804", fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase" }}>
              Inquire Flight Bookings
            </a>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[
              { num: "01", title: "Itinerary Optimization", desc: "Our ticketing desks match connection timelines, reducing long layovers and checking terminal shifts." },
              { num: "02", title: "Rate comparison", desc: "We compare multiple GDS systems and direct airline deals to find the most competitive fare for your class." },
              { num: "03", title: "Preference Mapping", desc: "Assigning preferred seats, pre-booking special meals, and resolving extra luggage weight requirements." },
              { num: "04", title: "24/7 Ticketing Desk", desc: "Direct customer desk help for instant flight changes, cancellations, or emergency delay arrangements." }
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
            Ticketing Advantage
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
          </div>
          <h2 className="f-bebas text-[3rem] sm:text-[4rem] text-white">
            Premium Ticketing <span className="text-stroke-gold">Benefits</span>
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Headphones, title: "24/7 Ticketing Desk", desc: "No chatbot runarounds. Talk directly to experienced ticketing managers who resolve emergency cancellations instantly." },
            { icon: Award, title: "Corporate Loyalty Deals", desc: "We load your corporate flyer profile data during reservations to ensure your membership miles build up smoothly." },
            { icon: ShieldAlert, title: "Zero Hidden Upcharges", desc: "No surprise booking fees or transaction commissions. Complete transparency in base rates and taxes." }
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
              Secure Your Global <span className="text-stroke-gold">Route</span>
            </h2>
            <p className="f-cormorant italic text-[1.1rem] sm:text-[1.25rem] text-[#7a7060] mb-8 leading-[1.8] max-w-xl mx-auto">
              Ready to book domestic or international flight tickets? Contact our reservation managers to get quick flight schedules and corporate fare estimates.
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
