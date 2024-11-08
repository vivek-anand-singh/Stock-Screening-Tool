import { useState } from "react";
import { stockData } from "../data/stockData";
import { applyFilters } from "../utils/filterUtils";
import ResultsTable from "./ResultsTable";
import StockMetrics from "./StockMetrics";

const ScreenerForm = () => {
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
    <div className="bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-black m-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your query (e.g., Market Capitalization > 10000 AND ROE > 15 AND P/E Ratio < 20)"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Apply Filters
          </button>
        </div>
      </form>
      {filteredStocks.length > 0 ? <ResultsTable data={filteredStocks} /> : <StockMetrics />}
      {
        filteredStocks.length > 0 &&
        <button onClick={() => setFilteredStocks([])} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
          Clear Results
        </button>
      }
    </div>
  );
};

export default ScreenerForm;