export const parseTemperature = (temp: number) => {
  const fahreinheit = (temp * 1.8 - 459.67).toFixed(2);
  const celcius = (temp - 273.15).toFixed(2);

  return {
    fahreinheit,
    celcius,
  };
};
