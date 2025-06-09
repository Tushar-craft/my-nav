export default async function handler(req, res) {
  const { location } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY; //loads api key from .env.local

  if (!location) {
    return res.status(400).json({ error: 'Location is required' });
  }

  try {
    const weatherRes = await fetch( //fetches data from openweather api using apikey and location
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );
    const data = await weatherRes.json();

    return res.status(200).json({ //status code 200 = Success
      temp: data.main.temp,
      desc: data.weather[0].description,
      city: data.name,
      country: data.sys.country,
    });
  } catch (err) { //status code 500 = Failure
    return res.status(500).json({ error: 'Internal server error' });
  } 
}
