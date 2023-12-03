export async function getQuotes(id) {
  const response = await fetch(
    `https://considerable-moves-includes-boston.trycloudflare.com/quotes/quotes/${id}`
  );
  const data = await response.json();

  return data;
}
