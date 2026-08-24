export type WeatherCondition =
  | 'clear'
  | 'cloudy'
  | 'fog'
  | 'rain'
  | 'snow'
  | 'storm';

export interface WeatherReading {
  temperatureC: number;
  condition: WeatherCondition;
}

function conditionFromCode(code: number): WeatherCondition {
  if (code === 0 || code === 1) return 'clear';
  if (code === 2 || code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 67) return 'rain';
  if (code >= 71 && code <= 86) return 'snow';
  if (code >= 95) return 'storm';
  return 'cloudy';
}

export async function fetchWeather(
  latitude: number,
  longitude: number,
): Promise<WeatherReading> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=celsius`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);

  const data = await response.json();
  return {
    temperatureC: Math.round(data.current.temperature_2m),
    condition: conditionFromCode(data.current.weather_code),
  };
}
