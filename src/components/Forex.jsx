import { useState } from "react";
import { motion } from "framer-motion";
import { Wallet, DollarSign, RefreshCw, Landmark, ShieldCheck, HeartHandshake, HelpCircle } from "lucide-react";
import Cursor from "./Cursor";
import SubpageNav from "./SubpageNav";
import SubpageFooter from "./SubpageFooter";

// Currency Rates data
const currencyRates = [
  { code: "USD", name: "US Dollar", buy: 86.40, sell: 86.95, flag: "🇺🇸" },
  { code: "EUR", name: "Euro", buy: 91.20, sell: 91.85, flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", buy: 108.50, sell: 109.30, flag: "🇬🇧" },
  { code: "AED", name: "UAE Dirham", buy: 23.48, sell: 23.72, flag: "🇦🇪" },
  { code: "SAR", name: "Saudi Riyal", buy: 22.95, sell: 23.18, flag: "🇸🇦" },
  { code: "QAR", name: "Qatari Riyal", buy: 23.65, sell: 23.90, flag: "🇶🇦" },
  { code: "SGD", name: "Singapore Dollar", buy: 63.80, sell: 64.30, flag: "🇸🇬" },
  { code: "AUD", name: "Australian Dollar", buy: 55.90, sell: 56.40, flag: "🇦🇺" }
];

const WA_PHONE = "918086612704";
const WA_URL = `https://wa.me/${WA_PHONE}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20Forex%20Exchange%20services.`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Forex() {
  const [calcAmount, setCalcAmount] = useState(100);
  const [calcCurrency, setCalcCurrency] = useState("USD");
  const [calcType, setCalcType] = useState("buy"); // buy (Foreign to INR) or sell (INR to Foreign)

  const selectedRate = currencyRates.find(r => r.code === calcCurrency) || currencyRates[0];
  const rateValue = calcType === "buy" ? selectedRate.buy : selectedRate.sell;

  const handleCalculate = () => {
    if (calcType === "buy") {
      return (calcAmount * rateValue).toFixed(2);
    } else {
      return (calcAmount / rateValue).toFixed(2);
    }
  };

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
          <source src="/video/forex.mp4" type="video/mp4" />
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
              Authorized Forex Services
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            </div>
            <h1 className="f-bebas leading-[0.9] mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
              FOREX <span className="text-stroke-gold">EXCHANGE</span>
            </h1>
            <p className="f-cormorant italic max-w-2xl mx-auto leading-[1.8]"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", color: "rgba(245,240,232,0.7)" }}>
              Secure major world currencies at competitive rates. Authorized dealer services providing quick, transparent, and seamless global currency solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── EXCHANGE BOARD & CONVERTER ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-16" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Live Rates Card */}
          <motion.div 
            className="p-6 sm:p-10 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2 className="f-bebas tracking-[1px] mb-8 text-[2rem] text-white flex items-center gap-3">
              <Landmark className="text-[#c9a84c]" size={28} /> Live Exchange Rates
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left f-dm border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(201,168,76,0.12)] text-[#7a7060]" style={{ fontSize: "0.65rem", letterSpacing: "2px", textTransform: "uppercase" }}>
                    <th className="pb-4 font-normal">Currency</th>
                    <th className="pb-4 font-normal text-right">We Buy (INR)</th>
                    <th className="pb-4 font-normal text-right">We Sell (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(255,255,255,0.03)] text-[0.85rem]">
                  {currencyRates.map((c) => (
                    <tr key={c.code} className="hover:bg-[rgba(201,168,76,0.02)] transition-colors">
                      <td className="py-4 flex items-center gap-3 font-medium">
                        <span className="text-xl">{c.flag}</span>
                        <span className="text-white font-bold">{c.code}</span>
                        <span className="text-[#7a7060] text-xs hidden sm:inline">— {c.name}</span>
                      </td>
                      <td className="py-4 text-right text-[#c9a84c] font-medium">₹ {c.buy.toFixed(2)}</td>
                      <td className="py-4 text-right text-white">₹ {c.sell.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Interactive Calculator */}
          <motion.div 
            className="p-6 sm:p-10 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded-lg relative"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2 className="f-bebas tracking-[1px] mb-8 text-[2rem] text-white flex items-center gap-3">
              <RefreshCw className="text-[#c9a84c]" size={28} /> Premium Calculator
            </h2>
            
            <div className="flex flex-col gap-6 f-dm">
              <div>
                <label className="text-[0.62rem] text-[#7a7060] tracking-[2px] uppercase mb-2 block">I want to</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setCalcType("buy")}
                    className={`py-3 px-4 text-center border font-bold text-xs tracking-[1px] uppercase transition-all duration-300 ${calcType === "buy" ? "bg-[linear-gradient(135deg,#e8c97a,#c9a84c)] border-transparent text-[#0a0804]" : "border-[rgba(201,168,76,0.15)] text-white hover:bg-[rgba(201,168,76,0.05)]"}`}
                  >
                    Sell Currency
                  </button>
                  <button 
                    onClick={() => setCalcType("sell")}
                    className={`py-3 px-4 text-center border font-bold text-xs tracking-[1px] uppercase transition-all duration-300 ${calcType === "sell" ? "bg-[linear-gradient(135deg,#e8c97a,#c9a84c)] border-transparent text-[#0a0804]" : "border-[rgba(201,168,76,0.15)] text-white hover:bg-[rgba(201,168,76,0.05)]"}`}
                  >
                    Buy Currency
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[0.62rem] text-[#7a7060] tracking-[2px] uppercase mb-2 block">Currency</label>
                  <select 
                    value={calcCurrency}
                    onChange={(e) => setCalcCurrency(e.target.value)}
                    className="w-full bg-[#110f08] border border-[rgba(201,168,76,0.18)] text-white py-[14px] px-4 rounded focus:outline-none focus:border-[#c9a84c] text-sm"
                  >
                    {currencyRates.map(c => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code} ({c.name})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[0.62rem] text-[#7a7060] tracking-[2px] uppercase mb-2 block">
                    {calcType === "buy" ? `Amount (${calcCurrency})` : "Amount (INR)"}
                  </label>
                  <input 
                    type="number"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(Number(e.target.value))}
                    min="1"
                    className="w-full bg-[#110f08] border border-[rgba(201,168,76,0.18)] text-white py-[14px] px-4 rounded focus:outline-none focus:border-[#c9a84c] text-sm"
                  />
                </div>
              </div>

              {/* Output Result */}
              <div className="bg-[#110f08] border border-[rgba(201,168,76,0.08)] p-6 rounded text-center mt-4">
                <div className="text-[0.62rem] text-[#7a7060] tracking-[2px] uppercase mb-1">Estimated Conversion</div>
                <div className="text-[1.8rem] font-bold text-white f-bebas tracking-[1px]">
                  {calcType === "buy" ? `₹ ${handleCalculate()}` : `${handleCalculate()} ${calcCurrency}`}
                </div>
                <div className="text-[0.6rem] text-[#7a7060] mt-2 italic">
                  *Rate applied: 1 {calcCurrency} = ₹{rateValue.toFixed(2)} (subject to market variations)
                </div>
              </div>

              <a href={WA_URL} target="_blank" rel="noreferrer"
                className="f-dm font-medium no-underline inline-flex items-center justify-center gap-2 px-8 py-[15px] transition-all duration-300 hover:opacity-85 text-center"
                style={{ background: "linear-gradient(135deg,#e8c97a,#c9a84c)", color: "#0a0804", fontSize: "0.72rem", letterSpacing: "3px", textTransform: "uppercase" }}>
                Book This Rate Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES / BENEFITS ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20" style={{ background: "#0a0804" }}>
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <div className="f-dm flex items-center justify-center gap-4 mb-5"
            style={{ fontSize: "0.62rem", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
            Services Offered
            <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
          </div>
          <h2 className="f-bebas text-[3rem] sm:text-[4rem] text-white">
            Forex <span className="text-stroke-gold">Solutions</span>
          </h2>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Wallet, title: "Currency Exchange", desc: "Purchase or sell major global currencies instantly. We maintain a large inventory of fresh, legal tender for smooth corporate and holiday travel." },
            { icon: DollarSign, title: "Multi-Currency Cards", desc: "Lock in rates and travel cashless with our multi-currency travel cards. Secure, globally accepted, and protected with secure chip-and-pin security." },
            { icon: RefreshCw, title: "Outward Remittance", desc: "Send money to relatives, pay university tuition fees, or fund global medical treatments safely through our authorized remittance partner channels." }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i} 
                className="p-8 border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.3)] transition-all duration-300 bg-[#110f08]"
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              >
                <div className="w-[52px] h-[52px] flex items-center justify-center mb-6" style={{ border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.03)" }}>
                  <Icon color="#c9a84c" size={24} />
                </div>
                <h3 className="f-bebas text-[1.5rem] tracking-[1px] mb-3 text-white">{item.title}</h3>
                <p className="f-dm leading-[1.8] text-[0.82rem] style={{ color: '#7a7060' }}">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="px-4 sm:px-10 lg:px-[60px] py-20" style={{ background: "#110f08" }}>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="f-dm flex items-center gap-4 mb-5"
              style={{ fontSize: "0.62rem", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>
              <span style={{ display: "block", width: 28, height: 1, background: "#c9a84c" }} />
              Premium Commitment
            </div>
            <h2 className="f-bebas text-[3rem] sm:text-[4.5rem] leading-[0.9] mb-6">
              Safe & Authorized <br />
              <span className="text-stroke-gold">Transactions</span>
            </h2>
            <p className="f-cormorant italic leading-[1.8] mb-8" style={{ fontSize: "1.15rem", color: "rgba(245,240,232,0.65)" }}>
              As a recognized premium agency, we work under strict compliance standards. All transactions are fully audited and authorized, ensuring peace of mind for corporate and individual clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "100% Secure & Legal", desc: "Licensed operations executing fully legal currency handovers." },
              { icon: Landmark, title: "Bank-Linked Rates", desc: "Enjoy treasury-direct rates without high commercial bank commissions." },
              { icon: HeartHandshake, title: "Transparent Pricing", desc: "No commission fees or hidden service charges during transactions." },
              { icon: HelpCircle, title: "Expert Support", desc: "Consultative desk help for international transaction guidelines." }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={i} 
                  className="p-6 border border-[rgba(201,168,76,0.12)] bg-[#0a0804] rounded"
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                  <Icon color="#c9a84c" size={24} className="mb-4" />
                  <h4 className="f-bebas text-[1.2rem] tracking-[1px] mb-2 text-white">{card.title}</h4>
                  <p className="f-dm text-[0.78rem] text-[#7a7060] leading-[1.6]">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>

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
              Exchange With <span className="text-stroke-gold">Confidence</span>
            </h2>
            <p className="f-cormorant italic text-[1.1rem] sm:text-[1.25rem] text-[#7a7060] mb-8 leading-[1.8] max-w-xl mx-auto">
              Get in touch with our expert forex managers today. We cater to emergency corporate orders and vacation cash requirements with standard luxury delivery.
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
