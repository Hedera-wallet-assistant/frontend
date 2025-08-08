import React, { useState } from "react";

export default function Chat({ apiBase }) {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendParse = async () => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/api/parse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const json = await res.json();
      setResult(json);
    } catch (e) {
      setResult({ error: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <input
          placeholder="Example: 'Send 5 HBAR to 0.0.1234'"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={sendParse} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
      <div className="log" style={{ marginTop: 8 }}>
        {result ? <pre>{JSON.stringify(result, null, 2)}</pre> : "Results will appear here."}
      </div>
    </>
  );
}
