import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--secondary-color);

  svg {
    height: 16px;
    width: 16px;
    color: #000;
    background: var(--primary-color);
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  margin: 8px;
`;
