// import React, { useState } from "react";
// import axios from "axios";

// const ResultForm: React.FC = () => {
//   const [batchId, setBatchId] = useState("");
//   const [result, setResult] = useState<any>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get(
//         `http://16.171.237.145:5000/result/${batchId}`
//       );
//       setResult(res.data);
//     } catch (error) {
//       console.error("Error fetching result:", error);
//       setResult({ error: "Failed to fetch result" });
//     }
//   };

//   return (
//     <div>
//       <h2>Get Job Result</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={batchId}
//           onChange={(e) => setBatchId(e.target.value)}
//           placeholder="Batch ID"
//           required
//         />
//         <button type="submit">Get Result</button>
//       </form>
//       {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
//     </div>
//   );
// };

// export default ResultForm;
