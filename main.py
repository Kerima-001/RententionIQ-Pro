from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib

app = FastAPI(
    title="RetentionIQ Pro",
    description="AI Customer Retention Platform"
)

model = joblib.load("churn_model.pkl")

class Customer(BaseModel):
    age: int
    tenure: int
    monthly_spend: float
    support_tickets: int
    satisfaction_score: int

@app.get("/")
def home():
    return {
        "application": "RetentionIQ Pro",
        "status": "Running"
    }

@app.post("/predict")
def predict(customer: Customer):

    df = pd.DataFrame([{
        "age": customer.age,
        "tenure": customer.tenure,
        "monthly_spend": customer.monthly_spend,
        "support_tickets": customer.support_tickets,
        "satisfaction_score": customer.satisfaction_score
    }])

    probability = model.predict_proba(df)[0][1]

    if probability > 0.80:
        risk = "HIGH"
        action = "Offer retention discount"
    elif probability > 0.50:
        risk = "MEDIUM"
        action = "Send engagement campaign"
    else:
        risk = "LOW"
        action = "Normal follow-up"

    return {
        "churn_probability": round(probability * 100, 2),
        "risk_level": risk,
        "recommendation": action
    }