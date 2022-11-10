import React from 'react';
import './App.css';
import City from './modules/City/City';
import Info from './modules/Info/Info';
import { Component } from "react";

class  App extends  React.Component {
  constructor(props) {
    super(props);

    this.state = {
        error: null, 
        isLoaded: false,
        list: null,
        lat: 49.881995,
        lon: 23.990026
    };
}
   

  componentDidMount() {
    const keyApi = '896318734d52acf68f3a8430bdf2c603';
    const cel = 273.15;
    console.log('Дід маунт');
    navigator.geolocation.watchPosition((position) => {

      
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${ position.coords.longitude}&appid=${keyApi}`)
    .then(res => res.json())
    .then(
      (result) => {
       
        this.setState({
          isLoaded: true,
          list: result

        });
        console.log(this.state.list);
      },
      
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
     });
    
    
   
    
 
    }
    onClick = async (...args: any[]) => {

      let lat, lon;
     const keyApi = '896318734d52acf68f3a8430bdf2c603';
     const cel = 273.15;
     let hf;

     lat = args[0].latLng.lat();
     lon = args[0].latLng.lng();

     await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`)
    .then(res => res.json())
    .then(
      (result) => {
       
        this.setState({
          isLoaded: true,
          list: result

        });
        console.log(this.state.list);
      },
      
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
 


     

 }
    
    
render(){
  
   
  
  const { error, isLoaded, list } = this.state;
  if (error) {
    
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="row">
      <div className="col">
      Loading...
      </div>
      </div>;
  } else {   
    
    return (
    <div className="App">
      <div className="container">
      <City objData={this.state.list} 
      />
      <Info objUp={this.state.list} 
      oncl={this.onClick}/>
      </div>
    </div>
  );
}
}
}
export default App