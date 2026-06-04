import { useState } from "react";

export default function App() {
    const [risk, setRisk] = useState("Medium");
    const [probability, setProbability] = useState("72%");

    return (
        <div
            style={{
                background: "#0f172a",
                minHeight: "100vh",
                color: "white",
                padding: "30px",
                fontFamily: "Arial"
            }}
        >
            <h1>🚀 RetentionIQ Pro</h1>
            <p>AI-Powered Customer Intelligence Platform</p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >
                <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
                    <h3>Total Customers</h3>
                    <h1>12,543</h1>
                </div>

                <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
                    <h3>At Risk</h3>
                    <h1>1,234</h1>
                </div>

                <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
                    <h3>Churn Rate</h3>
                    <h1>9.8%</h1>
                </div>

                <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
                    <h3>Retention Rate</h3>
                    <h1>90.2%</h1>
                </div>
            </div>

            <div
                style={{
                    background: "#1e293b",
                    marginTop: "30px",
                    padding: "25px",
                    borderRadius: "12px"
                }}
            >
                <h2>AI Churn Prediction</h2>

                <input
                    placeholder="Age"
                    style={{ padding: "10px", margin: "10px" }}
                />

                <input
                    placeholder="Tenure"
                    style={{ padding: "10px", margin: "10px" }}
                />

                <input
                    placeholder="Monthly Spend"
                    style={{ padding: "10px", margin: "10px" }}
                />

                <br />

                <button
                    onClick={() => {
                        setRisk("High");
                        setProbability("92%");
                    }}
                    style={{
                        padding: "12px 20px",
                        background: "#7c3aed",
                        color: "white",
                        border: "none",
                        borderRadius: "8px"
                    }}
                >
                    Predict Churn
                </button>

                <h2 style={{ marginTop: "20px" }}>
                    Risk Level: {risk}
                </h2>

                <h2>
                    Probability: {probability}
                </h2>
            </div>
        </div>
    );
}