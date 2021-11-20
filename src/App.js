// components
import ZipcodeForm from './Components/ZipcodeForm'


// react
import {useState, useEffect} from 'react'

// css
import './App.css';

const API_KEY = 'MnJ_QLBKGQO88Wst6Zv8i0_dwR35IHw6wkMM4SkkbqwVWCT3gK9D3TCWLEee-3jMLk-v8YPgJ6tF07WLf3e_zsgzjRzR8iWM669-sSAPepc4sGM8YQwL-iAAqOaXYXYx'

const yelp = require('yelp-fusion');
const client = yelp.client(API_KEY);


function App() {

  // States
  // const [nearByFood, setNearByFood] = useState



  // Functions
  function HandleZipcode(zipcode) {
    client.search({
      location: '30052'
    }).then(response => {
        console.log(response.jsonBody.businesses);
    }).catch(e => {
      console.log(e);
    });
    
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
