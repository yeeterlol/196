
/* 

        previous styling
        <div className="flex h-screen flex-col justify-center items-center gap-5">
          <h1 className='text-white text-6xl font-bold text-center main-font'>196 Museum</h1>
          <p className='text-white text-center main-font'>Are you ready to enter?</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 border border-blue-700 rounded">
            Enter
          </button>
        </div>
*/
import React from "react"
import blahaj from "../imgs/blahaj.png"
import spronkus from "../imgs/spronkus.png"

const randomization = Math.random()
const spronkusOrShonk = randomization > 0.5 ? "spronkus" : "shonk"

const styles = {
  backgroundImage: spronkusOrShonk === "spronkus" ? `url(${spronkus})` : `url(${blahaj})`,
  backgroundPosition: "center"
}

function Main(props) {
  return (
      <>
        <div className="text-white flex h-screen flex-col justify-center items-center gap-5">
          <h1 className='text-8xl font-bold text-center main-font' style={styles}>
            THE<br></br> <span class="gradient-text" data-text="196">196</span> <br></br>MUSEUM
          </h1>
          <button
                onClick={props.func}
                className="rounded-md bg-indigo-600 px-64 py-5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Enter
            </button>
        </div>
      </>
    )
}
  
export default Main
  