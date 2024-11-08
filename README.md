# Stock Screening Tool

A **React-based web application** designed for stock screening, allowing users to filter stocks based on various financial metrics and criteria. This tool helps users make informed investment decisions by applying customized filters to a stock dataset.

## Features

- **Stock Screener Form**: Input custom filters and apply them to screen stocks based on metrics like Market Capitalization, P/E Ratio, ROE, Dividend Yield, and more.
- **Results Table**: Displays filtered stocks with sorting options for metrics, and allows easy navigation through pages of results.
- **Customizable Filters**: Supports a variety of filtering criteria, including `>` (greater than), `<` (less than), and `=` (equal to) for specific stock metrics.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) and npm installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vivek-anand-singh/Stock-Screening-Tool.git
   cd Stock-Screening-Tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the application locally, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, use:

```bash
npm run build
```

This will create a `build` directory with optimized production-ready files.

## Usage

1. Enter your filtering criteria in the text field using the format:
   
   ```
   [Metric] [Operator] [Value]
   ```

   For example: 
   ```
   Market Capitalization > 10000 AND ROE > 15 AND P/E Ratio < 20
   ```

2. Click **Apply Filters** to view the filtered stocks in a sortable table. Pagination controls at the bottom allow navigation through the results.

### Stock Metrics Supported

| Metric                  | Description                     |
|-------------------------|---------------------------------|
| Market Capitalization   | Market cap in billions         |
| P/E Ratio               | Price-to-earnings ratio        |
| ROE                     | Return on equity in percentage |
| Debt-to-Equity Ratio    | Financial leverage ratio       |
| Dividend Yield          | Dividend yield in percentage   |
| Revenue Growth          | Revenue growth in percentage   |
| EPS Growth              | Earnings per share growth      |
| Current Ratio           | Liquidity ratio                |
| Gross Margin            | Profit margin percentage       |

## Project Structure

- **public**: Contains static assets, including the main HTML file and icons.
- **src**:
  - **components**: React components such as `ScreenerForm` (for inputting filters) and `ResultsTable` (for displaying filtered results).
  - **data**: Contains `stockData.js`, which holds stock data.
  - **utils**: Contains helper functions like `filterUtils.js` for applying filters to the data.

## Technologies Used

- **React**: Front-end library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Create React App**: Used for setting up and managing the development environment.

## License

This project is licensed under the MIT License.
