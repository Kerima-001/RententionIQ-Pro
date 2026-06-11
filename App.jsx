import { useState } from "react";

const PURPLE = "#7F77DD";
const RED    = "#E24B4A";
const GREEN  = "#639922";
const AMBER  = "#BA7517";
const TEAL   = "#1D9E75";

const CUSTOMERS = [
  { id: "10045", name: "Alex M.",  spend: 120, tickets: 5,  tenure: 12, sat: 3 },
  { id: "10082", name: "Priya K.", spend: 340, tickets: 1,  tenure: 36, sat: 8 },
  { id: "10103", name: "James R.", spend: 60,  tickets: 12, tenure: 4,  sat: 2 },
  { id: "10211", name: "Sara L.",  spend: 200, tickets: 3,  tenure: 24, sat: 6 },
  { id: "10303", name: "James R.", spend: 20,  tickets: 1, tenure: 8,  sat: 9 },
  { id: "10111", name: "Kerima M.", spend: 40,  tickets: 2, tenure: 3,  sat: 4 },
  { id: "10455", name: "Steven R.", spend: 30,  tickets: 12, tenure: 5,  sat: 8 },
];

function calc(spend, tickets, tenure, sat) {
  const tp = Math.min(tickets / 20, 1);
  const sh = Math.min(spend / 500, 1);
  const ts = Math.min(tenure / 60, 1);
  const ss = Math.min((sat - 1) / 9, 1);
  const risk = 0.35 * tp + 0.25 * (1 - sh) + 0.2 * (1 - ts) + 0.2 * (1 - ss);
  return { prob: Math.round((1 - risk) * 100), tp, sh, ts, ss };
}

function getRisk(prob) {
  if (prob < 50) return { label: "High risk",   color: RED,   bg: "#FCEBEB", text: "#791F1F" };
  if (prob < 75) return { label: "Medium risk", color: AMBER, bg: "#FAEEDA", text: "#633806" };
  return            { label: "Low risk",    color: GREEN, bg: "#EAF3DE", text: "#27500A" };
}

function getRecs(prob, tickets, spend, tenure, sat) {
  const recs = [];
  if (tickets > 8)  recs.push({ icon: "🎧", accent: RED,    title: "Escalate to premium support",  sub: "High ticket volume - unresolved friction is the top churn driver" });
  if (spend < 100)  recs.push({ icon: "🏷️", accent: AMBER,  title: "Offer a loyalty discount",     sub: "Low spend detected - a targeted offer can re-engage this customer" });
  if (sat < 5)      recs.push({ icon: "📞", accent: RED,    title: "Schedule direct outreach",      sub: "Low satisfaction score - personal contact is strongly recommended" });
  if (tenure < 12)  recs.push({ icon: "🎁", accent: TEAL,   title: "Send onboarding follow-up",    sub: "Early stage account - nurturing now builds long-term loyalty" });
  if (prob > 75)    recs.push({ icon: "⭐", accent: TEAL,   title: "Enroll in loyalty program",    sub: "Healthy customer -reward them to sustain momentum" });
  if (!recs.length) recs.push({ icon: "📣", accent: PURPLE, title: "Send personalized promotions", sub: "Based on spend history and product usage patterns" });
  return recs;
}

function Bar({ pct, color, height = 6 }) {
  return (
    <div style={{ height, background: "#f1efe8", borderRadius: 99, overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 99, transition: "width .35s cubic-bezier(.4,0,.2,1)" }} />
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange, display }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5 }}>
        <span style={{ color: "#64748b" }}>{label}</span>
        <span style={{ fontWeight: 500, color: "#1e293b" }}>{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: PURPLE }} />
    </div>
  );
}

const card = {
  background: "#ffffff",
  border: "0.5px solid #e2e8f0",
  borderRadius: 14,
  padding: "20px 22px",
};

const sectionLbl = {
  fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
  textTransform: "uppercase", color: "#94a3b8", marginBottom: 12,
};

