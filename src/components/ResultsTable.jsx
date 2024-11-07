import { useState } from 'react';
import { stockMetrics } from '../utils/filterUtils';
import { parameters } from '../data/stockData';

export default function ResultsTable({ data }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[stockMetrics[sortConfig.key]];
    const bValue = b[stockMetrics[sortConfig.key]];

    if (sortConfig.direction === 'asc') {
      return aValue - bValue;
    }
    return bValue - aValue;
  });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              {Object.values(stockMetrics).map((metric, index) => (
                  <th
                  key={index}
                  onClick={() => handleSort(Object.keys(stockMetrics)[index])}
                  className="cursor-pointer border p-2 bg-gray-100"
                  >
                  {metric}
                  {sortConfig.key === Object.keys(stockMetrics)[index] && (
                      <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                    )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((stock, index) => (
              <tr key={index}>
                {Object.values(stockMetrics).map((metric, index) => (
                  <td key={index} className="border p-2">
                    {stock[metric]}{parameters[index].unit}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}