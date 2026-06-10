export default function App() {
    return (
        <div
            style={{
                background: "#0f172a",
                minHeight: "100vh",
                color: "white",
                padding: "40px",
                fontFamily: "Arial"
            }}
        >
            <h1>🚀 RetentionIQ Pro</h1>
            <p>AI-Powered Customer Retention Dashboard</p>

            <div
                style={{
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "12px",
                    marginTop: "20px",
                    maxWidth: "500px"
                }}
            >
                <h2>Customer Information</h2>

                <p><strong>Customer ID:</strong> 10045</p>
                <p><strong>Monthly Spend:</strong> $120</p>
                <p><strong>Support Tickets:</strong> 5</p>
                <p><strong>Tenure:</strong> 12 Months</p>
            </div>

            <div
                style={{
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "12px",
                    marginTop: "20px",
                    maxWidth: "500px"
                }}
            >
                <h2>Prediction Results</h2>

                <h3>⚠️ Churn Risk: High</h3>
                <h3>📊 Retention Probability: 78%</h3>
            </div>

            <div
                style={{
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "12px",
                    marginTop: "20px",
                    maxWidth: "500px"
                }}
            >
                <h2>Recommendations</h2>

                <ul>
                    <li>Offer a loyalty discount.</li>
                    <li>Send personalized promotions.</li>
                    <li>Schedule customer outreach.</li>
                    <li>Provide premium support.</li>
                </ul>
            </div>
        </div>
    );
}