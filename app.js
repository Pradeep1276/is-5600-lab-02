/* add your code here */
/**
 * Displays the stock information for a selected symbol
 * @param {string} symbol 
 * @param {Array} stocks 
 */
function viewStock(symbol, stocks) {
    // Find the stock data for the given symbol
    const stock = stocks.find(s => s.symbol === symbol);
  
    // Ensure the stock exists before proceeding
    if (stock) {
      // Populate stock information into the appropriate elements
      document.querySelector('#stock-name').innerText = stock.name;
      document.querySelector('#stock-symbol').innerText = stock.symbol;
      document.querySelector('#stock-sector').innerText = stock.sector;
      document.querySelector('#stock-price').innerText = `$${stock.price.toFixed(2)}`;
    }
  }
  
