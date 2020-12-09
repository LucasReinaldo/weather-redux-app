import { WeatherState, WeatherAction } from '../protocols';
import { ActionTypes } from '../types';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case ActionTypes.getWeather: {
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    }
    case ActionTypes.getWeatherLoading: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.getWeatherError: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
