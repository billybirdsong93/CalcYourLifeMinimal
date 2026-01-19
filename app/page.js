"use client";

import { useState } from "react";

export default function Home() {
const [financial, setFinancial] = useState(5);
const [time, setTime] = useState(5);
const [lifestyle, setLifestyle] = useState(5);
const [result, setResult] = useState(null);

const calculateScore = () => {
const score = Math.round((financial + time + lifestyle) / 3);
setResult(score);
};

return (
<main
style={{
minHeight: "100vh",
background: "linear-gradient(180deg, #0f172a, #020617)",
padding: "40px 20px",
fontFamily: "Inter, Arial, sans-serif",
color: "#e5e7eb",
}}
>
<div
style={{
maxWidth: "560px",
margin: "0 auto",
background: "#020617",
borderRadius: "16px",
padding: "32px",
boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
border: "1px solid #1e293b",
}}
>
<h1 style={{ textAlign: "center", marginBottom: "8px" }}>
Life Decision Calculator
</h1>

<p
style={{
textAlign: "center",
color: "#94a3b8",
marginBottom: "36px",
fontSize: "15px",
}}
>
Evaluate how a decision impacts your money, time, and daily life.
</p>

{/* Financial */}
<div style={{ marginBottom: "32px" }}>
<label style={{ fontWeight: "600", fontSize: "16px" }}>
Financial Stability — {financial}/10
</label>
<p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "6px" }}>
Consider income reliability, savings, debt, and how well you could
handle unexpected expenses without stress.
</p>
<input
type="range"
min="1"
max="10"
value={financial}
onChange={(e) => setFinancial(Number(e.target.value))}
style={{ width: "100%", marginTop: "10px" }}
/>
</div>

{/* Time */}
<div style={{ marginBottom: "32px" }}>
<label style={{ fontWeight: "600", fontSize: "16px" }}>
Time Freedom — {time}/10
</label>
<p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "6px" }}>
Think about commute time, work hours, schedule flexibility, and how
much personal time you gain or lose with this decision.
</p>
<input
type="range"
min="1"
max="10"
value={time}
onChange={(e) => setTime(Number(e.target.value))}
style={{ width: "100%", marginTop: "10px" }}
/>
</div>

{/* Lifestyle */}
<div style={{ marginBottom: "36px" }}>
<label style={{ fontWeight: "600", fontSize: "16px" }}>
Lifestyle Satisfaction — {lifestyle}/10
</label>
<p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "6px" }}>
How this choice affects your daily stress, energy levels, family
time, hobbies, health, and overall enjoyment of life.
</p>
<input
type="range"
min="1"
max="10"
value={lifestyle}
onChange={(e) => setLifestyle(Number(e.target.value))}
style={{ width: "100%", marginTop: "10px" }}
/>
</div>

<button
onClick={calculateScore}
style={{
width: "100%",
padding: "14px",
fontSize: "16px",
borderRadius: "10px",
border: "none",
background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
color: "#ffffff",
cursor: "pointer",
fontWeight: "600",
}}
>
Calculate My Score
</button>

{result !== null && (
<div
style={{
marginTop: "32px",
padding: "24px",
borderRadius: "12px",
background: "#020617",
border: "1px solid #1e293b",
textAlign: "center",
}}
>
<h2 style={{ marginBottom: "8px" }}>Overall Decision Score</h2>
<p style={{ fontSize: "32px", fontWeight: "700" }}>
{result} / 10
</p>
<p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "8px" }}>
This score reflects how balanced the decision feels across money,
time, and quality of life.
</p>
</div>
)}
</div>
</main>
);
}
