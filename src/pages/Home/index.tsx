import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../../components/Alert';
import Search from '../../components/Search';
import Weather from '../../components/Weather';
import { setAlertAction } from '../../store/modules/weather/actions/alert';
import { setErrorAction } from '../../store/modules/weather/actions/weather';
import { RootState } from '../../store/modules/weather/rootReducer';

import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const { weather, alert } = useSelector((state: RootState) => state);
  const { data, loading, error } = weather;
  const { message } = alert;

  return (
    <Container>
      <Search title="Search" />
      {loading ? <h2>Loading...</h2> : data && <Weather data={data} />}
      {message && (
        <Alert message={message} onClose={() => dispatch(setAlertAction(''))} />
      )}
      {error && (
        <Alert message={error} onClose={() => dispatch(setErrorAction())} />
      )}
    </Container>
  );
};

export default Home;
