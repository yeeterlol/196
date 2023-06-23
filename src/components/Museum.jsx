import React from "react";
import Blahaj from "../imgs/blahaj.png";
import samples from "../testingData"

function Museum() {
  const [whatNumber, setNumber] = React.useState(1);

  function plusOne() {
    if (whatNumber === samples.length-1) {
        console.log("fuck u lol")
    } else {
        setNumber(prevState => prevState+1)
    }
  }
  function subtractOne() {
    if (whatNumber === 1) {
        console.log("fuck u lol")
    } else {
        setNumber(prevState => prevState-1)
    }
  }



  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-grow">
        <div className="flex-shrink-0 w-full sm:w-1/2 flex items-center justify-center">
          <img src={Blahaj} className="h-auto max-w-full" alt="Blahaj" />
        </div>
        <div className="flex flex-col justify-center items-start p-8">
          <h1 className="text-7xl text-white main-font">{samples[whatNumber].name}</h1>
          <br />
          <p className="say-gex text-white">
            {samples[whatNumber].description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center fixed bottom-0 left-0 right-0 p-2">
        <button 
        onClick={subtractOne}
        className="px-4 py-2 rounded bg-blue-500 text-white mr-2">
          &larr;
        </button>
        <p className="text-gray-500">Item {whatNumber}/{samples.length-1}</p>
        <button 
        onClick={plusOne}
        className="px-4 py-2 rounded bg-blue-500 text-white ml-2">
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Museum;