export default function App() {
  const [idx, setIdx]         = useState(0);
  const [spend, setSpend]     = useState(120);
  const [tickets, setTickets] = useState(5);
  const [tenure, setTenure]   = useState(12);
  const [sat, setSat]         = useState(3);
  const [recsOn, setRecsOn]   = useState(true);
  const [flash, setFlash]     = useState(null);

  const { prob, tp, sh, ts, ss } = calc(spend, tickets, tenure, sat);
  const risk  = getRisk(prob);
  const recs  = getRecs(prob, tickets, spend, tenure, sat);
  const segs  = prob < 40 ? 1 : prob < 55 ? 2 : prob < 70 ? 3 : prob < 85 ? 4 : 5;

  function loadCustomer(i) {
    const c = CUSTOMERS[i];
    setIdx(i); setSpend(c.spend); setTickets(c.tickets); setTenure(c.tenure); setSat(c.sat);
  }

  function sendAlert() {
    const isHigh = prob < 50;
    setFlash({
      msg: isHigh
        ? `Alert sent — ${CUSTOMERS[idx].name} flagged at ${prob}% retention. Customer success notified.`
        : `${CUSTOMERS[idx].name} is healthy at ${prob}% — enrolled in loyalty tracking.`,
      ok: !isHigh,
    });
    setTimeout(() => setFlash(null), 4000);
  }

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", fontFamily: "'Inter', Arial, sans-serif", padding: "28px 20px", color: "#1e293b" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: PURPLE }} />
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "#0f172a" }}>RetentionIQ Pro</div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 1 }}>Live churn prediction</div>
            </div>
          </div>
          <button onClick={() => setRecsOn(v => !v)}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500, cursor: "pointer", border: "0.5px solid #cbd5e1", background: "transparent", color: "#64748b" }}>
            {recsOn ? "Hide" : "Show"} recommendations
          </button>
        </div>

        {/* Flash */}
        {flash && (
          <div style={{ borderRadius: 8, padding: "11px 14px", fontSize: 13, marginBottom: 14,
            background: flash.ok ? "#EAF3DE" : "#FCEBEB",
            color: flash.ok ? "#27500A" : "#791F1F",
            border: `0.5px solid ${flash.ok ? "#97C459" : "#F09595"}` }}>
            {flash.msg}
          </div>
        )}

        {/* Customer pills */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
          {CUSTOMERS.map((c, i) => (
            <button key={c.id} onClick={() => loadCustomer(i)}
              style={{ padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 500, cursor: "pointer",
                border: "0.5px solid #cbd5e1",
                background: idx === i ? "#EEEDFE" : "transparent",
                color: idx === i ? "#3C3489" : "#64748b" }}>
              {c.name} · #{c.id}
            </button>
          ))}
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px,1fr))", gap: 8, marginBottom: 14 }}>
          {[
            { lbl: "Customer",    val: CUSTOMERS[idx].id, sub: CUSTOMERS[idx].name },
            { lbl: "Spend",       val: `$${spend}`,       sub: "monthly" },
            { lbl: "Tickets",     val: tickets,           sub: "open" },
            { lbl: "Tenure",      val: `${tenure}mo`,     sub: "active" },
            { lbl: "Satisfaction",val: `${sat}/10`,       sub: "score" },
          ].map(m => (
            <div key={m.lbl} style={{ background: "#f1f5f9", borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 3 }}>{m.lbl}</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: "#0f172a" }}>{m.val}</div>
              <div style={{ fontSize: 11, color: "#cbd5e1", marginTop: 2 }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Two col */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 12, marginBottom: 12 }}>

          {/* Sliders */}
          <div style={card}>
            <div style={sectionLbl}>Adjust signals</div>
            <Slider label="Monthly spend"      value={spend}   min={0}  max={500} step={10} onChange={setSpend}   display={`$${spend}`} />
            <Slider label="Support tickets"    value={tickets} min={0}  max={20}  step={1}  onChange={setTickets} display={tickets} />
            <Slider label="Tenure (months)"    value={tenure}  min={1}  max={60}  step={1}  onChange={setTenure}  display={`${tenure} mo`} />
            <Slider label="Satisfaction score" value={sat}     min={1}  max={10}  step={1}  onChange={setSat}     display={`${sat} / 10`} />
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <button onClick={sendAlert}
                style={{ flex: 1, padding: "9px 0", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "none", background: PURPLE, color: "#EEEDFE" }}>
                Send alert
              </button>
              <button onClick={() => loadCustomer(idx)}
                style={{ padding: "9px 14px", borderRadius: 8, fontSize: 13, cursor: "pointer", border: "0.5px solid #cbd5e1", background: "transparent", color: "#64748b" }}>
                Reset
              </button>
            </div>
          </div>

          {/* Prediction */}
          <div style={{ ...card, borderLeft: `3px solid ${PURPLE}`, borderRadius: "0 14px 14px 0", paddingLeft: "calc(22px - 3px)" }}>
            <div style={sectionLbl}>Churn prediction</div>
            <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>Retention probability</div>
            <div style={{ fontSize: 40, fontWeight: 700, color: "#0f172a", lineHeight: 1, marginBottom: 8 }}>{prob}%</div>
            <span style={{ display: "inline-block", fontSize: 12, fontWeight: 600, padding: "3px 10px", borderRadius: 99, background: risk.bg, color: risk.text }}>
              {risk.label}
            </span>
            <Bar pct={prob} color={risk.color} />
            <div style={{ display: "flex", gap: 4, margin: "8px 0 16px" }}>
              {[1,2,3,4,5].map(s => (
                <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, transition: "background .35s", background: s <= segs ? risk.color : "#e2e8f0" }} />
              ))}
            </div>
            <div style={{ height: "0.5px", background: "#e2e8f0", margin: "0 0 12px" }} />
            <div style={sectionLbl}>Signal breakdown</div>
            {[
              { label: "Ticket pressure", pct: Math.round(tp * 100), color: RED },
              { label: "Spend health",    pct: Math.round(sh * 100), color: GREEN },
              { label: "Tenure strength", pct: Math.round(ts * 100), color: PURPLE },
              { label: "Satisfaction",    pct: Math.round(ss * 100), color: AMBER },
            ].map(s => (
              <div key={s.label} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>
                  <span>{s.label}</span>
                  <span style={{ fontWeight: 600, color: s.color }}>{s.pct}%</span>
                </div>
                <Bar pct={s.pct} color={s.color} height={5} />
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        {recsOn && (
          <div style={card}>
            <div style={sectionLbl}>Retention recommendations</div>
            {recs.map((r, i) => (
              <div key={r.title} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0",
                borderBottom: i < recs.length - 1 ? "0.5px solid #f1f5f9" : "none" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${r.accent}18`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>
                  {r.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{r.title}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{r.sub}</div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}