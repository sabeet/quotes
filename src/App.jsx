import { getQuotes } from "./DataService";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 18) + 1;
  };

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const randomId = getRandomNumber();
    getQuotes(randomId).then((quote) => setQuotes(quote));
  }, []);

  console.log(quotes);

  return (
    <>
      {/* <div className="text-4xl"> &#123; </div>
      {quotes.id}
      <div className="text-4xl"> &#125; </div> */}

      <div className="text-2xl"> Is this raw json? No, it's actually a creative way for me to practice using the Fetch API in React. Refresh the page to see it change.</div>

      <div className="text-4xl p-1"> &#123; </div>
      <div className="flex flex-row">
        <div> &nbsp; </div>
        <div class="grid grid-cols-3 divide-x">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
        <div className="flex flex-col col-span-6">
          <div>"id" : "{quotes.id}"</div>
          <div>"English" : "{quotes.quote_english}"</div>
          <div>"Bangla" : "{quotes.quote_bangla}"</div>
          <div>"Spanish" : "{quotes.quote_spanish}"</div>
          <div>"Arabic" : "{quotes.quote_arabic}"</div>
          <div>"Hindi" : "{quotes.quote_hindi}"</div>
          <div>"Japanese" : "{quotes.quote_japanese}"</div>
        </div>
      </div>
      <div className="text-4xl"> &#125; </div>
    </>
  );
}

export default App;
