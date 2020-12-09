import { ActionTypes } from './types';

export interface Weather {
  id: number;
  description: string;
  icon: string;
  main: string;
}

export interface WeatherData {
  id: number;
  base: string;
  cod: number;
  dt: number;
  name: string;
  timezone: number;
  weather: Weather[];
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_main: number;
    temp_max: number;
  };
  clouds: {
    all: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  sys: {
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
    type: number;
  };
  wind: {
    deg: number;
    speed: number;
  };
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface GetWeatherAction {
  type: typeof ActionTypes.getWeather;
  payload: WeatherData;
}

interface SetLoadingAction {
  type: typeof ActionTypes.getWeatherLoading;
}

interface SetErrorAction {
  type: typeof ActionTypes.getWeatherError;
  payload: string;
}

export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction;

export interface AlertAction {
  type: typeof ActionTypes.getWeatherAlert;
  payload: string;
}

export interface AlertState {
  message: string;
}
