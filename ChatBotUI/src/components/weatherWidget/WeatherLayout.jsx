import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import '../../../src/app/globals.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const WeatherLayOut = ({ weatherInfo }) => {
  const defaultImageUrl =
    "https://media.istockphoto.com/id/1024607254/photo/water-surface-with-solar-shine-background.webp?a=1&s=612x612&w=0&k=20&c=KIKYqsCgdSlaKN_BrCutp1mu05s1WLjP1ry6Gv8H7qE=";

  if (!weatherInfo) {
    return (
      <Typography variant="h6" align="center">
        Loading weather details...
      </Typography>
    );
  }

  let temperature = weatherInfo?.temp_c;
  let humidity = weatherInfo?.humidity;

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={defaultImageUrl} alt="Weather Image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo?.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component="div">
            <p className="weatherInfoParagraphs">🌡️ Temperature: {temperature}°C  { temperature <10 ?<AcUnitIcon fontSize = {'small'} color="secondary" /> :  <WhatshotIcon  fontSize = {'small'} color='error'/>}</p>
            <p className="weatherInfoParagraphs">📍 State: {weatherInfo?.State}</p>
            <p className="weatherInfoParagraphs">🌍 Country: {weatherInfo?.country}</p>
            <p className="weatherInfoParagraphs">💧 Humidity: {humidity}% {humidity > 10 ?  <ThunderstormIcon /> : null}</p>
            <p className="weatherInfoParagraphs">⏳ Last Updated: {weatherInfo?.last_updated}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WeatherLayOut;
