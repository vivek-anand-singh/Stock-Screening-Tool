import { useState } from 'react';
import ScreenerForm from './components/ScreenerForm';
import ResultsTable from './components/ResultsTable';
import { stockData } from './data/stockData';
import { applyFilters } from './utils/filterUtils';

export default function App() {
  const [filteredStocks, setFilteredStocks] = useState(stockData);

  const handleApplyFilters = (filters) => {
    const validFilters = filters.filter(f => f.value !== '');
    const results = applyFilters(stockData, validFilters);
    setFilteredStocks(results);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stock Screener</h1>
      <ScreenerForm onApplyFilters={handleApplyFilters} />
      {/* <ResultsTable data={filteredStocks} /> */}
    </div>
  );
}