import Axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { WeatherAction, WeatherData, WeatherError } from '../protocols';
import { RootState } from '../rootReducer';
import { ActionTypes } from '../types';

export const getWeatherAction = (
  city: string,
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${process.env.WEATHER_API_KEY}`,
      );

      if (!response.data) {
        const responseData: WeatherError = response.data;
        throw new Error(responseData.message);
      }

      const responseData: WeatherData = response.data;

      dispatch({
        type: ActionTypes.getWeather,
        payload: responseData,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.getWeatherError,
        payload: error.message,
      });
    }
  };
};

export const setLoadingAction = (): WeatherAction => {
  return {
    type: ActionTypes.getWeatherLoading,
  };
};

export const setErrorAction = (): WeatherAction => {
  return {
    type: ActionTypes.getWeatherError,
    payload: '',
  };
};
