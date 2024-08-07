import React, { useState } from "react";
import axios from "axios";

const StatusForm: React.FC = () => {
  const [batchId, setBatchId] = useState("");
  const [status, setStatus] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://16.171.237.145:5000/status/${batchId}`
      );
      setStatus(res.data);
    } catch (error) {
      console.error("Error fetching status:", error);
      setStatus({ error: "Failed to fetch status" });
    }
  };

  return (
    <div className="border-b">
      <h2>Check Job Status</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
          placeholder="Batch ID"
          required
        />
        <button type="submit">Check Status</button>
      </form>
      {status && <pre>{JSON.stringify(status, null, 2)}</pre>}
    </div>
  );
};

export default StatusForm;
