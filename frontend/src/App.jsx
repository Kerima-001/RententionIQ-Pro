import { useState } from "react";

export default function App() {
    const [page, setPage] = useState("Dashboard");

    const menu = [
        "Dashboard",
        "Analytics",
        "Predictions",
        "Customers",
        "AI Assistant",
        "Reports",
        "Settings",
    ];

    const glassCard = {
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "25px",
        padding: "25px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#4f46e5,#7c3aed,#ec4899)",
                color: "white",
                fontFamily: "Poppins, Arial, sans-serif",
                display: "flex",
                overflow: "hidden",
            }}
        >
            {/* Floating Bubbles */}
            <div
                style={{
                    position: "fixed",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    top: "40px",
                    right: "60px",
                    filter: "blur(30px)",
                }}
            />

            <div
                style={{
                    position: "fixed",
                    width: "350px",
                    height: "350px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    bottom: "-50px",
                    left: "-50px",
                    filter: "blur(50px)",
                }}
            />

            {/* Sidebar */}
            <div
                style={{
                    width: "260px",
                    padding: "25px",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                    borderRight: "1px solid rgba(255,255,255,0.1)",
                }}
            >
                <h2
                    style={{
                        textShadow: "0 0 15px white",
                        marginBottom: "30px",
                    }}
                >
                    🚀 RetentionIQ
                </h2>

                {menu.map((item) => (
                    <button
                        key={item}
                        onClick={() => setPage(item)}
                        style={{
                            width: "100%",
                            marginBottom: "12px",
                            padding: "14px",
                            border: "none",
                            borderRadius: "16px",
                            cursor: "pointer",
                            color: "white",
                            fontWeight: "bold",
                            background:
                                page === item
                                    ? "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)"
                                    : "rgba(255,255,255,0.1)",
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div
                style={{
                    flex: 1,
                    padding: "35px",
                }}
            >
                <h1
                    style={{
                        fontSize: "3rem",
                        textShadow: "0 0 25px rgba(255,255,255,0.8)",
                    }}
                >
                    {page}
                </h1>

                {page === "Dashboard" && (
                    <>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit,minmax(220px,1fr))",
                                gap: "20px",
                                marginTop: "25px",
                            }}
                        >
                            <div style={glassCard}>
                                <h3>👥 Customers</h3>
                                <h1>5,240</h1>
                            </div>

                            <div style={glassCard}>
                                <h3>💰 Revenue</h3>
                                <h1>$120K</h1>
                            </div>

                            <div style={glassCard}>
                                <h3>📈 Retention</h3>
                                <h1>87%</h1>
                            </div>

                            <div style={glassCard}>
                                <h3>⚠️ Churn Risk</h3>
                                <h1>245</h1>
                            </div>
                        </div>

                        <div
                            style={{
                                ...glassCard,
                                marginTop: "30px",
                            }}
                        >
                            <h2>📊 AI Performance Overview</h2>

                            <div
                                style={{
                                    height: "250px",
                                    borderRadius: "20px",
                                    background:
                                        "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)",
                                    marginTop: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                }}
                            >
                                Interactive Chart Area
                            </div>
                        </div>
                    </>
                )}

                {page === "Analytics" && (
                    <div style={glassCard}>
                        <h2>📈 Customer Analytics</h2>
                        <p>
                            Analyze spending habits, satisfaction trends,
                            support requests, and retention patterns.
                        </p>
                    </div>
                )}

                {page === "Predictions" && (
                    <div style={glassCard}>
                        <h2>🤖 AI Churn Prediction</h2>

                        <h3>Customer #10045</h3>

                        <p>Monthly Spend: $120</p>
                        <p>Support Tickets: 5</p>
                        <p>Tenure: 12 Months</p>

                        <h2 style={{ color: "#fbbf24" }}>
                            ⚠️ High Churn Risk
                        </h2>

                        <h3>Retention Probability: 78%</h3>

                        <button
                            style={{
                                padding: "12px 20px",
                                border: "none",
                                borderRadius: "15px",
                                color: "white",
                                fontWeight: "bold",
                                cursor: "pointer",
                                background:
                                    "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)",
                            }}
                        >
                            Generate AI Strategy
                        </button>
                    </div>
                )}

                {page === "Customers" && (
                    <div style={glassCard}>
                        <h2>👥 Customer Directory</h2>

                        <input
                            placeholder="Search customer..."
                            style={{
                                width: "100%",
                                padding: "15px",
                                borderRadius: "15px",
                                border: "none",
                                marginTop: "15px",
                            }}
                        />

                        <div style={{ marginTop: "20px" }}>
                            <p>John Doe — High Risk</p>
                            <p>Sarah Lee — Low Risk</p>
                            <p>Michael Smith — Medium Risk</p>
                        </div>
                    </div>
                )}

                {page === "AI Assistant" && (
                    <div style={glassCard}>
                        <h2>🧠 RetentionIQ AI Assistant</h2>

                        <input
                            placeholder="Ask a business question..."
                            style={{
                                width: "100%",
                                padding: "15px",
                                borderRadius: "15px",
                                border: "none",
                            }}
                        />

                        <div
                            style={{
                                marginTop: "20px",
                                padding: "20px",
                                borderRadius: "15px",
                                background: "rgba(255,255,255,0.08)",
                            }}
                        >
                            Customers with more than 4 support
                            tickets are 73% more likely to churn.
                        </div>
                    </div>
                )}

                {page === "Reports" && (
                    <div style={glassCard}>
                        <h2>📄 Reports Center</h2>

                        <button
                            style={{
                                marginRight: "10px",
                                padding: "12px 20px",
                                border: "none",
                                borderRadius: "15px",
                            }}
                        >
                            PDF Report
                        </button>

                        <button
                            style={{
                                padding: "12px 20px",
                                border: "none",
                                borderRadius: "15px",
                            }}
                        >
                            Excel Report
                        </button>
                    </div>
                )}

                {page === "Settings" && (
                    <div style={glassCard}>
                        <h2>⚙️ Settings</h2>
                        <p>Theme, notifications, account, and AI preferences.</p>
                    </div>
                )}
            </div>
        </div>
    );
}