export async function getQuotes(id) {
  const response = await fetch(
    `https://quote-machine-h8o8.onrender.com/quotes/quotes/${id}`
  );
  const data = await response.json();

  return data;
}
