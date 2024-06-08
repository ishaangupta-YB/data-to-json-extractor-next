"use client";
import { useState } from "react";
import axios from "axios";
import ResponseTable from "./ResponseTable";

const Form = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const jsonData = JSON.parse(data);
      const response = await axios({
        method: "post",
        url: "/api/json",
        data: jsonData,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response)
      setResponse(response.data);
    } catch (err: any) {
      setError(err.response ? err.response.data : err.message);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Data
          </label>
          <textarea
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            placeholder="Enter your data here..."
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </div>
      </form>
      {response && <ResponseTable data={response} />}

      {error && (
        <div className="mt-6 p-4 bg-red-100 rounded-md">
          <h3 className="text-lg font-medium text-red-900">Error</h3>
          <pre className="mt-2 text-sm text-red-800">{error}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;
