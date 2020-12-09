import React from 'react';
import { IoIosClose } from 'react-icons/io';

import { Container, Title } from './styles';

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <Container>
      <Title>{message}</Title>
      <footer>
        <IoIosClose onClick={onClose} />
      </footer>
    </Container>
  );
};

export default Alert;
