
import { useState } from 'react';
import './App.css';
import GoogelMap from './GoogelMap';

function App() {
  const [name, setName] = useState([])
  const [latitude, setLatitide] = useState([])
  const [longitude, setLongitude] = useState([])
const result = [...name,...latitude,...longitude]
  const add =  (e) => {
    e.preventDefault();
   result.push(name, latitude, longitude)
    console.log(name)
    console.log(latitude)
    console.log(longitude)
  }

  return (
    <div className = "app">
<button className="home">Home</button>
<div className="card">

<form 
onSubmit={add}
>
<div className="label">
<label className="label1">
  Location Name
</label>

<label className="label1" >
  Enter Latitude
</label >
<label className="label1">
  Enter Longitude
</label>
</div>

<div className="line">
<input placeholder="Location"  className="input"    onChange={(event) => {
                setName(event.target.value);
              }}></input>
<input placeholder="Lat"  className="input"  onChange={(event) => {
                setLatitide(event.target.value);
              }}></input>

<input placeholder="Lon"  className="input"  onChange={(event) => {
                setLongitude(event.target.value);
              }}></input>
<button className="submit" type='submit' >Submit</button>
</div>
</form>
</div>

<div className="layout">
  <section>
    <h2><strong>ALL CO-ORDINATES</strong></h2>
    <h5>My Co-ordinates</h5>
   
  <ol>
    <li>{name}----{latitude} {longitude}</li>
    <li>------</li>
    <li>------</li>
    <li>------</li>
  
  </ol>
    
  </section>
</div>
<div className="layout2">
<GoogelMap />

  <h1> This is were Map APi comes in</h1> 


 </div>

</div>
  );
}

export default App;
