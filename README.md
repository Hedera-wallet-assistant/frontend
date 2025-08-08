# 🧠 Hedera AI Wallet Assistant

## 🔹 Short Description
An AI-powered assistant that lets users manage their Hedera wallet through natural language commands — check balances, transfer HBAR or tokens, and create new accounts — all via a simple web interface.

---

## 🔹 Long Description
Hedera AI Wallet Assistant is built to simplify blockchain interactions for both beginners and experienced users.  
Instead of remembering complex commands or navigating through multiple wallet screens, users can simply type or speak commands like:

- "Check my HBAR balance"
- "Send 10 USDC to 0.0.12345"
- "Show me my last 5 transactions"

The system uses **Natural Language Processing (NLP)** to detect the intent, maps it to the correct Hedera SDK operations, and executes transactions securely.  
It supports both **HBAR** and **HTS (Hedera Token Service)** tokens, making it a flexible wallet management tool.

This project is submitted to **Hello Future: Origins Hackathon 2025** in the **AI & Agents** track.

---

## 🔹 Key Features
- 💬 **Natural Language Commands** — Manage wallet without manual navigation.
- 💰 **HBAR & Token Transactions** — Supports native HBAR and any HTS token.
- 📊 **Balance Checking** — View HBAR and token balances in one request.
- 🛠 **Extendable Intent Parsing** — Rule-based + OpenAI GPT fallback.
- 🌐 **Web UI** — Simple React frontend, no install needed.
- 🔒 **Secure Operations** — All sensitive keys stored server-side.

---

## 🔹 Architecture
```
                +------------------------+
                |   React Frontend (UI)  |
                +------------------------+
                          |
                          v
                +------------------------+
                |  Express.js Backend    |
                |  (Node.js)             |
                +------------------------+
                | Hedera SDK Integration |
                +------------------------+
                          |
                          v
                +------------------------+
                | Hedera Testnet/Mainnet |
                +------------------------+
```
**Flow**:
1. User enters natural language command in UI.
2. Backend parses intent (rule-based → OpenAI fallback).
3. Corresponding Hedera SDK call executes (balance, transfer, etc.).
4. Result returned to UI and displayed.

---

## 🔹 Tech Stack
**Frontend**
- React + Vite
- Modern CSS Reset
- Fetch API for backend communication

**Backend**
- Node.js + Express.js
- @hashgraph/sdk
- dotenv for env config
- cors for CORS handling
- Optional: OpenAI API for NLP

**Blockchain**
- Hedera Testnet / Mainnet
- Hedera Token Service (HTS)

---

## 🔹 Interaction Flow
### Example 1 — Balance Check
```
User: "Check my balance"
↓
Intent: balance
↓
Hedera SDK: AccountBalanceQuery
↓
Response: { hbars: "100.5", tokens: { "0.0.12345": "50" } }
```

### Example 2 — Transfer HBAR
```
User: "Send 5 HBAR to 0.0.9999"
↓
Intent: transfer_hbar
↓
Hedera SDK: TransferTransaction (HBAR)
↓
Response: { status: "SUCCESS", txId: "..."}
```

---

## 🔹 Setup Instructions
### 1. Backend
```bash
cd src/backend
cp .env.example .env
# Fill in:
# HEDERA_OPERATOR_ID=0.0.xxxx
# HEDERA_OPERATOR_KEY=302e0201003...
npm install
npm run dev
```

### 2. Frontend (React)
```bash
cd src/frontend-react
npm install
npm run dev
```

---

## 🔹 Deployment
- **Backend** → Render / Railway / Heroku (set ENV vars)
- **Frontend** → Netlify / Vercel (point API base to backend URL)

---

## 🔹 Future Improvements
- 🔊 Voice command support
- 📅 Scheduled transactions
- 📜 Transaction history UI
- 📱 Mobile PWA version
- 🔐 Multi-user authentication

---

## 🔹 Authors
Team **DT PREMIUM** — Hackathon Participant  
[@hiro2k-dev](mailto:huyp26102000@gmail.com)

Built for **Hello Future: Origins Hackathon 2025**