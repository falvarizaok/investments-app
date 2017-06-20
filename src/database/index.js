const fakeDatabase = {
  investments: [
    [{ label: 'Stocks', value: 5}, { label: 'Bonds', value: 30}, { label: 'Cash', value: 10}, { label: 'Commodities', value: 25}, { label: 'Fixed Income', value: 30}],
    [{ label: 'Stocks', value: 20}, { label: 'Bonds', value: 20}, { label: 'Cash', value: 20}, { label: 'Commodities', value: 20}, { label: 'Fixed Income', value: 20}],
    [{ label: 'Stocks', value: 90}, { label: 'Bonds', value: 1}, { label: 'Cash', value: 2}, { label: 'Commodities', value: 3}, { label: 'Fixed Income', value: 4}],
    [{ label: 'Stocks', value: 75}, { label: 'Bonds', value: 2}, { label: 'Cash', value: 8}, { label: 'Commodities', value: 10}, { label: 'Fixed Income', value: 5}],
    [{ label: 'Stocks', value: 17}, { label: 'Bonds', value: 23}, { label: 'Cash', value: 26}, { label: 'Commodities', value: 14}, { label: 'Fixed Income', value: 20}],
    [{ label: 'Stocks', value: 30}, { label: 'Bonds', value: 30}, { label: 'Cash', value: 30}, { label: 'Commodities', value: 4}, { label: 'Fixed Income', value: 6}],
    [{ label: 'Stocks', value: 10}, { label: 'Bonds', value: 10}, { label: 'Cash', value: 10}, { label: 'Commodities', value: 10}, { label: 'Fixed Income', value: 60}],
    [{ label: 'Stocks', value: 15}, { label: 'Bonds', value: 15}, { label: 'Cash', value: 15}, { label: 'Commodities', value: 15}, { label: 'Fixed Income', value: 40}],
    [{ label: 'Stocks', value: 2}, { label: 'Bonds', value: 4}, { label: 'Cash', value: 24}, { label: 'Commodities', value: 20}, { label: 'Fixed Income', value: 50}],
    [{ label: 'Stocks', value: 40}, { label: 'Bonds', value: 40}, { label: 'Cash', value: 10}, { label: 'Commodities', value: 5}, { label: 'Fixed Income', value: 5}]
  ]
};

export const getInvestments = () =>
  new Promise((resolve) => resolve(fakeDatabase.investments));
