import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 75px;
  background: #f9f6f4;
  border-bottom: 2px solid #f5d09c;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f5d09c;
  padding: 0 20px;

  img {
    height: 60px;
  }

  svg {
    font-size: 30px;
  }
`;
