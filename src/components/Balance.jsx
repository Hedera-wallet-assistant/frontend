import React, { useState } from "react";

export default function Balance({ apiBase }) {
  const [accountId, setAccountId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getBalance = async () => {
    setLoading(true);
    try {
      const url = new URL(`${apiBase}/api/balance`);
      if (accountId.trim()) url.searchParams.set("accountId", accountId.trim());
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (e) {
      setData({ error: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="row">
        <input
          placeholder="Account ID (default: operator)"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />
        <button onClick={getBalance} disabled={loading}>
          {loading ? "Loading..." : "Get Balance"}
        </button>
      </div>
      <div className="log" style={{ marginTop: 8 }}>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Balance will appear here."}
      </div>
    </>
  );
}
