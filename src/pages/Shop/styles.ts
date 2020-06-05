import styled from 'styled-components';
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

export const ContentProducts = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  background: transparent;
  flex-direction: column;
  width: 100%;
  margin: 20px;

  @media all and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media all and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const BoxProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f6f4;
  border-radius: 8px;
  border: 2px solid #f5d09c;
  cursor: pointer;

  > div {
    max-height: 300px;
    overflow: hidden;
    img {
      border-radius: 8px 8px 0px 0px;
      width: 100%;
    }
  }

  span {
    font-size: 16px;
    color: #666;
    font-weight: 500;
    display: block;
  }

  section {
    flex: 1;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: flex-end;
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
