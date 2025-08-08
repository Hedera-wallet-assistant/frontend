import React, { useMemo } from "react";
import Chat from "./components/Chat.jsx";
import Balance from "./components/Balance.jsx";
import Transfer from "./components/Transfer.jsx";

export default function App() {
  const API_HOST = useMemo(() => {
    return window.location.hostname === "localhost" ? "http://localhost:8080" : "";
  }, []);

  return (
    <div>
      <h1>Hedera AI Wallet Assistant (React)</h1>
      <p>Manage your Hedera wallet with natural language commands.</p>

      <div className="card">
        <h2>💬 Chat</h2>
        <Chat apiBase={API_HOST} />
      </div>

      <div className="card">
        <h2>💰 Check Balance</h2>
        <Balance apiBase={API_HOST} />
      </div>

      <div className="card">
        <h2>💸 Transfer</h2>
        <Transfer apiBase={API_HOST} />
      </div>
    </div>
  );
}
