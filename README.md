# RetentionIQ Pro

**AI-powered customer retention dashboard — predict churn before it happens.**

RetentionIQ Pro gives businesses a clear view of which customers are at risk of leaving, why, and what to do about it. Built with React, it surfaces churn predictions, retention probabilities, and personalized action recommendations in a clean, actionable dashboard.

---

## Overview

Customer churn is expensive and often invisible until it's too late. RetentionIQ Pro addresses this by analyzing customer behavior signals — spending patterns, support ticket volume, tenure — and generating a churn risk score alongside concrete retention strategies for each individual customer.

The goal is simple: give customer success and sales teams the information they need to act before a customer walks out the door.

---

## What It Shows

**Customer Profile**
A snapshot of the individual customer record including their ID, monthly spend, support ticket count, and tenure. These are the input signals that drive the prediction.

**Prediction Results**
A churn risk classification (Low, Medium, or High) paired with a retention probability score. For example, a customer with 5 support tickets, $120/month in spend, and 12 months of tenure might surface as High churn risk with a 78% retention probability — meaning there is still a meaningful window to act.

**Recommendations**
A targeted action list generated for that customer, such as offering a loyalty discount, sending personalized promotions, scheduling outreach, or escalating to premium support. Recommendations are specific to the customer profile, not generic.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React (JSX) |
| Styling | Inline CSS, dark theme |
| AI/ML Logic | Churn prediction model (backend integration) |
| State Management | React component state |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Kerima-001/RententionIQ-Pro.git
cd RententionIQ-Pro

# Install dependencies
npm install

# Start the development server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
RententionIQ-Pro/
    src/
        App.jsx          Main dashboard component
        index.js         Entry point
    public/
        index.html
    package.json
    README.md
```

---

## Roadmap

Ideas for extending this project further:

- Connect to a real ML model (scikit-learn or TensorFlow) via a FastAPI backend
- Add a customer list view with sortable churn risk scores
- Build a historical trend chart showing retention over time
- Export reports as PDF or CSV for customer success teams
- Add authentication for multi-user team access

---

## Author

**Kerima Mussa** — [GitHub](https://github.com/Kerima-001) · [LinkedIn](https://linkedin.com/in/kerima-mussa-a72735277)

> *Building data-driven tools that help businesses make better decisions.*
