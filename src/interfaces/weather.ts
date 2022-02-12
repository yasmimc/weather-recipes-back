interface WeatherData {
  lat: number;
  lon: number;
  timezone: number;
  timezone_offset: number;
  current: any;
  daily?: object[];
  hourly?: object[];
  minutely?: object[];
}

export default WeatherData;
