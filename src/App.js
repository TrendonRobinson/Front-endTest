// components
import ZipcodeForm from './Components/ZipcodeForm'


// react
import {useState, useEffect} from 'react'

// css
import './App.css';



function App() {

  // States
  // const [nearByFood, setNearByFood] = useState



  // Functions
  function HandleZipcode(zipcode) {
    
  }



  // -- V2
  function HandleLogin() {

  }




  return (
    <div className="App">
      <ZipcodeForm zipRequest={HandleZipcode}/>
    </div>
  );
}

export default App;
