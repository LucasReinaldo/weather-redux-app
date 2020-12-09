import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameCountryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NameCountryTitle = styled.h1`
  font-size: 4.8rem;
`;

export const FeelsLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
  align-items: center;
`;

export const FeelsLike = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 24px;
`;

export const Title = styled.p`
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;

export const Image = styled.img`
  height: 72px;
  width: 72px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 16px;
  background: var(--primary-color);
  padding: 8px;
  height: 18rem;
  width: 15rem;
  border-radius: 12px;
  color: var(--background-color);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  > div {
    margin-top: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SectionImage = styled.img`
  height: 72px;
  width: 72px;
  padding: 16px;
`;

export const SectionCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    height: 72px;
    width: 72px;
  }
`;
