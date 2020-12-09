import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 0 4rem;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 36px;
  width: 400px;
  border-radius: 8px;
  outline: none;
  padding: 4px;
  font-size: 1.4rem;
  border: none;
`;

export const Button = styled.button`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  margin: 0 8px;
  background: var(--primary-color);

  svg {
    height: 24px;
    width: 24px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
  }
`;
