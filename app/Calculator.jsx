"use client";
import { useState } from "react";

export default function Calculator() {
const [financial, setFinancial] = useState(5);
const [time, setTime] = useState(5);
const [lifestyle, setLifestyle] = useState(5);

const [income, setIncome] = useState(5000);
const [expenses, setExpenses] = useState(3500);
const [expenseChange, setExpenseChange] = useState(0);

const currentSurplus = income - expenses;
const newSurplus = income - (expenses - expenseChange);
const monthlySavings = newSurplus - currentSurplus;
const yearlySavings = monthlySavings * 12;

const score = Math.round((financial + time + lifestyle) / 3);

return (
<div style={{ maxWidth: "600px", margin: "0 auto", padding: "30px", borderRadius: "16px", background: "#020617", boxShadow: "0 20px 40px rgba(0,0,0,0.6)", color: "#e5e7eb" }}>
<h1 style={{ textAlign: "center" }}>Life Decision Calculator</h1>
<p style={{ textAlign: "center", color: "#94a3b8" }}>Evaluate how a decision impacts your money, time and daily life.</p>

<label>Financial Stability — {financial}/10</label>
<input type="range" min="1" max="10" value={financial} onChange={(e) => setFinancial(Number(e.target.value))} style={{ width: "100%", marginBottom: "20px" }} />

<label>Current Monthly Income:</label>
<input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} style={{ width: "100%", marginBottom: "10px", padding: "6px", borderRadius: "6px", border: "1px solid #374151", background: "#111827", color: "#e5e7eb" }} />

<label>Current Monthly Expenses:</label>
<input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} style={{ width: "100%", marginBottom: "10px", padding: "6px", borderRadius: "6px", border: "1px solid #374151", background: "#111827", color: "#e5e7eb" }} />

<label>Expected Change in Expenses:</label>
<input type="number" value={expenseChange} onChange={(e) => setExpenseChange(Number(e.target.value))} style={{ width: "100%", marginBottom: "10px", padding: "6px", borderRadius: "6px", border: "1px solid #374151", background: "#111827", color: "#e5e7eb" }} />

<div style={{ marginTop: "10px", padding: "12px", borderRadius: "8px", background: "#111827", border: "1px solid #374151", color: "#a5b4fc" }}>
<p>Estimated Monthly Savings: ${monthlySavings}</p>
<p>Estimated Yearly Savings: ${yearlySavings}</p>
</div>

<label style={{ marginTop: "20px" }}>Time Freedom — {time}/10</label>
<input type="range" min="1" max="10" value={time} onChange={(e) => setTime(Number(e.target.value))} style={{ width: "100%", marginBottom: "20px" }} />

<label>Lifestyle Satisfaction — {lifestyle}/10</label>
<input type="range" min="1" max="10" value={lifestyle} onChange={(e) => setLifestyle(Number(e.target.value))} style={{ width: "100%", marginBottom: "20px" }} />

<div style={{ marginTop: "20px", padding: "12px", borderRadius: "8px", background: "#020617", border: "1px solid #1e293b", textAlign: "center" }}>
<h2>Overall Decision Score</h2>
<p style={{ fontSize: "32px", fontWeight: "700" }}>{score} / 10</p>
</div>
</div>
);
}
