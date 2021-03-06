// buyCurrency = POST (create) request to create a new wallet transaciton, but will also update (PUT) wallet value
// AJAX request is made to heroku backend, 
// This function is called in thunk action middleware, then dispatched in MDP in container of trading component
export const buyCurrency = (tradeInfo) => {      // ex. purchaseInfo == { user_id: 11, symbol: 'BTC', quantity: 1.0, price: 8000 };
  return $.ajax({
    method: 'POST',
    url: 'api/wallet_transactions',
    data: { tradeInfo }
    // ex. 
    // data: {
    //   user_id: 11,
    //   currency_symbol: 'BTC',
    //   quantity: 1.0,
    //   price: 7000.0
    // }
  });
}

// ex. 
// promise = buyCurrency(purchaseInfo)
// promise.responseJSON == { id: 17, email: 'demo@gmail.com', cash_balance: 3000, portfolio: {'BTC': 1} }


export const sellCurrency = (tradeInfo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/wallet_transactions',
    data: { tradeInfo }
  });
}

 // ex. 
//  saleInfo = {
//   user_id: 11,
//   currency_symbol: 'BTC',
//   quantity: -1.0,
//   price: 7000.0
//  }
