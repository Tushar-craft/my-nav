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
        const res = await fetch(`/api/weather?location=${location}`);
        const data = await res.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error', err);
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
