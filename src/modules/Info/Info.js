import './Info.css';
import {SlArrowUpCircle, SlArrowDownCircle} from "react-icons/sl";
import {WiThermometerExterior, WiThermometer, WiBarometer} from "react-icons/wi";
import {GoogleMap, useJsApiLoader, Marker, Data} from "@react-google-maps/api";
function Info(props) {
    let unix_timestamp  = props.objUp.sys.sunrise;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
         let minutes = "0" + date.getMinutes();
         let seconds = "0" + date.getSeconds();
         let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
         let unix_timestamp1  = props.objUp.sys.sunset;
    let date1 = new Date(unix_timestamp1 * 1000);
    let hours1 = date1.getHours();
         let minutes1 = "0" + date1.getMinutes();
         let seconds1 = "0" + date1.getSeconds();
         let formattedTime1 = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);
    const {isLoaded} = useJsApiLoader({googleMapsApiKey: 'AIzaSyBajJsy6w9BWWPyygqK94Yu8HvhXWZWjDU',});
    

  return (
    <div className="info">
        <h1>Основні показники </h1>
     
     <div className='map'>{!isLoaded && <h1>Карта завантажується</h1>}
     {isLoaded &&  <GoogleMap mapContainerClassName='mapContainer' onClick={props.oncl} name='win' zoom={10} center={{lat: props.objUp.coord.lat, lng: props.objUp.coord.lon}} > </GoogleMap>}
     </div>
        <div className='item'>
            <h6>Швидкість вітру </h6>
            
            <div className="container1">
  <div className="skills spped">{props.objUp.wind.speed}м/с</div>
</div>
            
        </div>
        <div className='item'>
        <h6>Схід та захід сонця </h6>
        <output className='humidi1'><SlArrowUpCircle className='sunRise1'/>{formattedTime}</output>
        <output className='humidi1'><SlArrowDownCircle className='sunSet1'/>{formattedTime1}</output>
        </div>
        <div className='item'>
        <h6>Вологість</h6>
        <output className='humidi'>{props.objUp.main.humidity}%</output>
            <div className="container2">
  <div className="skills2 spped2">H</div>
        </div>
        </div>
        <div className='item'>
        <h6>Видимість</h6>
        <output className='humidi'>{props.objUp.visibility/1000}км</output>
        <h5>Хороша видимість</h5>
        </div>
        <div className='item'>
        <h6>Мін & Макс Температура</h6>
        <output className='humidi1'><WiThermometerExterior/>{((props.objUp.main.temp_min) - 273.15).toFixed(0)}°C</output>
        <output className='humidi1'><WiThermometer/>{((props.objUp.main.temp_max) - 273.15).toFixed(0)}°C</output>
        </div>
        <div className='item'>
        <h6>Атмосферний тиск</h6>
           <output className='humidi'><WiBarometer/> {(props.objUp.main.pressure/1000).toFixed(0)}bar</output>
        </div>
        
         
         
    </div>
  );
}

export default Info;
