export async function getQuotes(id) {
  const response = await fetch(`http://localhost:8080/quotes/quotes/${id}`);
  const data = await response.json();

  return data;
}
