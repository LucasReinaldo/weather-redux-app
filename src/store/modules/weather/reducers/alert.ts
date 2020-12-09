import { AlertState, AlertAction } from '../protocols';
import { ActionTypes } from '../types';

const initialState: AlertState = {
  message: '',
};

export default (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case ActionTypes.getWeatherAlert: {
      return {
        message: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
