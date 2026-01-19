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
background: "#f5f7fb",
padding: "40px 20px",
fontFamily: "Arial, sans-serif",
}}
>
<div
style={{
maxWidth: "520px",
margin: "0 auto",
background: "#ffffff",
borderRadius: "12px",
padding: "30px",
boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
}}
>
<h1 style={{ textAlign: "center", marginBottom: "10px" }}>
Life Decision Calculator
</h1>

<p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
Rate each area from 1 (very poor) to 10 (excellent).
</p>

{/* Financial */}
<div style={{ marginBottom: "25px" }}>
<label style={{ fontWeight: "bold" }}>
Financial Stability: {financial}
</label>
<input
type="range"
min="1"
max="10"
value={financial}
onChange={(e) => setFinancial(Number(e.target.value))}
style={{ width: "100%" }}
/>
</div>

{/* Time */}
<div style={{ marginBottom: "25px" }}>
<label style={{ fontWeight: "bold" }}>
Time Freedom: {time}
</label>
<input
type="range"
min="1"
max="10"
value={time}
onChange={(e) => setTime(Number(e.target.value))}
style={{ width: "100%" }}
/>
</div>

{/* Lifestyle */}
<div style={{ marginBottom: "30px" }}>
<label style={{ fontWeight: "bold" }}>
Lifestyle Satisfaction: {lifestyle}
</label>
<input
type="range"
min="1"
max="10"
value={lifestyle}
onChange={(e) => setLifestyle(Number(e.target.value))}
style={{ width: "100%" }}
/>
</div>

<button
onClick={calculateScore}
style={{
width: "100%",
padding: "12px",
fontSize: "16px",
borderRadius: "8px",
border: "none",
background: "#4f46e5",
color: "#ffffff",
cursor: "pointer",
}}
>
Calculate My Score
</button>

{result !== null && (
<div
style={{
marginTop: "30px",
padding: "20px",
borderRadius: "8px",
background: "#f0f4ff",
textAlign: "center",
}}
>
<h2>Your Life Score</h2>
<p style={{ fontSize: "28px", fontWeight: "bold" }}>
{result} / 10
</p>
</div>
)}
</div>
</main>
);
}
