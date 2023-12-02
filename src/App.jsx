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

      <div className="text-xl p-2"> &#123; </div>
      <div className="flex flex-row">
        <div> &nbsp; </div>
        <div class="grid grid-cols-3 divide-x">
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
        <div className="flex flex-col col-span-6">
          <div className="flex flex-row">
            <div>"id" : "</div>
            <div className="text-green-400">{quotes.id}"</div>
          </div>
          <div className="flex flex-row">
            <div>"English" : </div>"
            <div className="text-green-400">{quotes.quote_english}"</div>,
          </div>
          <div className="flex flex-row">
            <div>"Bangla" : </div>"
            <div className="text-green-400">{quotes.quote_bangla}"</div>,
          </div>
          <div className="flex flex-row">
            <div>"Spanish" : </div>"
            <div className="text-green-400">{quotes.quote_spanish}"</div>,
          </div>
          <div className="flex flex-row">
            <div>"Arabic" : </div>"
            <div className="text-green-400">{quotes.quote_arabic}"</div>,
          </div>
          <div className="flex flex-row">
            <div>"Hindi" : </div>"
            <div className="text-green-400">{quotes.quote_hindi}"</div>,
          </div>
          <div className="flex flex-row">
            <div>"Japanese" : </div>"
            <div className="text-green-400">{quotes.quote_japanese}"</div>
          </div>
        </div>
      </div>
      <div className="text-xl p-2"> &#125; </div>

      <div className="flex flex-row h-12 p-4 lg:text-2xl">
        <div className="w-1/2">
          {" "}
          Is this parsed json? No, it's actually a creative way for me to
          practice using the Fetch API in React. Refresh the page to see it
          change.
        </div>

        <div className="w-1/2 hidden">left blank intentionally</div>
      </div>
    </>
  );
}

export default App;
