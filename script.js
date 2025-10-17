document.getElementById("btn").addEventListener("click", getQuote);

async function getQuote() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const quoteObj = data[0];
    const quoteText = quoteObj.q;
    const author = quoteObj.a;
    document.getElementById("output").innerHTML = `"${quoteText}" — ${author}`;
  } catch (error) {
    console.error(error);
    document.getElementById("output").textContent = "Error fetching quote. Please try again.";
  }
}
