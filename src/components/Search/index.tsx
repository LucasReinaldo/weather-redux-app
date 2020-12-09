import React, { FormEvent, useCallback, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setAlertAction } from '../../store/modules/weather/actions/alert';
import {
  getWeatherAction,
  setLoadingAction,
} from '../../store/modules/weather/actions/weather';

import { Container, Title, Form, Input, Button } from './styles';

interface SearchProps {
  title: string;
}

const Search = ({ title }: SearchProps) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleGetCity = useCallback((e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (city.trim() === '') {
        return dispatch(setAlertAction('City is required!'));
      }

      dispatch(setLoadingAction());
      dispatch(getWeatherAction(city));
      setCity('');
    },
    [city, dispatch],
  );

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleGetCity}
          placeholder="Enter city name, e.g: Dublin, IE"
        />

        <Button type="submit" aria-label="submit">
          <IoIosSearch type="submit" />
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
