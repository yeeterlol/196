import React from "react"
import Main from "./components/Main"
import Museum from "./components/Museum";
import Footer from "./components/Footer"


/* 


*/


function App() {
  const [color, setColor] = React.useState(false);

  function setMusuem() {
    setColor(prevState => !prevState);
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
