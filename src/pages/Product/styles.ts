import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-items: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  background: transparent;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  border-radius: 10px;
  padding: 20px;
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentProducts = styled.div`
  display: grid;
  flex: 1;
  grid-gap: 10px;
  grid-template-columns: 1.5fr 1fr;
  background: transparent;
  flex-direction: column;
  width: 100%;
  margin: 20px;

  @media all and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

interface ProductProps {
  image: string;
}

export const BoxProduct = styled.div<ProductProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex: 1;
  ${props =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      min-height: 360px;
    `}

  img {
    border-radius: 8px 8px 0px 0px;
    width: 100%;
  }

  span {
    font-size: 14px;
    color: #666;
    font-weight: 500;
    margin-top: 15px;
  }

  section {
    flex: 1;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-weight: bold;
      font-size: 20px;
      color: #666;
      min-width: 90px;
      text-align: right;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: #f5d09c;
  margin: 20px 20px;
  padding: 0px 15px;
  flex: 1;
  border-radius: 8px;
  color: #666;

  input {
    height: 60px;
    font-size: 22px;
    color: #666;
    font-weight: 700;
    border: 0;
    flex: 1;
    background: transparent;
    min-width: 50px;
  }

  svg {
    margin-right: 10px;
    min-width: 20px;
    display: block;
  }

  button {
    background: transparent;
    border: 0px;
    height: 100%;
    width: 40px;
    min-width: 20px;
    display: block;
    position: relative;
    right: -15px;
  }
`;

export const BoxInfo = styled.div`
  color: #666;
  padding-top: 10px;

  h3 {
    margin: 0px 5px;
  }

  p {
    margin: 15px 5px;
  }

  div {
    margin: 5px 10px 25px 5px;
  }

  strong {
    font-weight: bold;
    font-size: 30px;
    color: #666;
    min-width: 90px;
    text-align: right;
    margin: 10px 5px;
  }

  button {
    background: #53a93f;
    color: #fff;
    border: 0;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    svg {
      margin-right: 15px;
    }
  }
`;

interface ButtonProps {
  active: boolean;
}
export const Button = styled.button<ButtonProps>`
  height: 80px;
  width: 40px;
  ${props =>
    !props.active &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `}
`;
