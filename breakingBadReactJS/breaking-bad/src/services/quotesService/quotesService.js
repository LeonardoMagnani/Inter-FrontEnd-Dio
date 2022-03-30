export const getQuote = () => fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then(response => response.json());
