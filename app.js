/* add your code here */
// delete 
actionEl.innerText = "Delete";
actionEl.classList.add("delete-btn");

// Find the full stock details from the stocks data
const stockDetails = stocks.find((stock) => stock.symbol === symbol);

// Create a container for the stock info
const stockContainer = document.createElement("div");
stockContainer.classList.add("portfolio-item");

// Display stock name and price if details are found
if (stockDetails) {
  const stockName = document.createElement("p");
  const stockPrice = document.createElement("p");
  stockName.innerText = stockDetails.name;
  stockPrice.innerText = `Price: $${stockDetails.price}`;
  stockContainer.appendChild(stockName);
  stockContainer.appendChild(stockPrice);
}

// Append symbol, shares, and delete action to the container
stockContainer.appendChild(symbolEl);
stockContainer.appendChild(sharesEl);
stockContainer.appendChild(actionEl);

// Add delete event listener to the button
actionEl.addEventListener("click", () => {
  const index = portfolio.findIndex((item) => item.symbol === symbol);
  if (index > -1) {
    portfolio.splice(index, 1);
    renderPortfolio(user, stocks);
  }
});

portfolioDetails.appendChild(stockContainer);
;
function handleUserListClick(event, users, stocks) {
    const userId = event.target.id;
    const user = users.find((user) => user.id == userId);
    populateForm(user);
    renderPortfolio(user, stocks);
  }
  
