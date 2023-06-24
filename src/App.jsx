import React from "react"
import Main from "./components/Main"
import Museum from "./components/Museum";
import Footer from "./components/Footer"


/* 


*/


function App() {
  const [color, setColor] = React.useState("");

  function setMusuem() {
    console.log("toggled")
    setColor(prevState => !prevState);
    console.log(isInMusuem)
  }

  return (
    <main>
    {   
        color 
        ?
        <div>
            <Museum func={setMusuem}/>
        </div>     
        :
        <>
          <Main func={setMusuem} />
          <Footer/>
        </>
    }
    </main>
  )
}

export default App
