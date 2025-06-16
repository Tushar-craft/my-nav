import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Weather.module.css';

const Weather = () => {
  const router = useRouter();
  const { location } = router.query;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location) return;
    
    const fetchWeather = async () => {
      try {
        // Direct client-side fetch to OpenWeather API
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4e85fea7dc62aff848a404da74edcec0&units=metric`
        );
        const data = await res.json();
        setWeatherData({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          desc: data.weather[0].description,
        });
        setLoading(false);
      } catch (err) {
        console.error('Error', err);
        setLoading(false);
      }
    };
    
    fetchWeather();
  }, [location]);

  if (loading || !weatherData) return <p>Loading weather for {location}...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.city}>
        {weatherData.city}, <span className={styles.country}>{weatherData.country}</span>
      </div>
      <div className={styles.temp}>{weatherData.temp}°C</div>
      <div className={styles.desc}>{weatherData.desc}</div>
    </div>
  );
};

export default Weather;
