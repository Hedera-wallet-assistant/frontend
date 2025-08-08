import React, { useState } from "react";

export default function Transfer({ apiBase }) {
  const [type, setType] = useState("hbar");
  const [toAccountId, setToAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [resp, setResp] = useState(null);
  const [loading, setLoading] = useState(false);

  const doTransfer = async () => {
    if (!toAccountId || !amount) {
      setResp({ error: "Please provide toAccountId and amount" });
      return;
    }
    setLoading(true);
    try {
      const endpoint = type === "hbar" ? "/api/transfer/hbar" : "/api/transfer/token";
      const body =
        type === "hbar"
          ? { toAccountId, amount: Number(amount) }
          : { tokenId, toAccountId, amount: Number(amount) };

      const res = await fetch(`${apiBase}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      const json = await res.json();
      setResp(json);
    } catch (e) {
      setResp({ error: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="hbar">HBAR</option>
          <option value="token">Token</option>
        </select>
        <input
          placeholder="Recipient Account (e.g., 0.0.1234)"
          value={toAccountId}
          onChange={(e) => setToAccountId(e.target.value)}
        />
        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {type === "token" && (
          <input
            placeholder="Token ID (0.0.xxxx)"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
          />
        )}
        <button onClick={doTransfer} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      <div className="log" style={{ marginTop: 8 }}>
        {resp ? <pre>{JSON.stringify(resp, null, 2)}</pre> : "Transaction results will appear here."}
      </div>
    </>
  );
}
