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
  /**
 * Renders the portfolio items for the user
 * @param {*} user 
 * @param {Array} stocks 
 */
function renderPortfolio(user, stocks) {
    const { portfolio } = user;
    const portfolioDetails = document.querySelector('.portfolio-list');
  
    // Clear previous portfolio
    portfolioDetails.innerHTML = '';
  
    // Map over portfolio items and render them
    portfolio.map(({ symbol, owned }) => {
      // Create elements for stock symbol, shares, and view button
      const symbolEl = document.createElement('p');
      const sharesEl = document.createElement('p');
      const actionEl = document.createElement('button');
  
      symbolEl.innerText = `Symbol: ${symbol}`;
      sharesEl.innerText = `Shares Owned: ${owned}`;
      actionEl.innerText = 'View';
      actionEl.setAttribute('id', symbol);
      actionEl.classList.add('view-button');
  
      // Append elements to portfolio list
      portfolioDetails.appendChild(symbolEl);
      portfolioDetails.appendChild(sharesEl);
      portfolioDetails.appendChild(actionEl);
  
      // Attach event listener to the view button
      actionEl.addEventListener('click', () => viewStock(symbol, stocks));
    });
  }
  
