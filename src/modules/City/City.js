import './City.css';
import { FaSearch} from "react-icons/fa";
import {WiCloudy, WiDayCloudy, WiDaySunny} from "react-icons/wi";

function City(props) {
  
  return (
    <div className="city">
      <div className="search">
        <input type='search' value='Пошук за місто'/>    <FaSearch/>
      </div>
      <div className="clouds">
        {props.objData.clouds.all >=67 && <WiCloudy className='iconCloud' />}
        {(props.objData.clouds.all <67 && props.objData.clouds.all >=34) && <WiDayCloudy className='iconCloud' />}
        {props.objData.clouds.all<34  && <WiDaySunny className='iconCloud' />}
      </div>
      <div className='cityTemp'>
        <p>{((props.objData.main.temp) - 273.15).toFixed(0)}°C </p>
      </div>
      <div className='cityLoc'>
        <p>{props.objData.name}, {props.objData.sys.country} </p>
      </div>
    </div>
  );
}

export default City;
