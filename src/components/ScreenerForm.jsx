// src/components/ScreenerForm.jsx
import { useState } from "react";
import { stockData } from "../data/stockData";
import { applyFilters } from "../utils/filterUtils";
import ResultsTable from "./ResultsTable";
import StockMetrics from "./StockMetrics";

export default function ScreenerForm() {
  const [query, setQuery] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = parseQuery(query);
    const results = applyFilters(stockData, filters);
    setFilteredStocks(results);
  };

  const parseQuery = (queryString) => {
    const conditions = queryString.split(" AND ");
    
    return conditions.map((condition) => {
      const parts = condition.split(" ");
      let parameter = "",
        operator = "",
        value = "";
      
      for (let i = 0; i < parts.length; i++) {
        if (parts[i] === ">" || parts[i] === "<" || parts[i] === "=") {
          operator = parts[i];
        } else if (!isNaN(parseFloat(parts[i]))) {
          value = parseFloat(parts[i]);
        } else {
          parameter += (parameter ? " " : "") + parts[i];
        }
      }
      
      return { parameter, operator, value };
    });
  }
  return (
    <div>
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2 items-center mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-3 py-10 rounded w-full"
          placeholder="Enter your query (e.g., Market Capitalization > 10000 AND ROE > 15 AND P/E Ratio < 20)"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Apply Filters
        </button>
      </div>
    </form>
    {filteredStocks.length > 0 ? <ResultsTable data={filteredStocks} /> : <StockMetrics />}
  </div>
  
  );
}
