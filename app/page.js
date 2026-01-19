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
<main style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
<h1>Life Decision Calculator</h1>
<p>Rate each area from 1 (worst) to 10 (best).</p>

<label>
Financial Stability: {financial}
<input
type="range"
min="1"
max="10"
value={financial}
onChange={(e) => setFinancial(Number(e.target.value))}
/>
</label>

<label>
Time Freedom: {time}
<input
type="range"
min="1"
max="10"
value={time}
onChange={(e) => setTime(Number(e.target.value))}
/>
</label>

<label>
Lifestyle Satisfaction: {lifestyle}
<input
type="range"
min="1"
max="10"
value={lifestyle}
onChange={(e) => setLifestyle(Number(e.target.value))}
/>
</label>

<button
onClick={calculateScore}
style={{
marginTop: "20px",
padding: "10px",
width: "100%",
fontSize: "16px",
cursor: "pointer",
}}
>
Calculate
</button>

{result && (
<div style={{ marginTop: "30px" }}>
<h2>Your Life Score</h2>
<p style={{ fontSize: "24px" }}>{result} / 10</p>
</div>
)}
</main>
);
}
