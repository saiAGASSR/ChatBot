import { useEffect, useMemo, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../../../public/css/weather.css"



const WeatherCall = ({ setWeatherInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);



  let getWeatherData = async (cityName)=>{
    try {

        const apiKey = "c41d28f67dc04c20a8d181523252503"; // Use env variable
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;
        
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        let requiredData = {

          humidity : data.current.humidity,
          temp_c : data.current.temp_c,
          last_updated : data.current.last_updated,
          city : data.location.name,
          State : data.location.region,
          country : data.location.country,

        }
        console.log(requiredData);
        
        return requiredData;
      
    }
    catch (err){
      console.log(err);
      
    }

    

  }

  useEffect(()=>{

    (async () => {
      const initialData = await getWeatherData("Mumbai");
      if (initialData) setWeatherInfo(initialData);
    })();

  } ,[])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("City name cannot be empty.");
      return;
    }

    try {

      let info = await getWeatherData(city);

      console.log(info);
      setWeatherInfo(info)
       
      setCity("")
    } 
    catch(err){
      console.log(err);
      
    }

    
    
  };

  return (

    <div id="searhBox">

        <form onSubmit={handleSubmit}>
            <TextField id="city" label="Enter User id" variant="outlined"  value={city} onChange={(e) => setCity(e.target.value)}/>

          <Button variant="contained" type="submit" required style={{"marginLeft":"12px"  , "marginTop":"6px"}}>Submit</Button>
        </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default WeatherCall;
